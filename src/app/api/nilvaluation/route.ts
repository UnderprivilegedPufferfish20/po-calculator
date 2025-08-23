import { NextRequest, NextResponse } from "next/server";
import { AthleteType } from "@/lib/types/athlete";
import { CalculatorInputSchema, CalculatorOutput, MediumEstimation, ValueEstimation } from '@/lib/types/nil'
import logCalculation from "@/lib/actions/calculations";
import { athleteMultipliers, sportMultipliers, collegeMultipliers, platformMultipliers } from "@/lib/constants/multipliers";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  try {
    const input = await req.json()
  
    const validatedInput = CalculatorInputSchema.parse(input);
  
    const { athleteType, selectedColleges, selectedPlatforms, sportPlayed } = validatedInput;
  
    const athleteMult = athleteMultipliers[athleteType];
    const sportMult = sportMultipliers[sportPlayed.name] || 1.0; // Default to 1.0 if sport not in map
  
    const results: CalculatorOutput = [];
  
    for (const college of selectedColleges) {
      const collegeMult = collegeMultipliers[college] || 1.0; // Default to 1.0 if college not in map
  
      // Compute projected platform values (earnings per image/video post, adjusted by multipliers)
      const platformValues = selectedPlatforms.map((plat: any) => {
        const platMult = platformMultipliers[plat.name] || 1.0;
        const followers = plat.followers;
  
        // Base earnings per post (approximate influencer rates: $0.001 to $0.005 per follower for image, higher for video)
        const baseImageLow = followers * 0.001;
        const baseImageHigh = followers * 0.005;
        const baseVideoLow = followers * 0.002;
        const baseVideoHigh = followers * 0.01;
  
        // Adjust by multipliers (athlete type, sport, college, platform)
        const imageLow = baseImageLow * athleteMult * sportMult * collegeMult * platMult;
        const imageHigh = baseImageHigh * athleteMult * sportMult * collegeMult * platMult;
        const videoLow = baseVideoLow * athleteMult * sportMult * collegeMult * platMult;
        const videoHigh = baseVideoHigh * athleteMult * sportMult * collegeMult * platMult;
  
        return {
          name: plat.name,
          values: {
            image: { low: Math.round(imageLow), high: Math.round(imageHigh) },
            video: { low: Math.round(videoLow), high: Math.round(videoHigh) },
          },
        };
      });
  
      // Compute overall (sum of all platforms' projected values)
      let overallImageLow = 0;
      let overallImageHigh = 0;
      let overallVideoLow = 0;
      let overallVideoHigh = 0;
  
      platformValues.forEach((pv) => {
        overallImageLow += pv.values.image.low;
        overallImageHigh += pv.values.image.high;
        overallVideoLow += pv.values.video.low;
        overallVideoHigh += pv.values.video.high;
      });
  
      const overall: MediumEstimation = {
        image: { low: overallImageLow, high: overallImageHigh },
        video: { low: overallVideoLow, high: overallVideoHigh },
      };
  
      const careerLength = athleteType === "Youth" ? 2 : athleteType === "College" ? 4 : 10;
      const avgAnnualLow = (overallImageLow + overallVideoLow) / 2;
      const avgAnnualHigh = (overallImageHigh + overallVideoHigh) / 2;
      const ncvLow = Math.round(avgAnnualLow * careerLength * 10); 
      const ncvHigh = Math.round(avgAnnualHigh * careerLength * 10);
  
      const ncv: ValueEstimation = { low: ncvLow, high: ncvHigh };
  
      results.push({
        name: college,
        ncv,
        overall,
        platforms: platformValues,
      });
    }
  
    // Log the calculation to the database
    await logCalculation(input, results);
    
    return NextResponse.json(results as CalculatorOutput)


  } catch (error) {

    if (error instanceof ZodError) {
      return NextResponse.json(
        { 
          error: 'Invalid input data',
        },
        { status: 400 }
      );
    }

    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
    
  }
  
}