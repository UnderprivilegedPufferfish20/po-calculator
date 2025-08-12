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
import { Stage } from '@/lib/types';
import { useCalculatorProvider } from '../providers/CalculatorProvider';



const SocialMediaPage = () => {
  const {selectedPlatforms, setSelectedPlatforms, setStage} = useCalculatorProvider()

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
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
  <AestheticScreen
    title="Select Social Media Followers"
    subtitle="Add your platforms and estimate your total reach"
    maxWidth="max-w-5xl"
    headerSlot={
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Quick-pick platform chips */}
        <div className="md:col-span-2">
          <div className="flex flex-wrap gap-2">
            {socialMediaPlatforms.map((p: SocialMediaPlatform) => {
              const active = isPlatformSelected(p.value);
              return (
                <button
                  key={p.value}
                  onClick={() => !active && addPlatform(p.value)}
                  disabled={active}
                  className={[
                    "px-3 py-2 rounded-lg text-sm transition-all",
                    "border backdrop-blur",
                    active
                      ? "border-purple-500/70 bg-purple-900/30 text-white cursor-not-allowed"
                      : "border-gray-700/60 bg-gray-900/60 hover:bg-gray-800"
                  ].join(" ")}
                  title={active ? "Already added" : "Add platform"}
                >
                  <span className="mr-1">{p.icon}</span>
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Command/Popover select (kept for parity) */}
        <div className="justify-self-end">
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
                          isPlatformSelected(platform.value) ? "opacity-100" : "opacity-0"
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
    }
  >
    {/* Top summary meter */}
    <div className="mb-6 rounded-xl border border-gray-700/60 bg-gray-900/60 backdrop-blur p-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="text-sm text-gray-400">Total Reach</div>
          <div className="text-3xl font-extrabold tracking-tight text-purple-300">
            {formatFollowers(getTotalReach())}
          </div>
        </div>
        <div className="flex-1 min-w-[220px] md:max-w-[420px]">
          {/* decorative meter bar */}
          <div className="h-3 w-full rounded-full bg-gray-800 overflow-hidden border border-gray-700">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              style={{
                width: `${Math.min(100, (getTotalReach() / 10_000_000) * 100)}%`,
                transition: "width 400ms ease"
              }}
            />
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-gray-500">
            <span>0</span>
            <span>10M+</span>
          </div>
        </div>
      </div>
    </div>

    {/* Selected platforms grid */}
    {selectedPlatforms.length === 0 ? (
      <div className="text-center text-gray-400 py-16">
        <p className="text-xl">No platforms selected</p>
        <p className="text-sm mt-2">Use the chips or the search to add one.</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {selectedPlatforms.map((platform: SelectedPlatform) => {
          const followersDisplay = formatFollowers(getFollowerCount(platform.followers));
          return (
            <div
              key={platform.value}
              className="rounded-xl border border-gray-700/60 bg-gray-900/60 backdrop-blur p-5 relative overflow-hidden"
            >
              {/* subtle glow edge */}
              <div className="pointer-events-none absolute -inset-px rounded-xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[6px]" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{platform.icon}</div>
                    <div>
                      <div className="text-lg font-semibold">{platform.label}</div>
                      <div className="text-xs text-gray-400">Drag to estimate followers</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removePlatform(platform.value)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                    aria-label={`Remove ${platform.label}`}
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
                    onValueChange={(value: number[]) => updateFollowers(platform.value, value)}
                    max={100}
                    step={1}
                    className="w-full"
                  />

                  <div className="mt-2 flex justify-between text-[10px] text-gray-500">
                    <span>0</span>
                    <span>10M+</span>
                  </div>
                </div>

                {/* Quick presets */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[5, 15, 35, 55, 75, 95].map((tick) => (
                    <button
                      key={tick}
                      onClick={() => updateFollowers(platform.value, [tick])}
                      className="px-2 py-1 rounded-md text-xs border border-gray-700 hover:bg-gray-800 transition"
                      aria-label={`Set ${platform.label} followers to ${tick}%`}
                    >
                      {formatFollowers(getFollowerCount(tick))}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )}

    {/* Sticky footer CTA */}
    {selectedPlatforms.length > 0 && (
      <div className="sticky bottom-4 flex justify-center">
        <div className="rounded-xl border border-gray-700/60 bg-gray-900/80 backdrop-blur px-5 py-3 flex items-center gap-4 shadow-lg">
          <div className="text-sm text-gray-300">
            Total Reach:{" "}
            <span className="font-bold text-purple-300">{formatFollowers(getTotalReach())}</span>
          </div>
          <Button
            onClick={() => setStage(Stage.COLLEGE_SELECT)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 font-semibold rounded-lg"
          >
            Continue to College Selection
          </Button>
        </div>
      </div>
    )}
  </AestheticScreen>
);
}


export default SocialMediaPage

