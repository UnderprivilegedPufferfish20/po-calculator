'use client'


import { AtheleteType, SportType, Stage } from "@/lib/types";
import { SelectedPlatform } from "@/lib/types/social_media";
import React, { Dispatch, SetStateAction, useState,createContext } from "react";

type CalculatorProviderContextType = {
  stage: Stage
  setStage: Dispatch<SetStateAction<Stage>>

  athleteType: AtheleteType | null
  setAthleteType: Dispatch<AtheleteType | null>

  selectedColleges: string[]
  setSelectedColleges: Dispatch<SetStateAction<string[]>>

  selectedPlatforms: SelectedPlatform[]
  setSelectedPlatforms: Dispatch<SetStateAction<SelectedPlatform[]>>

  sportPlayed: SportType | null
  setSportPlayed: Dispatch<SetStateAction<SportType | null>>

  handleCollegeSelect: (collegeName: string) => void;

}

export const CalculatorProviderContext = createContext<CalculatorProviderContextType | null>(null)

export function CalculatorContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [athleteType, setAthleteType] = useState<AtheleteType | null>(null);
  const [sportPlayed, setSportPlayed] = useState<SportType | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<SelectedPlatform[]>([]);
  const [selectedColleges, setSelectedColleges] = useState<string[]>([]);
  const [stage, setStage] = useState<Stage>(Stage.ATHLETE_SELECT)

  const handleCollegeSelect = (collegeName: string): void => {
    setSelectedColleges(prev => {
      if (prev.includes(collegeName)) {
        return prev.filter(name => name !== collegeName);
      } else if (prev.length < (athleteType === AtheleteType.YOUTH ? 5 : 2)) {
        return [...prev, collegeName];
      }
      return prev;
    });
  };

  return (
    <CalculatorProviderContext.Provider value={{
      athleteType,
      setAthleteType,
      sportPlayed,
      setSportPlayed,
      selectedPlatforms,
      setSelectedPlatforms,
      selectedColleges,
      setSelectedColleges,
      stage,
      setStage,
      handleCollegeSelect
    }}>
      {children}
    </CalculatorProviderContext.Provider>
  )
}

export const useCalculatorProvider = () => {
  const context = React.useContext(CalculatorProviderContext);
  if (!context) {
    throw new Error("useCalculatorProvider must be used within a CalculatorContextProvider");
  }
  return context;
};