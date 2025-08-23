'use client';

import React, { useState } from 'react';
import AestheticScreen from '../Screen';
import { Button } from '../ui/button';
import { College, ConferenceType } from '@/lib/types/college';
import { colleges, conferences } from '@/lib/constants/colleges';
import { glassCard } from '@/lib/utils';
import { useCalculatorProvider } from '../providers/CalculatorProvider';
import CollegeCard from '../cards/CollegeCard';
import { Search } from 'lucide-react';

const CollegeSelectionPage = () => {
  const { setStage, athleteType, selectedColleges, handleCollegeSelect } = useCalculatorProvider();

  const maxColleges: number = athleteType === "Youth" ? 5 : 2;
  const [selectedConference, setSelectedConference] = useState<ConferenceType | 'All'>('All');
  const [collegeSearchTerm, setCollegeSearchTerm] = useState<string>('');

  // Filter logic for colleges
  const filteredColleges: College[] = colleges.filter((college) => {
    const matchesConference =
      selectedConference === 'All' || college.conference === selectedConference;
    const matchesSearch = college.name.toLowerCase().includes(collegeSearchTerm.toLowerCase());
    return matchesConference && matchesSearch;
  });

  // Get college objects for selected colleges
  const selectedCollegeObjects: College[] = colleges.filter(college => 
    selectedColleges.includes(college.name)
  );

  return (
    <AestheticScreen
      title="Select Colleges"
      subtitle={`Choose up to ${maxColleges} colleges you're interested in`}
      headerSlot={
        <div className="max-w-4xl mx-auto transition-all duration-1000 delay-300 translate-y-8 opacity-100">
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
              <div className="shrink-0 flex items-center gap-2 overflow-x-auto max-w-[60%] pl-2 no-scrollbar">
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
      {/* Selected Colleges Grid */}
      {selectedColleges.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">Your Selected Colleges</h3>
            <div className="text-sm text-gray-300">
              {selectedColleges.length} of {maxColleges} selected
            </div>
          </div>
          
          <div className={`${glassCard} p-4 rounded-xl mb-6`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {selectedCollegeObjects.map((college) => (
                <div key={college.name} className="relative">
                  {/* consistent box */}
                  <div className="aspect-[4/5]"> {/* or aspect-square */}
                    <CollegeCard
                      name={college.name}
                      conference={college.conference}
                    />
                  </div>

                  <Button
                    onClick={() => handleCollegeSelect(college.name)}
                    className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 p-0 flex items-center justify-center text-xs shadow-lg"
                  >
                    ✕
                  </Button>
                </div>
              ))}

              {Array.from({ length: Math.max(0, maxColleges - selectedColleges.length) }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="aspect-[4/5] rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center text-gray-500 text-sm"
                >
                  Empty
                </div>
              ))}
            </div>

          </div>

          {/* Continue Button */}
          <div className="flex justify-center mb-8">
            <Button
              onClick={() => setStage("E")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Complete Setup →
            </Button>
          </div>
        </div>
      )}

      {/* Divider */}
      {selectedColleges.length > 0 && (
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 text-gray-400">
              Choose from all colleges
            </span>
          </div>
        </div>
      )}

      {/* All Colleges Grid */}
      <div>
        {selectedColleges.length === 0 && (
          <h3 className="text-xl font-semibold text-white mb-4">Choose Your Colleges</h3>
        )}
        
        {filteredColleges.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredColleges.map((college) => {
              const isSelected = selectedColleges.includes(college.name);
              const isDisabled = !isSelected && selectedColleges.length >= maxColleges;
              
              return (
                <div 
                  key={college.name} 
                  className={`relative ${
                    isSelected ? 'opacity-50' : ''
                  } ${
                    isDisabled ? 'opacity-30 pointer-events-none' : ''
                  }`}
                >
                  <CollegeCard
                    name={college.name}
                    conference={college.conference}
                  />
                  {isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        ✓
                      </div>
                    </div>
                  )}
                  {isDisabled && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg">
                      <div className="text-gray-400 text-xs text-center px-2">
                        Max reached
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 text-gray-400 text-xl">
            No colleges found matching your criteria
          </div>
        )}
      </div>
    </AestheticScreen>
  );
};

export default CollegeSelectionPage;