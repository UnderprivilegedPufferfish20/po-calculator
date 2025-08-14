'use client'

import React from 'react'
import AthleteTypeCard from '../cards/AtheleteTypeCard';
import { AtheleteType } from '@/lib/types';
import AestheticScreen from '../Screen';


const AthleteTypePage = ({ mounted }: { mounted: boolean }) => {

  return (
    <AestheticScreen 
      title="What Kind of Athlete are you?"
      maxWidth="max-w-5xl"
    >
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
    </AestheticScreen>
  )
}

export default AthleteTypePage