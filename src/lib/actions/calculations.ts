"use server";

import { colleges } from "../constants/colleges";
import prisma from "../db";
import { CalculatorInput, CalculatorOutput } from "../types/nil";

export default async function logCalculation(input: CalculatorInput, calculatedOutput: CalculatorOutput) {
  return prisma.$transaction(async (tx) => {
    // Process each college's calculation results
    const allResults = [];

    for (const result of calculatedOutput) {
      // Create the CalculationOutput with actual calculated values
      const calculationOutput = await tx.calculationOutput.create({
        data: {
          college_name: result.name,
          img_low: result.overall.image.low,
          img_high: result.overall.image.high,
          vid_low: result.overall.video.low,
          vid_high: result.overall.video.high,
          ncv_low: result.ncv.low,
          ncv_high: result.ncv.high,
        },
        select: { id: true },
      });

      // Create platform-specific data for this college
      const platformSpecifics = await Promise.all(
        result.platforms.map((platform) =>
          tx.socialMediaPlatformSpecific.create({
            data: {
              output_id: calculationOutput.id,
              name: platform.name,
              img_low: platform.values.image.low,
              img_high: platform.values.image.high,
              vid_low: platform.values.video.low,
              vid_high: platform.values.video.high,
            },
            select: { id: true },
          })
        )
      );

      // Create the central CalculationInput record
      const calculationInput = await tx.calculationInput.create({
        data: {
          output_id: calculationOutput.id,
          athlete_type_input_id: "", // Will be updated after creating AthleteTypeInput
          sport_input_id: "", // Will be updated after creating SportInput
        },
        select: { id: true },
      });

      // Athlete type (single row) - connect to CalculationInput
      const athlete = await tx.athleteTypeInput.create({
        data: { 
          athlete_type: input.athleteType,
          input_id: calculationInput.id,
        },
        select: { id: true },
      });

      // Sport (single row) - connect to CalculationInput
      const position = input.sportPlayed.positions?.[0] ?? 'N/A';
      const sport = await tx.sportInput.create({
        data: { 
          sport: input.sportPlayed.name, 
          position,
          input_id: calculationInput.id,
        },
        select: { id: true },
      });

      // Update CalculationInput with the actual foreign key IDs
      await tx.calculationInput.update({
        where: { id: calculationInput.id },
        data: {
          athlete_type_input_id: athlete.id,
          sport_input_id: sport.id,
        },
      });

      // Colleges (many rows) — create for the current college
      const collegeInput = await tx.collegeInput.create({
        data: {
          college: result.name,
          conference: colleges.find((c) => c.name === result.name)?.conference || "Unknown",
          input_id: calculationInput.id,
        },
        select: { id: true },
      });

      // Social platforms (many rows) - connect to CalculationInput
      const createdPlatforms = await Promise.all(
        input.selectedPlatforms.map((p) =>
          tx.socialMediaInput.create({
            data: { 
              platform: p.name, 
              followers: p.followers,
              input_id: calculationInput.id,
            },
            select: { id: true },
          })
        )
      );

      allResults.push({
        collegeName: result.name,
        calculationInputId: calculationInput.id,
        calculationOutputId: calculationOutput.id,
        athleteTypeInputId: athlete.id,
        collegeInputId: collegeInput.id,
        socialMediaInputIds: createdPlatforms.map((p) => p.id),
        sportInputId: sport.id,
        platformSpecificIds: platformSpecifics.map((p) => p.id),
      });
    }

    return allResults;
  });
}