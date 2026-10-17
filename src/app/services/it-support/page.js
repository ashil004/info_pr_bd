import React from 'react'
import ItSupportHero from './ItSupportHero'
import WhyChoosItSupport from './WhyChoosItSupport'
import WhatWeDeliver from './WhatWeDeliver'
import WhoWeWorkWithItSupport from './WhoWeWorkWithItSupport'
import OurExperience from './OurExperience'
import PcSixSection from '@/app/component/Service_Press_Conference/PcSixSection'
import FaqsItsupport from './FaqsItsupport'

export default function ItSupportPage() {
  return (
    <div>
      <ItSupportHero></ItSupportHero>
      <WhyChoosItSupport></WhyChoosItSupport>
       <WhatWeDeliver></WhatWeDeliver>
       <WhoWeWorkWithItSupport></WhoWeWorkWithItSupport>
       <OurExperience></OurExperience>
       <PcSixSection></PcSixSection>
       <FaqsItsupport></FaqsItsupport>
    </div>
  )
}
