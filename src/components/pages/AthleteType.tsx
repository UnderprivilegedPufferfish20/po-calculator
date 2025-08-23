'use client'

import React from 'react'
import AthleteTypeCard from '../cards/AtheleteTypeCard';
import AestheticScreen from '../Screen';

const AthleteTypePage = () => {
  return (
    <AestheticScreen 
      title="What Kind of Athlete are you?"
      maxWidth="max-w-7xl"
    >
      <div className={'w-full transition-all duration-1000 delay-300 translate-y-8 opacity-100'}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          <div className="col-span-1">
            <AthleteTypeCard
              label="Youth"
              desc="For high school athletes looking for opportunities at the school they're interested in"
              height="h-[500px]"
            />
          </div>
          <div className="col-span-1">
            <AthleteTypeCard
              label="College"
              desc="For college athletes looking to monetize their name, image, and likeness."
              height="h-[550px]"
            />
          </div>
          <div className="col-span-1">
            <AthleteTypeCard
              label="Pro"
              desc="For pro athletes who want to monetize their name, image, and likeness."
              height="h-[500px]"
            />
          </div>
        </div>
      </div>
    </AestheticScreen>
  )
}

export default AthleteTypePage