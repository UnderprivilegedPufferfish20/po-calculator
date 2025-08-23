'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Info, ChevronDown, ChevronUp, Loader2Icon } from 'lucide-react'
import RangeBar from '../RangeBar'
import { getCollegeImg } from '@/lib/utils'
import { CalculatorOutput } from '@/lib/types/nil'
import Image from 'next/image'
import AestheticScreen from '../Screen'

export default function NILValueDemo({ colleges }: { colleges: CalculatorOutput | undefined }) {

  if (colleges === undefined) {
    return (
      <AestheticScreen
        title='NIL Value Dashboard'
        subtitle='Compare sponsored post valuations across universities and platforms'
        maxWidth='max-w-full'
      >
        <div className='h-full flex items-center justify-center'>
          <Loader2Icon size={96} className='animate-spin'/>
        </div>
      </AestheticScreen>
    )
    
  }


  const [collegeIndex, setCollegeIndex] = React.useState(0)
  const [showPlatforms, setShowPlatforms] = React.useState(true)

  const college = colleges[collegeIndex]

  const accent = "from-sky-400 via-indigo-400 to-fuchsia-500" // header & underline gradient

  return (
    <AestheticScreen
      title='NIL Value Dashboard'
      subtitle='Compare sponsored post valuations across universities and platforms'
      maxWidth='max-w-full'
    >
      <TooltipProvider>
        <div className="min-h-screen bg-transparent text-slate-200 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <Tabs value={String(collegeIndex)} onValueChange={(v) => setCollegeIndex(Number(v))}>
              <TabsList
                className="
                  flex w-full h-full gap-2 rounded-xl
                  bg-slate-900/50 backdrop-blur supports-[backdrop-filter]:backdrop-blur
                  border border-slate-700/60 p-2 shadow-inner shadow-black/40
                "
              >
                {colleges.map((c, i) => (
                  <TabsTrigger
                    key={c.name}
                    value={String(i)}
                    className="
                      text-xs sm:text-base font-semibold py-2.5 px-3
                      rounded-lg transition
                      text-slate-300 hover:text-white
                      bg-slate-900/30 border border-slate-700/60
                      hover:border-slate-500/60
                      data-[state=active]:text-white
                      data-[state=active]:bg-slate-900/70
                      data-[state=active]:border-transparent
                      data-[state=active]:shadow-[0_0_0_1px_rgba(99,102,241,.55),0_0_30px_-6px_rgba(168,85,247,.45)]
                    "
                  >
                    <span className="mr-3 text-xs">
                      <Image
                        src={getCollegeImg(c.name)}
                        alt={c.name}
                        width={24}
                        height={24}
                        className='rounded-full'
                      />
                    </span>
                    <span className="hidden sm:inline text-xs">{c.name}</span>
                    <span className="sm:hidden text-xs">{c.name.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={String(collegeIndex)}>
                <Card
                  className="
                    bg-slate-900/60 border border-slate-700/60
                    shadow-xl backdrop-blur-md
                  "
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <span className="text-3xl">
                          <Image
                            src={getCollegeImg(college.name)}
                            alt={college.name}
                            width={24}
                            height={24}
                            className='rounded-full'
                          />
                        </span>
                        <div>
                          <div className="text-white">{college.name}</div>
                          <div className="text-sm font-normal text-slate-400 mt-1">
                            NIL Valuation Estimates
                          </div>
                        </div>
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Overall Values */}
                    <section className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-3">
                        Overall Values
                        <span className={`h-1 flex-1 bg-gradient-to-r ${accent} rounded`} />
                      </h3>
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/60">
                          <div className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                            📸 Image Posts
                          </div>
                          <RangeBar low={college.overall.image.low} high={college.overall.image.high} />
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/60">
                          <div className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                            🎥 Video Posts
                          </div>
                          <RangeBar low={college.overall.video.low} high={college.overall.video.high} />
                        </div>
                      </div>
                    </section>

                    <Separator className="my-2 bg-slate-700/40" />

                    {/* NCV */}
                    <section className="space-y-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-slate-200">NIL Career Value (NCV)</h3>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-5 w-5 text-slate-400 hover:text-slate-200 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="text-sm max-w-xs p-3 bg-slate-900/90 border border-slate-700/60 text-slate-200">
                            Projected multi-year earnings from sponsored posts across all selected platforms during college career.
                          </TooltipContent>
                        </Tooltip>
                        <span className={`h-1 flex-1 bg-gradient-to-r ${accent} rounded`} />
                      </div>
                      <div className={`p-6 rounded-xl border border-slate-700/60 bg-gradient-to-r ${accent} bg-clip-padding`}>
                        <div className="rounded-lg p-4 bg-slate-950/70 border border-slate-800/70">
                          <RangeBar low={college.ncv.low} high={college.ncv.high} />
                        </div>
                      </div>
                    </section>

                    <Separator className="my-2 bg-slate-700/40" />

                    {/* Platform specific */}
                    <section className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-3">
                          Platform-Specific Values
                          <span className={`h-1 flex-1 bg-gradient-to-r ${accent} rounded`} />
                        </h3>
                        <Button
                          variant="outline"
                          size="sm"
                          className="
                            gap-2 font-medium
                            border-slate-600/70
                            bg-slate-900/50 text-white
                          "
                          onClick={() => setShowPlatforms(s => !s)}
                        >
                          {showPlatforms ? (
                            <>
                              <ChevronUp className="h-4 w-4" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4" />
                              Show Details
                            </>
                          )}
                        </Button>
                      </div>

                      {showPlatforms && (
                        <div className="grid gap-6">
                          {college.platforms.map((p) => (
                            <div
                              key={p.name}
                              className="
                                bg-slate-900/50 rounded-xl border border-slate-700/60 p-6
                                shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]
                                hover:shadow-[0_0_0_1px_rgba(99,102,241,.35),0_0_30px_-8px_rgba(168,85,247,.35)]
                                transition-shadow
                              "
                            >
                              <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-slate-800/70 border border-slate-700/60">
                                  <Image
                                    src={`/sm_platforms/${p.name.toLowerCase()}.png`}
                                    alt={p.name}
                                    width={24}
                                    height={24}
                                  />
                                </div>
                                <span className="font-semibold text-lg text-slate-100">{p.name}</span>
                              </div>

                              <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                  <div className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                                    📸 Image Posts
                                  </div>
                                  <RangeBar low={p.values.image.low} high={p.values.image.high} />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                                    🎥 Video Posts
                                  </div>
                                  <RangeBar low={p.values.video.low} high={p.values.video.high} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </TooltipProvider>
        
      
    </AestheticScreen>
  )
}
