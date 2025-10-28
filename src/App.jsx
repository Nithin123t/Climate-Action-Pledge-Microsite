import React from 'react'
import Hero from './components/Hero'
import KPIs from './components/KPIs'
import Why from './components/Why'
import PledgeForm from './components/PledgeForm'
import Certificate from './components/Certificate'
import PledgeWall from './components/PledgeWall'
import PrivacyNote from './components/PrivacyNote'

export default function App(){
  return (
    <div className="min-h-screen">
      <header className="fixed w-full z-20 bg-white/60 backdrop-blur">
        <nav className="container mx-auto p-4 flex justify-between">
          <div className="font-bold">Cool Enough to Care</div>
          <div className="space-x-4">
            <a href="#pledge" className="btn">Take the Pledge</a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <Hero />
        <KPIs />
        <Why />
        <section id="pledge" className="container mx-auto p-6">
          <PledgeForm />
        </section>
        <Certificate />
        <PledgeWall />
        <PrivacyNote />
      </main>
    </div>
  )
}
