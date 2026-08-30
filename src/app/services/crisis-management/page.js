import CrisisManagementHero from '@/app/component/Service_CrisisManagement/CrisisManagementHero'
import FqaCrisis from '@/app/component/Service_CrisisManagement/FqaCrisis'
import OurCrisisManagementProcess from '@/app/component/Service_CrisisManagement/OurCrisisManagementProcess'
import WeOfferRequmer from '@/app/component/Service_CrisisManagement/WeOfferRequmer'
import WhoDoWeHelp from '@/app/component/Service_CrisisManagement/WhoDoWeHelp'
import WhyAreWeOne from '@/app/component/Service_CrisisManagement/WhyAreWeOne'
import WhyNeedCrisistManagementService from '@/app/component/Service_CrisisManagement/WhyNeedCrisistManagementService'
import React from 'react'

export default function CrisisManagement() {
  return (
    <div>
        <CrisisManagementHero></CrisisManagementHero>
        <WhyNeedCrisistManagementService></WhyNeedCrisistManagementService>
        <WeOfferRequmer></WeOfferRequmer>
        <OurCrisisManagementProcess></OurCrisisManagementProcess>
        <WhoDoWeHelp></WhoDoWeHelp>
        <WhyAreWeOne></WhyAreWeOne>
        <FqaCrisis></FqaCrisis>
    </div>
  )
}
