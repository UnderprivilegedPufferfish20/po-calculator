'use client'

import React, { useState } from 'react'
import AestheticScreen from '../Screen';
import { glassCard } from '@/lib/utils';
import { sports } from '@/lib/constants/sports';
import { SportCard } from '../cards/SportCard';
import { useCalculatorProvider } from '../providers/CalculatorProvider';



const SportSelectionPage = () => {
  const {athleteType, setSportPlayed} = useCalculatorProvider()

  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredSports = sports.filter(sport =>
    sport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
        <AestheticScreen
          title={String(athleteType)}
          subtitle="Select the sport you play"
          headerSlot={
            <div className="w-full max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search sports or positions..."
                className={`${glassCard} w-full p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          }
        >
          {filteredSports.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredSports.map((sport) => (
                <SportCard
                  key={sport.name}
                  name={sport.name}
                  positions={sport.positions}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-64 text-gray-400 text-xl">
              No sports found matching "{searchTerm}"
            </div>
          )}
        </AestheticScreen>
  );
}

export default SportSelectionPage