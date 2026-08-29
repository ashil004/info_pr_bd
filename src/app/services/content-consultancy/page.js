import ContactConsultancyHero from '@/app/component/Service_Contact_Consultancy/ContactConsultancyHero'
import ContactConsultancyWork from '@/app/component/Service_Contact_Consultancy/ContactConsultancyWork'
import WhatweContactConsultancy from '@/app/component/Service_Contact_Consultancy/WhatweContactConsultancy'
import WhychooseContactConsultancy from '@/app/component/Service_Contact_Consultancy/WhychooseContactConsultancy'
import React from 'react'

export default function ContactConsultancy() {
  return (
    <div>
        <ContactConsultancyHero></ContactConsultancyHero>
        <WhychooseContactConsultancy></WhychooseContactConsultancy>
        <WhatweContactConsultancy></WhatweContactConsultancy>
        <ContactConsultancyWork></ContactConsultancyWork>

    </div>
  )
}
