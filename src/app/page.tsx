'use client'

import React, { useEffect, useState } from 'react'
import SocialMediaPage from '@/components/pages/SocialMedia'
import AthleteTypePage from '@/components/pages/AthleteType'
import SportSelectionPage from '@/components/pages/SportSelection'
import CollegeSelectionPage from '@/components/pages/CollegeSelection'
import { useCalculatorProvider } from '@/components/providers/CalculatorProvider'
import NILValueDemo from '@/components/pages/ValueOutput'
import { CalculatorOutput } from '@/lib/types/nil'



export default function Home() {
  const {stage, athleteType, selectedColleges, selectedPlatforms, sportPlayed} = useCalculatorProvider()

  const [output, setOutput] = useState<CalculatorOutput | undefined>(undefined)
  

  useEffect(() => {
    if (stage !== "E") return;

    async function getData() {

      const res = await fetch(
        '/api/nilvaluation', 
        { 
          method: "POST", 
          body: JSON.stringify({ athleteType, selectedColleges, selectedPlatforms, sportPlayed }) 
        }
      )

      if (!res.ok) throw new Error("Page - calculation endpoint not working");

      const data = await res.json()

      setOutput(data)
    }

    getData()

  }, [stage])

  return (
    <>
      {stage === "AS" && <AthleteTypePage />}
      {stage === "SS" && <SportSelectionPage />}
      {stage === "SMS" && <SocialMediaPage />}
      {stage === "CS" && <CollegeSelectionPage />}
      {stage === "E" && <NILValueDemo colleges={output}/>}
    </>
  )
}