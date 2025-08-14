'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Info, TrendingUp, ChevronDown, ChevronUp, Instagram, Youtube, Twitter, Music2 } from 'lucide-react'
import RangeBar from '../RangeBar'
import { fmt } from '@/lib/utils'

// ---- mock data ----
const DATA = {
  colleges: [
    {
      name: 'Michigan State University',
      logo: '🟢',
      overall: { image: { low: 830, high: 1500 }, video: { low: 1100, high: 2000 } },
      ncv: { low: 133700, high: 248200 },
      platforms: [
        { key: 'instagram', label: 'Instagram', icon: <Instagram className="h-5 w-5" />, image: { low: 1200, high: 2200 }, video: { low: 1500, high: 2800 } },
        { key: 'tiktok', label: 'TikTok', icon: <Music2 className="h-5 w-5" />, image: { low: 996, high: 1900 }, video: { low: 1300, high: 2400 } },
        { key: 'youtube', label: 'YouTube', icon: <Youtube className="h-5 w-5" />, image: { low: 1100, high: 2000 }, video: { low: 1400, high: 2600 } },
        { key: 'x', label: 'X', icon: <Twitter className="h-5 w-5" />, image: { low: 913, high: 1700 }, video: { low: 1200, high: 2100 } },
      ],
    },
    {
      name: 'Duke University',
      logo: '🔵',
      overall: { image: { low: 910, high: 1700 }, video: { low: 1200, high: 2200 } },
      ncv: { low: 146500, high: 272000 },
      platforms: [
        { key: 'instagram', label: 'Instagram', icon: <Instagram className="h-5 w-5" />, image: { low: 1300, high: 2400 }, video: { low: 1700, high: 3100 } },
        { key: 'tiktok', label: 'TikTok', icon: <Music2 className="h-5 w-5" />, image: { low: 1100, high: 2000 }, video: { low: 1400, high: 2600 } },
        { key: 'youtube', label: 'YouTube', icon: <Youtube className="h-5 w-5" />, image: { low: 1200, high: 2200 }, video: { low: 1500, high: 2900 } },
        { key: 'x', label: 'X', icon: <Twitter className="h-5 w-5" />, image: { low: 1000, high: 1900 }, video: { low: 1300, high: 2300 } },
      ],
    },
  ],
}

export default function NILValueDemo() {
  const [collegeIndex, setCollegeIndex] = React.useState(0)
  const [showPlatforms, setShowPlatforms] = React.useState(true)
  const [videoPremium, setVideoPremium] = React.useState(true)

  const college = DATA.colleges[collegeIndex]

  // lightweight what-if: toggle video premium on/off
  const scaleVideo = (v: number) => (videoPremium ? v : Math.round(v * 0.88))

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">
          <Tabs value={String(collegeIndex)} onValueChange={(v) => setCollegeIndex(Number(v))}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">NIL Value Dashboard</h1>
                <p className="text-slate-600">Compare sponsored post valuations across universities and platforms</p>
              </div>
            </div>

            {/* College Selector */}
            <TabsList className="grid grid-cols-2 w-full max-w-2xl mb-8 h-14">
              {DATA.colleges.map((c, i) => (
                <TabsTrigger 
                  key={c.name} 
                  value={String(i)} 
                  className="text-base font-semibold py-3 data-[state=active]:bg-white data-[state=active]:shadow-md"
                >
                  <span className="mr-3 text-xl">{c.logo}</span> 
                  <span className="hidden sm:inline">{c.name}</span>
                  <span className="sm:hidden">{c.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={String(collegeIndex)}>
              <Card className="bg-white/80 border-0 shadow-xl backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <span className="text-3xl">{college.logo}</span>
                      <div>
                        <div>{college.name}</div>
                        <div className="text-sm font-normal text-slate-500 mt-1">
                          NIL Valuation Estimates
                        </div>
                      </div>
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Overall Values */}
                  <section className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                      Overall Values
                      <div className="h-1 flex-1 bg-gradient-to-r from-slate-300 to-transparent rounded" />
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="text-sm font-semibold text-slate-600 mb-4 flex items-center gap-2">
                          📸 Image Posts
                        </div>
                        <RangeBar 
                          low={college.overall.image.low} 
                          high={college.overall.image.high} 
                        />
                      </div>
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <div className="text-sm font-semibold text-slate-600 mb-4 flex items-center gap-2">
                          🎥 Video Posts
                        </div>
                        <RangeBar 
                          low={college.overall.video.low} 
                          high={scaleVideo(college.overall.video.high)} 
                        />
                      </div>
                    </div>
                  </section>

                  <Separator className="my-8"/>

                  {/* NCV */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-700">NIL Career Value (NCV)</h3>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-5 w-5 text-slate-500 hover:text-slate-700 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="text-sm max-w-xs p-3">
                          Projected multi-year earnings from sponsored posts across all selected platforms during college career.
                        </TooltipContent>
                      </Tooltip>
                      <div className="h-1 flex-1 bg-gradient-to-r from-slate-300 to-transparent rounded" />
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                      <RangeBar 
                        low={college.ncv.low} 
                        high={college.ncv.high} 

                      />
                    </div>
                  </section>

                  <Separator className="my-8"/>

                  {/* Platform specific */}
                  <section className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                        Platform-Specific Values
                        <div className="h-1 flex-1 bg-gradient-to-r from-slate-300 to-transparent rounded" />
                      </h3>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 font-medium" 
                        onClick={() => setShowPlatforms(s => !s)}
                      >
                        {showPlatforms ? (
                          <>
                            <ChevronUp className="h-4 w-4"/>
                            Hide Details
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4"/>
                            Show Details
                          </>
                        )}
                      </Button>
                    </div>

                    {showPlatforms && (
                      <div className="grid gap-6">
                        {college.platforms.map((p) => (
                          <div key={p.key} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-6">
                              <div className="p-2 rounded-lg bg-slate-100">
                                {p.icon}
                              </div>
                              <span className="font-semibold text-lg text-slate-700">{p.label}</span>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                              <div>
                                <div className="text-sm font-semibold text-slate-600 mb-4 flex items-center gap-2">
                                  📸 Image Posts
                                </div>
                                <RangeBar 
                                  low={p.image.low} 
                                  high={p.image.high} 

                                />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-600 mb-4 flex items-center gap-2">
                                  🎥 Video Posts
                                </div>
                                <RangeBar 
                                  low={p.video.low} 
                                  high={scaleVideo(p.video.high)} 
       
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>

                  {/* Footer Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
                    <div className="text-sm text-slate-500">
                      Last updated: {new Date().toLocaleDateString()}
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        Back to Top
                      </Button>
                      <Button 
                        onClick={() => navigator.clipboard?.writeText(
                          `${college.name} NIL Values:\nImage: ${fmt(college.overall.image.low)}–${fmt(college.overall.image.high)}\nVideo: ${fmt(college.overall.video.low)}–${fmt(scaleVideo(college.overall.video.high))}\nNCV: ${fmt(college.ncv.low)}–${fmt(college.ncv.high)}`
                        )}
                      >
                        Copy Summary
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </TooltipProvider>
  )
}