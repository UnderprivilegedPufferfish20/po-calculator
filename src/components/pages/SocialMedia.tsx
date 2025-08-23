'use client'

import { socialMediaPlatforms } from '@/lib/constants/social_media';
import { SelectedPlatform, SocialMediaPlatform } from '@/lib/types/social_media';
import React, { useState } from 'react'
import AestheticScreen from '../Screen';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../ui/command';
import { useCalculatorProvider } from '../providers/CalculatorProvider';
import { titleCase } from '@/lib/utils';
import Image from 'next/image'


const SocialMediaPage = () => {
  const { selectedPlatforms, setSelectedPlatforms, setStage } = useCalculatorProvider()

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const DEFAULT_FOLLOWERS = 100_000;   // Default 100k followers
  const MIN_FOLLOWERS = 1_000;         // Min 1k
  const MAX_FOLLOWERS = 1_000_000;     // Max 1M

  // 👉 Add new platform with raw 100k followers stored
  const addPlatform = (platformValue: string): void => {
    const platform = socialMediaPlatforms.find((p): p is SocialMediaPlatform => p.name === platformValue);
    if (platform && !selectedPlatforms.find((p): boolean => p.name === platformValue)) {
      const newPlatform: SelectedPlatform = { ...platform, followers: DEFAULT_FOLLOWERS };
      setSelectedPlatforms(prev => [...prev, newPlatform]);
      setValue('');
      setOpen(false);
    }
  };

  const removePlatform = (platformValue: string): void => {
    setSelectedPlatforms(prev => prev.filter((p): boolean => p.name !== platformValue));
  };

  // 👉 Store raw follower count directly, don’t scale it
  const updateFollowers = (platformValue: string, followers: number[]): void => {
    const followerCount = followers[0];
    if (typeof followerCount === 'number') {
      setSelectedPlatforms(prev => prev.map((p): SelectedPlatform =>
        p.name === platformValue ? { ...p, followers: followerCount } : p
      ));
    }
  };

  // 👉 Format just for display
  const formatFollowers = (count: number): string => {
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
    return `${(count / 1_000).toFixed(0)}K`;
  };

  const getTotalReach = (): number => {
    return selectedPlatforms.reduce((total: number, platform: SelectedPlatform): number =>
      total + platform.followers, 0
    );
  };

  const isPlatformSelected = (platformValue: string): boolean => {
    return Boolean(selectedPlatforms.find((p): boolean => p.name === platformValue));
  };

  const getSelectedPlatformLabel = (): string | undefined => {
    return titleCase(socialMediaPlatforms.find((platform): boolean => platform.name === value)?.name ?? '')
  };

  return (
    <AestheticScreen
      title="Select Social Media Followers"
      subtitle="Add your platforms and estimate your total reach"
      maxWidth="max-w-5xl"
      headerSlot={
        <div className="flex items-center justify-between gap-6">
          {/* Combobox on the left */}
          <div className="flex-1 max-w-md">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between bg-gray-900 border-gray-700 text-white hover:bg-gray-800"
                >
                  {value ? getSelectedPlatformLabel() : "Search platform…"}
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
                        key={platform.name}
                        value={(platform.name)}
                        onSelect={(currentValue: string) => {
                          setValue(currentValue === value ? "" : currentValue);
                          addPlatform(currentValue);
                        }}
                        className="text-white hover:bg-gray-800"
                        disabled={isPlatformSelected(platform.name)}
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            isPlatformSelected(platform.name) ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        <Image
                          src={`/sm_platforms/${platform.name}.png`}
                          width={24}
                          height={24}
                          alt={platform.name}
                          className={platform.name === 'x' ? 'invert' : ''}
                        />
                        {platform.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Total Reach number on the right */}
          <div className="text-right">
            <div className="text-sm text-gray-400 mb-1">Total Reach</div>
            <div className="text-3xl font-extrabold tracking-tight text-purple-300">
              {formatFollowers(getTotalReach())}
            </div>
          </div>
        </div>
      }
    >
      {/* Selected platforms grid */}
      {selectedPlatforms.length === 0 ? (
        <div className="text-center text-gray-400 py-16">
          <p className="text-xl">No platforms selected</p>
          <p className="text-sm mt-2">Use the chips or the search to add one.</p>
        </div>
      ) : (
        <div className='flex flex-col gap-8 justify-center'>

          <div className="flex justify-center">
            <Button
              onClick={() => setStage("CS")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Complete Setup →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {selectedPlatforms.map((platform: SelectedPlatform) => {
              const followersDisplay = formatFollowers(platform.followers);
              return (
                <div
                  key={platform.name}
                  className="rounded-xl border border-gray-700/60 bg-gray-900/60 backdrop-blur p-5 relative overflow-hidden"
                >
                  {/* subtle glow edge */}
                  <div className="pointer-events-none absolute -inset-px rounded-xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[6px]" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image 
                          src={`/sm_platforms/${platform.name}.png`}
                          width={24}
                          height={24}
                          alt={platform.name}
                          className={platform.name === 'x' ? 'invert' : ''}
                        />
                        <div>
                          <div className="text-lg font-semibold">{platform.name}</div>
                          <div className="text-xs text-gray-400">Drag to estimate followers</div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removePlatform(platform.name)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        aria-label={`Remove ${platform.name}`}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Slider */}
                    <div className="mt-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">Followers</span>
                        <span className="text-xl font-bold text-purple-300">{followersDisplay}</span>
                      </div>

                      <Slider
                        value={[platform.followers]}
                        onValueChange={(value: number[]) => updateFollowers(platform.name, value)}
                        min={MIN_FOLLOWERS}
                        max={MAX_FOLLOWERS}
                        step={1_000}
                        className="w-full"
                      />

                      <div className="mt-2 flex justify-between text-[10px] text-gray-500">
                        <span>1K</span>
                        <span>1M</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </AestheticScreen>
  );
}

export default SocialMediaPage
