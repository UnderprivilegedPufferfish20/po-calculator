'use client'

import { AtheleteType, Stage } from "@/lib/types";
import { useState } from "react";
import { useCalculatorProvider } from "../providers/CalculatorProvider";

interface Props {
  desc: string,
  label: AtheleteType,
}


const AthleteTypeCard = (props: Props) => {
  const {setStage, setAthleteType} = useCalculatorProvider()
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onClick={() => {
        setAthleteType(props.label);
        setStage(Stage.SPORT_SELECT)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-2 border-transparent w-full max-w-sm aspect-square bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 hover:rotate-1 group animate-fadeInUp"
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
        animation: 'float 6s ease-in-out infinite'
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 ${isHovered ? 'animate-ping' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
      
      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-sm animate-pulse" />
        <div className="absolute inset-[2px] bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl" />
      </div>
      
      {/* Text Content */}
      <div className="relative z-20 p-6 h-full flex flex-col">
        <h3 className={`text-2xl font-bold mb-2 leading-tight transition-all duration-500 ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-105' : 'text-white'}`}>
          {props.label}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 transition-all duration-500 ${isHovered ? 'text-gray-200 transform translate-x-1' : 'text-gray-300'}`}>
          {props.desc}
        </p>
        
        {/* Emoji Icon */}
        <div className="flex-1 flex items-center justify-center">
          <div className={`text-6xl transition-all duration-500 ${isHovered ? 'transform scale-125 animate-bounce' : 'transform scale-100'}`}>
            {props.label.includes('Youth') ? '🎓' : 
             props.label.includes('College') ? '🏫' : 
             props.label.includes('Pro') ? '🏆' : '⚡'}
          </div>
        </div>
      </div>
      
      {/* Shimmer effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 -skew-x-12 transition-all duration-700 z-10 ${isHovered ? 'opacity-10 translate-x-full' : '-translate-x-full'}`} />
    </div>
  );
};

export default AthleteTypeCard
