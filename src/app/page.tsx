'use client'

import React, { useEffect, useState } from 'react'
import { Stage } from '@/lib/types'
import SocialMediaPage from '@/components/pages/SocialMedia'
import AthleteTypePage from '@/components/pages/AthleteType'
import SportSelectionPage from '@/components/pages/SportSelection'
import CollegeSelectionPage from '@/components/pages/CollegeSelection'
import { useCalculatorProvider } from '@/components/providers/CalculatorProvider'
import { calculatePlayerValue } from '@/lib/utils/postValue'
import NILValueDemo from '@/components/pages/ValueOutput'


export default function Home() {
  const {stage, athleteType, selectedColleges, selectedPlatforms, sportPlayed} = useCalculatorProvider()

  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  


  // First screen: Choose athlete type
  if (stage === Stage.ATHLETE_SELECT) {
     return <AthleteTypePage mounted={mounted} />
  }

  // Second screen: Sport selection
  if (stage === Stage.SPORT_SELECT) {
    return <SportSelectionPage />
  }

  // Third Screen: Social Media Followers Selection
  if (stage === Stage.SOCIAL_MEDIA_SELECT) {
    return <SocialMediaPage />
  }

  // Fourth Screen: College Selection
  if (stage === Stage.COLLEGE_SELECT) {
    return <CollegeSelectionPage />
  }

  if (stage === Stage.END) {
    return <NILValueDemo />
  }
}