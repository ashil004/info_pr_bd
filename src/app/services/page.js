import React from 'react'
import HeroServices from '../component/services/HeroServices'
import ServicesWeProvider from '../component/services/ServicesWeProvider'
import FindOurServices from '../component/services/FindOurServices'

export default function Services() {
  return (
    <div>
        <HeroServices></HeroServices>
         <ServicesWeProvider></ServicesWeProvider>
         <FindOurServices></FindOurServices>
    </div>
  )
}
