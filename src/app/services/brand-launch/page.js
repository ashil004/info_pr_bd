import BrandLaunchHero from '@/app/component/Service_Brand_Launch/BrandLaunchHero'
import WhydoneedBrandLaunch from '@/app/component/Service_Brand_Launch/WhydoneedBrandLaunch'
import WhatweOfferBrandLaunch from '@/app/component/Service_Brand_Launch/WhatweOfferBrandLaunch'
import React from 'react'
import OurLaunchPress from '@/app/component/Service_Brand_Launch/OurLaunchPress'
import WhoWeHelp from '@/app/component/Service_Brand_Launch/WhoWeHelp'
import WhyWeAreBast from '@/app/component/Service_Brand_Launch/WhyWeAreBast'
import FqasBrand from '@/app/component/Service_Brand_Launch/FqasBrand'

export default function BrandLaunch() {
  return (
    <div>
        <BrandLaunchHero></BrandLaunchHero>
        <WhydoneedBrandLaunch></WhydoneedBrandLaunch>
        <WhatweOfferBrandLaunch></WhatweOfferBrandLaunch>
        <OurLaunchPress></OurLaunchPress>
        <WhoWeHelp></WhoWeHelp>
        <WhyWeAreBast></WhyWeAreBast>
        <FqasBrand></FqasBrand>
    </div>
  )
}
