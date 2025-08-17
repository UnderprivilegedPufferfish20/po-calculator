'use client';

import React, { useState } from 'react';
import AestheticScreen from '../Screen';
import { Button } from '../ui/button';
import { College, ConferenceType } from '@/lib/types/college';
import { colleges, conferences } from '@/lib/constants/colleges';
import { AtheleteType, Stage } from '@/lib/types/athlete';
import { glassCard } from '@/lib/utils';
import { useCalculatorProvider } from '../providers/CalculatorProvider';
import CollegeCard from '../cards/CollegeCard'; // <-- import your reusable card
import { Search } from 'lucide-react';

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
        <div className="max-w-4xl mx-auto">
          {/* Search bar with inline conference filters */}
          <label className="block">
            <div
              className={`${glassCard} flex items-center gap-2 rounded-xl p-2 pl-3 pr-2 focus-within:ring-2 focus-within:ring-purple-500`}
            >
              <Search className="h-4 w-4 opacity-70" />
              <input
                type="text"
                placeholder="Search colleges…"
                className="min-w-0 flex-1 bg-transparent py-2 text-white placeholder:text-white/60 focus:outline-none"
                value={collegeSearchTerm}
                onChange={(e) => setCollegeSearchTerm(e.target.value)}
              />

              {/* Right-aligned, inline filter chips */}
              <div className="shrink-0 flex items-center gap-2 overflow-x-auto max-w-[55%] pl-2">
                {conferences.map((conference) => (
                  <Button
                    key={conference}
                    size="sm"
                    onClick={() => {
                      selectedConference === conference 
                        ? setSelectedConference('All')
                        : setSelectedConference(conference as ConferenceType)
                    }}
                    variant={selectedConference === conference ? "default" : "outline"}
                    className={
                      "whitespace-nowrap " +
                      (selectedConference === conference
                        ? "bg-purple-600 text-white"
                        : `${glassCard} hover:bg-gray-800`)
                    }
                  >
                    {conference}
                  </Button>
                ))}
              </div>
            </div>
          </label>
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
        <div className={`${glassCard} mt-8 p-6 sticky bottom-[-48px]`}>
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
