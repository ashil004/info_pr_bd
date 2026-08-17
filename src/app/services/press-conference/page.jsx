import PcFiveSection from '@/app/component/Service_Press_Conference/PcFiveSection'
import PcFourthSection from '@/app/component/Service_Press_Conference/PcFourthSection'
import PcHeroSection from '@/app/component/Service_Press_Conference/PcHeroSection'
import PcSectionTow from '@/app/component/Service_Press_Conference/PcSectionTow'
import PcSevenSection from '@/app/component/Service_Press_Conference/PcSevenSection'
import PcSixSection from '@/app/component/Service_Press_Conference/PcSixSection'
import PcThirdSection from '@/app/component/Service_Press_Conference/PcThirdSection'
import React from 'react'

export default function PressConference() {
  return (
    <div>
         <PcHeroSection></PcHeroSection>
         <PcSectionTow></PcSectionTow>
         <PcThirdSection></PcThirdSection>
         <PcFourthSection></PcFourthSection>
         <PcFiveSection></PcFiveSection>
         <PcSixSection></PcSixSection>
         <PcSevenSection></PcSevenSection>
    </div>
  )
}
