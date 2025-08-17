'use client'

import React, { useEffect, useState } from 'react'
import { Stage } from '@/lib/types/athlete'
import SocialMediaPage from '@/components/pages/SocialMedia'
import AthleteTypePage from '@/components/pages/AthleteType'
import SportSelectionPage from '@/components/pages/SportSelection'
import CollegeSelectionPage from '@/components/pages/CollegeSelection'
import { useCalculatorProvider } from '@/components/providers/CalculatorProvider'
import NILValueDemo from '@/components/pages/ValueOutput'
import { calculateNILValue } from '@/lib/utils/postValue'
import Stepper from '@/components/ui/stepper'



export default function Home() {
  const {stage, athleteType, selectedColleges, selectedPlatforms, sportPlayed} = useCalculatorProvider()

  const [mounted, setMounted] = useState(false);
  const [output, setOutput] = useState<Awaited<ReturnType<typeof calculateNILValue>> | null>(null)
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (stage !== Stage.END) return;

    async function getData() {
      const g = await calculateNILValue({ selectedColleges, selectedPlatforms, athleteType: athleteType!, sportPlayed: sportPlayed! })
      setOutput(g)
    }

    getData()

  }, [stage])

  return (
    <>
      {stage === Stage.ATHLETE_SELECT && <AthleteTypePage mounted={mounted} />}
      {stage === Stage.SPORT_SELECT && <SportSelectionPage />}
      {stage === Stage.SOCIAL_MEDIA_SELECT && <SocialMediaPage />}
      {stage === Stage.COLLEGE_SELECT && <CollegeSelectionPage />}
      {stage === Stage.END && <NILValueDemo colleges={output?.calculationResults}/>}
    </>
  )
}