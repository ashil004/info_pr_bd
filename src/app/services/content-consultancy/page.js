import BestContentConsultancy from '@/app/component/Service_Contact_Consultancy/BestContentConsultancy'
import ContactConsultancyHero from '@/app/component/Service_Contact_Consultancy/ContactConsultancyHero'
import ContactConsultancyWork from '@/app/component/Service_Contact_Consultancy/ContactConsultancyWork'
import FqaContentConsultancy from '@/app/component/Service_Contact_Consultancy/FqaContentConsultancy'
import WhatweContactConsultancy from '@/app/component/Service_Contact_Consultancy/WhatweContactConsultancy'
import WhoNeedConsultancyHero from '@/app/component/Service_Contact_Consultancy/WhoNeedConsultancy'
import WhychooseContactConsultancy from '@/app/component/Service_Contact_Consultancy/WhychooseContactConsultancy'
import React from 'react'

export default function ContactConsultancy() {
  return (
    <div>
        <ContactConsultancyHero></ContactConsultancyHero>
        <WhychooseContactConsultancy></WhychooseContactConsultancy>
        <WhatweContactConsultancy></WhatweContactConsultancy>
        <ContactConsultancyWork></ContactConsultancyWork>
        <WhoNeedConsultancyHero></WhoNeedConsultancyHero>
        <BestContentConsultancy></BestContentConsultancy>
        <FqaContentConsultancy></FqaContentConsultancy>

    </div>
  )
}
