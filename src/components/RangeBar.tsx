'use client'

import { fmt } from "@/lib/utils";

function RangeBar({ low, high }: { low: number; high: number }) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between text-sm font-medium text-slate-600">
        <div className="flex flex-col items-start">
          <span className="font-bold text-xl">{fmt(low)}</span>
          <span className="text-xs text-slate-500">Lowball</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-bold text-xl">{fmt(high)}</span>
          <span className="text-xs text-slate-500">Max</span>
        </div>
      </div>
      <div className="relative">
        {/* Main range bar */}
        <div className="h-4 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-200 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-blue-500 to-green-500 rounded-full shadow-inner" />
        </div>
        <div 
          className="absolute -top-1 transform -translate-x-1/2 transition-all duration-300 ease-out"
          style={{ left: `${Math.max(10, Math.min(90, 50))}%` }}
        >
        </div>
      </div>
    </div>
  )
}

export default RangeBar