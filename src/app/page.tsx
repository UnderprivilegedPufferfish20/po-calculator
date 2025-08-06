'use client'

import React, { JSX, useState } from 'react'
import { AtheleteTypeCard } from '@/components/AtheleteTypeCard'
import { SportCard } from '@/components/SportCard'
import { AthleteType, SelectedPlatform, SelectedSportType, SocialMediaPlatform } from '@/lib/types'
import { socialMediaPlatforms, sports } from '@/lib/constants'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

// Types for college selection
interface College {
  name: string;
  conference: ConferenceType;
  imgUrl: string;
}

type ConferenceType = 'Big 10' | 'ACC' | 'Big 12' | 'SEC';

interface SocialMediaData {
  platforms: SelectedPlatform[];
  totalReach: number;
}

interface SavedUserData {
  athleteType: AthleteType | null;
  sportPlayed: SelectedSportType | null;
  socialMediaData: SocialMediaData | null;
  selectedColleges: string[];
}

interface CollegeCardProps {
  name: string;
  conference: ConferenceType;
  imgUrl: string;
  onSelect: (name: string) => void;
  isSelected: boolean;
}

// College data with conferences
const colleges: College[] = [
  // Big 10
  { name: "University of Michigan", conference: "Big 10", imgUrl: "/colleges/michigan.png" },
  { name: "Ohio State University", conference: "Big 10", imgUrl: "/colleges/ohio-state.png" },
  { name: "Penn State University", conference: "Big 10", imgUrl: "/colleges/penn-state.png" },
  { name: "University of Wisconsin", conference: "Big 10", imgUrl: "/colleges/wisconsin.png" },
  { name: "Michigan State University", conference: "Big 10", imgUrl: "/colleges/michigan-state.png" },
  { name: "Northwestern University", conference: "Big 10", imgUrl: "/colleges/northwestern.png" },
  { name: "University of Iowa", conference: "Big 10", imgUrl: "/colleges/iowa.png" },
  { name: "Indiana University", conference: "Big 10", imgUrl: "/colleges/indiana.png" },
  { name: "University of Minnesota", conference: "Big 10", imgUrl: "/colleges/minnesota.png" },
  { name: "Purdue University", conference: "Big 10", imgUrl: "/colleges/purdue.png" },
  { name: "University of Illinois", conference: "Big 10", imgUrl: "/colleges/illinois.png" },
  { name: "University of Nebraska", conference: "Big 10", imgUrl: "/colleges/nebraska.png" },
  { name: "Rutgers University", conference: "Big 10", imgUrl: "/colleges/rutgers.png" },
  { name: "University of Maryland", conference: "Big 10", imgUrl: "/colleges/maryland.png" },
  
  // ACC
  { name: "Duke University", conference: "ACC", imgUrl: "/colleges/duke.png" },
  { name: "University of North Carolina", conference: "ACC", imgUrl: "/colleges/unc.png" },
  { name: "Clemson University", conference: "ACC", imgUrl: "/colleges/clemson.png" },
  { name: "Florida State University", conference: "ACC", imgUrl: "/colleges/fsu.png" },
  { name: "University of Miami", conference: "ACC", imgUrl: "/colleges/miami.png" },
  { name: "Virginia Tech", conference: "ACC", imgUrl: "/colleges/virginia-tech.png" },
  { name: "University of Virginia", conference: "ACC", imgUrl: "/colleges/virginia.png" },
  { name: "Georgia Tech", conference: "ACC", imgUrl: "/colleges/georgia-tech.png" },
  { name: "Wake Forest University", conference: "ACC", imgUrl: "/colleges/wake-forest.png" },
  { name: "Boston College", conference: "ACC", imgUrl: "/colleges/boston-college.png" },
  { name: "NC State University", conference: "ACC", imgUrl: "/colleges/nc-state.png" },
  { name: "University of Pittsburgh", conference: "ACC", imgUrl: "/colleges/pitt.png" },
  { name: "Syracuse University", conference: "ACC", imgUrl: "/colleges/syracuse.png" },
  { name: "University of Louisville", conference: "ACC", imgUrl: "/colleges/louisville.png" },
  
  // Big 12
  { name: "University of Texas", conference: "Big 12", imgUrl: "/colleges/texas.png" },
  { name: "University of Oklahoma", conference: "Big 12", imgUrl: "/colleges/oklahoma.png" },
  { name: "Baylor University", conference: "Big 12", imgUrl: "/colleges/baylor.png" },
  { name: "Texas Tech University", conference: "Big 12", imgUrl: "/colleges/texas-tech.png" },
  { name: "Oklahoma State University", conference: "Big 12", imgUrl: "/colleges/oklahoma-state.png" },
  { name: "Kansas State University", conference: "Big 12", imgUrl: "/colleges/kansas-state.png" },
  { name: "University of Kansas", conference: "Big 12", imgUrl: "/colleges/kansas.png" },
  { name: "Iowa State University", conference: "Big 12", imgUrl: "/colleges/iowa-state.png" },
  { name: "TCU", conference: "Big 12", imgUrl: "/colleges/tcu.png" },
  { name: "West Virginia University", conference: "Big 12", imgUrl: "/colleges/west-virginia.png" },
  
  // SEC
  { name: "University of Alabama", conference: "SEC", imgUrl: "/colleges/alabama.png" },
  { name: "University of Georgia", conference: "SEC", imgUrl: "/colleges/georgia.png" },
  { name: "Louisiana State University", conference: "SEC", imgUrl: "/colleges/lsu.png" },
  { name: "University of Florida", conference: "SEC", imgUrl: "/colleges/florida.png" },
  { name: "Auburn University", conference: "SEC", imgUrl: "/colleges/auburn.png" },
  { name: "University of Tennessee", conference: "SEC", imgUrl: "/colleges/tennessee.png" },
  { name: "University of Kentucky", conference: "SEC", imgUrl: "/colleges/kentucky.png" },
  { name: "University of South Carolina", conference: "SEC", imgUrl: "/colleges/south-carolina.png" },
  { name: "Vanderbilt University", conference: "SEC", imgUrl: "/colleges/vanderbilt.png" },
  { name: "University of Missouri", conference: "SEC", imgUrl: "/colleges/missouri.png" },
  { name: "University of Arkansas", conference: "SEC", imgUrl: "/colleges/arkansas.png" },
  { name: "Mississippi State University", conference: "SEC", imgUrl: "/colleges/mississippi-state.png" },
  { name: "University of Mississippi", conference: "SEC", imgUrl: "/colleges/ole-miss.png" },
  { name: "Texas A&M University", conference: "SEC", imgUrl: "/colleges/texas-am.png" },
] as const;

