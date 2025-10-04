import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCards from '@/components/CompanionCards'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
<main>
  <h1 className='text-2xl underline'>Popular Companions</h1>
  <section className='home-section'>
    <CompanionCards
    id="123"
    name="amuthing"
    topic="neural networks"
    subject="science"
    duration={45}
    color="#ffda6e"
    />
    <CompanionCards
    id="123"
    name="amuthing"
    topic="neural networks"
    subject="science"
    duration={45}
    color="#ffda6e"
    />    <CompanionCards
    id="123"
    name="amuthing"
    topic="neural networks"
    subject="science"
    duration={45}
    color="#ffda6e"
    />
  </section>
  <section className='home-section'>
    <CompanionsList
    title="Recently Completed Sessions"
    companions = {recentSessions}
    classNames="w-2/3 max-lg:w-full"
    />
    <CTA/>
  </section>
</main>
  )
}

export default Page