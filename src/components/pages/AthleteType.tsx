'use client'

import React from 'react'
import AthleteTypeCard from '../cards/AtheleteTypeCard';
import { AtheleteType } from '@/lib/types';
import { useCalculatorProvider } from '../providers/CalculatorProvider';


const AthleteTypePage = ({ mounted }: { mounted: boolean }) => {

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {i % 3 === 0 ? (
                <div className="w-16 h-16 border-2 border-blue-400 rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
              ) : i % 3 === 1 ? (
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
              ) : (
                <div className="w-8 h-20 bg-gradient-to-b from-blue-400 to-transparent transform rotate-12" />
              )}
            </div>
          ))}
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Radial gradient spotlight */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-40" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4">
        {/* Title with enhanced animation */}
        <div className={`text-white font-bold text-4xl md:text-5xl mb-16 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 animate-pulse">
            What Kind of Athlete are you?
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full animate-glow" />
        </div>
        
        {/* Cards container */}
        <div className={`flex gap-8 flex-wrap justify-center max-w-6xl transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <AthleteTypeCard
            label={AtheleteType.YOUTH}
            desc="For high school athletes looking for opportunities at the school they're interested in"
          />
          <AthleteTypeCard
            label={AtheleteType.COLLEGE}
            desc="For college athletes looking to monetize their name, image, and likeness."
          />
          <AthleteTypeCard
            label={AtheleteType.PRO}
            desc="For pro athletes who want to monetize their name, image, and likeness."
          />
        </div>
      </div>
      
      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(59, 130, 246, 0.5); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}

export default AthleteTypePage