const CollegeCard: React.FC<CollegeCardProps> = ({ name, conference, imgUrl, onSelect, isSelected }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.src = '/colleges/default.png';
  };

  return (
    <div 
      className={`bg-gray-900 rounded-lg p-4 cursor-pointer transition-all duration-200 border-2 ${
        isSelected 
          ? 'border-purple-500 bg-purple-900/20' 
          : 'border-gray-700 hover:border-gray-600 hover:bg-gray-800'
      }`}
      onClick={() => onSelect(name)}
    >
      <div className="aspect-square bg-gray-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
        <img 
          src={imgUrl} 
          alt={name}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>
      <h3 className="font-semibold text-sm text-center text-white mb-1">{name}</h3>
      <p className="text-xs text-gray-400 text-center">{conference}</p>
      {isSelected && (
        <div className="mt-2 flex justify-center">
          <Check className="w-4 h-4 text-purple-400" />
        </div>
      )}
    </div>
  );
};

export default function Home(): JSX.Element {
  const [athleteType, setAthleteType] = useState<AthleteType>(null);
  const [sportPlayed, setSportPlayed] = useState<SelectedSportType | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<SelectedPlatform[]>([]);
  const [selectedColleges, setSelectedColleges] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedConference, setSelectedConference] = useState<ConferenceType | 'All'>('All');
  const [collegeSearchTerm, setCollegeSearchTerm] = useState<string>('');
  
  // State to track completion of social media step
  const [socialMediaCompleted, setSocialMediaCompleted] = useState<boolean>(false);

  // Saved data state
  const [savedData, setSavedData] = useState<SavedUserData>({
    athleteType: null,
    sportPlayed: null,
    socialMediaData: null,
    selectedColleges: []
  });

  const filteredSports = sports.filter(sport =>
    sport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const conferences: Array<ConferenceType | 'All'> = ['All', 'Big 10', 'ACC', 'Big 12', 'SEC'];
  
  const filteredColleges: College[] = colleges.filter(college => {
    const matchesConference: boolean = selectedConference === 'All' || college.conference === selectedConference;
    const matchesSearch: boolean = college.name.toLowerCase().includes(collegeSearchTerm.toLowerCase());
    return matchesConference && matchesSearch;
  });

  const maxColleges: number = athleteType === 'Youth Athelete' ? 5 : 2;

  const handleCollegeSelect = (collegeName: string): void => {
    setSelectedColleges(prev => {
      if (prev.includes(collegeName)) {
        return prev.filter(name => name !== collegeName);
      } else if (prev.length < maxColleges) {
        return [...prev, collegeName];
      }
      return prev;
    });
  };

  const handleSocialMediaSubmit = (): void => {
    const socialMediaData: SocialMediaData = {
      platforms: selectedPlatforms,
      totalReach: 0
    };
    
    setSavedData(prev => ({
      ...prev,
      athleteType,
      sportPlayed,
      socialMediaData
    }));
    
    setSocialMediaCompleted(true);
  };

  const handleCollegeSubmit = (): void => {
    setSavedData(prev => ({
      ...prev,
      selectedColleges
    }));
    
    // Here you could navigate to the next step or show completion
    console.log('Final saved data:', {
      ...savedData,
      selectedColleges
    });
  };

  // First screen: Choose athlete type
  if (!athleteType && !sportPlayed && selectedPlatforms.length === 0) {
    return (
      <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
        <div className="text-white font-semibold text-4xl">
          <h1 className="text-center">What Kind of Athlete are you?</h1>
          <div className="flex gap-4 mt-12 flex-wrap justify-center">
            <AtheleteTypeCard
              label="Youth Athelete"
              desc="For high school athletes looking for opportunities at the school they're interested in"
              imgUrl="/youth_athelete.jpeg"
              onClick={setAthleteType}
            />
            <AtheleteTypeCard
              label="College Athelete"
              desc="For college athletes looking to monetize their name, image, and likeness."
              imgUrl="/college_athelete.png"
              onClick={setAthleteType}
            />
            <AtheleteTypeCard
              label="Pro Athelete"
              desc="For pro athletes who want to monetize their name, image, and likeness."
              imgUrl="/pro_athelete.png"
              onClick={setAthleteType}
            />
          </div>
        </div>
      </div>
    );
  }

  // Second screen: Sport selection
  if (athleteType && !sportPlayed && selectedPlatforms.length === 0) {
    return (
      <div className='flex flex-col bg-black text-white min-h-screen'>
        {/* Header */}
        <div className='sticky top-0 z-10 bg-black pt-6 pb-4 px-6 border-b border-gray-800'>
          <h1 className='text-center font-semibold text-4xl md:text-5xl lg:text-6xl mb-4'>
            {athleteType}
          </h1>
          <h2 className='text-center text-lg text-gray-400 mb-6'>
            Select the sport you play
          </h2>
  
          <div className='w-full max-w-2xl mx-auto'>
            <input
              type='text'
              placeholder='Search sports or positions...'
              className='w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
  
        {/* Sport grid */}
        <div className='z-5 flex-1 overflow-y-auto px-6 py-8'>
          {filteredSports.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
              {filteredSports.map(sport => (
                <SportCard
                  key={sport.name}
                  name={sport.name}
                  imgUrl={sport.imgUrl}
                  positions={sport.positions}
                  onSelect={setSportPlayed}
                />
              ))}
            </div>
          ) : (
            <div className='flex justify-center items-center h-64'>
              <div className='text-center text-gray-400 text-xl'>
                No sports found matching "{searchTerm}"
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Third Screen: Social Media Followers Selection
  if (athleteType && sportPlayed && !socialMediaCompleted) {
    
    const DEFAULT_FOLLOWERS = 50 as const;
    const MAX_SLIDER_VALUE = 100 as const;
    const MAX_FOLLOWER_COUNT = 10_000_000 as const;

    const addPlatform = (platformValue: string): void => {
      const platform = socialMediaPlatforms.find((p): p is SocialMediaPlatform => p.value === platformValue);
      if (platform && !selectedPlatforms.find((p): boolean => p.value === platformValue)) {
        const newPlatform: SelectedPlatform = { ...platform, followers: DEFAULT_FOLLOWERS };
        setSelectedPlatforms(prev => [...prev, newPlatform]);
        setValue('');
        setOpen(false);
      }
    };

    const removePlatform = (platformValue: string): void => {
      setSelectedPlatforms(prev => prev.filter((p): boolean => p.value !== platformValue));
    };

    const updateFollowers = (platformValue: string, followers: number[]): void => {
      const followerCount = followers[0];
      if (typeof followerCount === 'number') {
        setSelectedPlatforms(prev => prev.map((p): SelectedPlatform => 
          p.value === platformValue ? { ...p, followers: followerCount } : p
        ));
      }
    };

    const formatFollowers = (count: number): string => {
      if (count >= 1_000_000) {
        return `${(count / 1_000_000).toFixed(1)}M`;
      } else if (count >= 1_000) {
        return `${(count / 1_000).toFixed(1)}K`;
      }
      return count.toString();
    };

    const getFollowerCount = (sliderValue: number): number => {
      // Scale slider value (0-100) to follower count (0-10M)
      return Math.round((sliderValue / MAX_SLIDER_VALUE) * MAX_FOLLOWER_COUNT);
    };

    const getTotalReach = (): number => {
      return selectedPlatforms.reduce((total: number, platform: SelectedPlatform): number => 
        total + getFollowerCount(platform.followers), 0
      );
    };

    const isPlatformSelected = (platformValue: string): boolean => {
      return Boolean(selectedPlatforms.find((p): boolean => p.value === platformValue));
    };

    const getSelectedPlatformLabel = (): string | undefined => {
      return socialMediaPlatforms.find((platform): boolean => platform.value === value)?.label;
    };

    return (
      <div className="flex flex-col bg-black text-white min-h-screen p-8">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-6xl text-center mb-12">
            Select Social Media Followers
          </h1>
          
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild className='flex justify-between'>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[300px] justify-between bg-gray-900 border-gray-700 text-white hover:bg-gray-800"
                  >
                    {value ? getSelectedPlatformLabel() : "Select platform..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0 bg-gray-900 border-gray-700">
                  <Command className="bg-gray-900">
                    <CommandInput placeholder="Search platform..." className="text-white" />
                    <CommandEmpty>No platform found.</CommandEmpty>
                    <CommandGroup>
                      {socialMediaPlatforms.map((platform: SocialMediaPlatform) => (
                        <CommandItem
                          key={platform.value}
                          value={platform.value}
                          onSelect={(currentValue: string) => {
                            setValue(currentValue === value ? "" : currentValue);
                            addPlatform(currentValue);
                          }}
                          className="text-white hover:bg-gray-800"
                          disabled={isPlatformSelected(platform.value)}
                        >
                          <Check
                            className={`mr-2 h-4 w-4 ${
                              isPlatformSelected(platform.value)
                                ? "opacity-100" 
                                : "opacity-0"
                            }`}
                          />
                          <span className="mr-2">{platform.icon}</span>
                          {platform.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-6">
            {selectedPlatforms.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                <p className="text-xl">No platforms selected yet</p>
                <p className="text-sm mt-2">Choose a platform above to get started</p>
              </div>
            ) : (
              selectedPlatforms.map((platform: SelectedPlatform) => (
                <div
                  key={platform.value}
                  className="bg-gray-900 rounded-lg p-6 border border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{platform.icon}</span>
                      <h3 className="text-2xl font-semibold">{platform.label}</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removePlatform(platform.value)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Followers:</span>
                      <span className="text-xl font-bold text-purple-400">
                        {formatFollowers(getFollowerCount(platform.followers))}
                      </span>
                    </div>
                    
                    <Slider
                      value={[platform.followers]}
                      onValueChange={(value: number[]) => updateFollowers(platform.value, value)}
                      max={MAX_SLIDER_VALUE}
                      step={1}
                      className="w-full"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0</span>
                      <span>10M+</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {selectedPlatforms.length > 0 && (
            <>
              <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedPlatforms.map((platform: SelectedPlatform) => (
                    <div key={platform.value} className="text-center">
                      <div className="text-lg">{platform.icon}</div>
                      <div className="font-medium">{platform.label}</div>
                      <div className="text-purple-400 font-bold">
                        {formatFollowers(getFollowerCount(platform.followers))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-center">
                    <span className="text-gray-300">Total Reach: </span>
                    <span className="text-2xl font-bold text-purple-400">
                      {formatFollowers(getTotalReach())}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleSocialMediaSubmit}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg"
                >
                  Continue to College Selection
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Fourth Screen: College Selection
  if (athleteType && sportPlayed && socialMediaCompleted) {
    return (
      <div className='flex flex-col bg-black text-white min-h-screen'>
        {/* Header */}
        <div className='sticky top-0 z-10 bg-black pt-6 pb-4 px-6 border-b border-gray-800'>
          <h1 className='text-center font-semibold text-4xl md:text-5xl lg:text-6xl mb-4'>
            Select Colleges
          </h1>
          <h2 className='text-center text-lg text-gray-400 mb-2'>
            Choose up to {maxColleges} colleges you're interested in
          </h2>
          <p className='text-center text-sm text-gray-500 mb-6'>
            {selectedColleges.length} of {maxColleges} selected
          </p>
          
          {/* Conference Filter */}
          <div className='w-full max-w-4xl mx-auto mb-4'>
            <div className='flex flex-wrap justify-center gap-2 mb-4'>
              {conferences.map((conference) => (
                <Button
                  key={conference}
                  onClick={() => setSelectedConference(conference)}
                  variant={selectedConference === conference ? "default" : "outline"}
                  className={`${
                    selectedConference === conference 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-900 border-gray-700 text-white hover:bg-gray-800'
                  }`}
                >
                  {conference}
                </Button>
              ))}
            </div>
            
            {/* Search */}
            <input
              type='text'
              placeholder='Search colleges...'
              className='w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500'
              value={collegeSearchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollegeSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* College grid */}
        <div className='flex-1 overflow-y-auto px-6 py-8'>
          {filteredColleges.length > 0 ? (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl mx-auto'>
              {filteredColleges.map((college: College) => (
                <CollegeCard
                  key={college.name}
                  name={college.name}
                  conference={college.conference}
                  imgUrl={college.imgUrl}
                  onSelect={handleCollegeSelect}
                  isSelected={selectedColleges.includes(college.name)}
                />
              ))}
            </div>
          ) : (
            <div className='flex justify-center items-center h-64'>
              <div className='text-center text-gray-400 text-xl'>
                No colleges found matching your criteria
              </div>
            </div>
          )}
        </div>

        {/* Bottom section with selected colleges and submit */}
        {selectedColleges.length > 0 && (
          <div className='sticky bottom-0 bg-black border-t border-gray-800 p-6'>
            <div className='max-w-4xl mx-auto'>
              <h3 className='text-xl font-semibold mb-4 text-center'>Selected Colleges</h3>
              <div className='flex flex-wrap justify-center gap-2 mb-6'>
                {selectedColleges.map((collegeName: string) => {
                  const college = colleges.find(c => c.name === collegeName);
                  return (
                    <div
                      key={collegeName}
                      className='bg-purple-900/20 border border-purple-500 rounded-lg px-3 py-2 flex items-center gap-2'
                    >
                      <span className='text-sm font-medium'>{collegeName}</span>
                      {college && (
                        <span className='text-xs text-gray-400'>({college.conference})</span>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCollegeSelect(collegeName)}
                        className="text-red-400 hover:text-red-300 p-1 h-auto"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  );
                })}
              </div>
              
              <div className='flex justify-center'>
                <Button
                  onClick={handleCollegeSubmit}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg"
                >
                  Complete Setup
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Fallback return (should never reach here with proper flow)
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
}