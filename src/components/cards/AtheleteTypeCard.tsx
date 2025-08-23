'use client'

import { AthleteType } from "@/lib/types/athlete";
import { useState } from "react";
import { useCalculatorProvider } from "../providers/CalculatorProvider";

interface Props {
  desc: string,
  label: AthleteType,
  height?: string,
}

const AthleteTypeCard = (props: Props) => {
  const {setStage, setAthleteType} = useCalculatorProvider()
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onClick={() => {
        setAthleteType(props.label);
        setStage("SS")
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative border-2 border-transparent w-full ${props.height || 'h-[450px]'} bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-700 ease-out hover:scale-[1.02] group`}
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))' 
          : 'linear-gradient(135deg, rgba(17, 24, 39, 1), rgba(0, 0, 0, 1), rgba(31, 41, 55, 1))',
        borderImage: isHovered 
          ? 'linear-gradient(135deg, #3b82f6, #9333ea, #ec4899) 1' 
          : 'none',
        borderColor: isHovered ? 'transparent' : '#374151',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
          : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 ${isHovered ? 'animate-ping' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
      
      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm animate-pulse" />
        <div className="absolute inset-[2px] bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl" />
      </div>
      
      {/* Text Content */}
      <div className="relative z-20 p-8 h-full flex flex-col">
        <div className="mb-6">
          <h3 className={`text-3xl font-bold mb-4 leading-tight transition-all duration-500 ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' : 'text-white'}`}>
            {props.label}
          </h3>
          <p className={`text-lg leading-relaxed transition-all duration-500 ${isHovered ? 'text-gray-200' : 'text-gray-300'}`}>
            {props.desc}
          </p>
        </div>
        
        {/* Emoji Icon */}
        <div className="flex-1 flex items-center justify-center">
          <div className={`text-8xl transition-all duration-500 ${isHovered ? 'transform scale-110 animate-float' : 'transform scale-100'}`}>
            {props.label.includes('Youth') ? '🎓' : 
             props.label.includes('College') ? '🏫' : 
             props.label.includes('Pro') ? '🏆' : '⚡'}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-8">
          <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-500 ${isHovered ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' : 'bg-gray-800 text-gray-300'}`}>
            Select {props.label}
          </button>
        </div>
      </div>
      
      {/* Shimmer effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 -skew-x-12 transition-all duration-700 z-10 ${isHovered ? 'opacity-20 translate-x-full' : '-translate-x-full'}`} />
    </div>
  );
};

export default AthleteTypeCard;