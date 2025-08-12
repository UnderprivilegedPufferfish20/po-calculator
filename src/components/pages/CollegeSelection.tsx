'use client';

import React, { useState } from 'react';
import AestheticScreen from '../Screen';
import { Button } from '../ui/button';
import { College, ConferenceType } from '@/lib/types/college';
import { colleges, conferences } from '@/lib/constants/colleges';
import { AtheleteType, Stage } from '@/lib/types';
import { glassCard } from '@/lib/utils';
import { useCalculatorProvider } from '../providers/CalculatorProvider';
import CollegeCard from '../cards/CollegeCard'; // <-- import your reusable card

const CollegeSelectionPage = () => {
  const { setStage, athleteType, selectedColleges, handleCollegeSelect } = useCalculatorProvider();

  const maxColleges: number = athleteType === AtheleteType.YOUTH ? 5 : 2;
  const [selectedConference, setSelectedConference] = useState<ConferenceType | 'All'>('All');
  const [collegeSearchTerm, setCollegeSearchTerm] = useState<string>('');

  // Filter logic for colleges
  const filteredColleges: College[] = colleges.filter((college) => {
    const matchesConference =
      selectedConference === 'All' || college.conference === selectedConference;
    const matchesSearch = college.name.toLowerCase().includes(collegeSearchTerm.toLowerCase());
    return matchesConference && matchesSearch;
  });

  return (
    <AestheticScreen
      title="Select Colleges"
      subtitle={`Choose up to ${maxColleges} colleges you're interested in • ${selectedColleges.length} selected`}
      headerSlot={
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Conference selection */}
          <div className="flex flex-wrap justify-center gap-2">
            {conferences.map((conference) => (
              <Button
                key={conference}
                onClick={() => setSelectedConference(conference as ConferenceType)}
                variant={selectedConference === conference ? 'default' : 'outline'}
                className={
                  selectedConference === conference
                    ? 'bg-purple-600 text-white'
                    : `${glassCard} hover:bg-gray-800`
                }
              >
                {conference}
              </Button>
            ))}
          </div>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search colleges..."
            className={`${glassCard} w-full p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
            value={collegeSearchTerm}
            onChange={(e) => setCollegeSearchTerm(e.target.value)}
          />
        </div>
      }
    >
      {/* College grid */}
      {filteredColleges.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredColleges.map((college) => (
            <CollegeCard
              key={college.name}
              name={college.name}
              conference={college.conference}
              imgUrl={college.imgUrl}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 text-gray-400 text-xl">
          No colleges found matching your criteria
        </div>
      )}

      {/* Selected colleges list */}
      {selectedColleges.length > 0 && (
        <div className={`${glassCard} mt-8 p-6`}>
          <h3 className="text-xl font-semibold mb-4 text-center">Selected Colleges</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {selectedColleges.map((name) => (
              <div
                key={name}
                className="bg-purple-900/30 border border-purple-500/60 rounded-lg px-3 py-2 flex items-center gap-2"
              >
                <span className="text-sm font-medium">{name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCollegeSelect(name)}
                  className="text-red-400 hover:text-red-300 hover:bg-red-900/20 p-1 h-auto"
                >
                  ✕
                </Button>
              </div>
            ))}
          </div>

          {/* Continue button */}
          <div className="flex justify-center">
            <Button
              onClick={() => setStage(Stage.END)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg"
            >
              Complete Setup
            </Button>
          </div>
        </div>
      )}
    </AestheticScreen>
  );
};

export default CollegeSelectionPage;
