import LandingPublicRelation from '@/app/component/Service_Public_Relation/LandingPublicRelation'
import OurDigitalPrProcess from '@/app/component/Service_Public_Relation/OurDigitalPrProcess'
import ServiceFqa from '@/app/component/Service_Public_Relation/ServiceFqa'
import ServicePrHero from '@/app/component/Service_Public_Relation/ServicePrHero'
import WhatWeOffer from '@/app/component/Service_Public_Relation/WhatWeOffer'
import WhoWeWorkWith from '@/app/component/Service_Public_Relation/WhoWeWorkWith'
import WhyChooseBangladesh from '@/app/component/Service_Public_Relation/WhyChooseBangladesh'
import React from 'react'

export default function DigitalPR() {
  return (
    <div>
        <ServicePrHero></ServicePrHero>
        <WhyChooseBangladesh></WhyChooseBangladesh>
        <WhatWeOffer></WhatWeOffer>
        <OurDigitalPrProcess></OurDigitalPrProcess>
        <WhoWeWorkWith></WhoWeWorkWith>
        <LandingPublicRelation></LandingPublicRelation>
        <ServiceFqa></ServiceFqa>
    </div>
  )
}
