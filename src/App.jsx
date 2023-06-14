import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Insights from './components/Insights'
import Footer from './components/Footer'
import Accordian from './components/Accordian'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Insights />
      <Accordian />
      <Footer />
    </div>
  )
}
