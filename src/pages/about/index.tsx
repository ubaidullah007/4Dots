import Footer from '@/components/footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { StoryCard } from '@/components/storyCard/StoryCard'
import AboutBanner from '@/sections/about/AboutBanner/AboutBanner'
import { Execution } from '@/sections/about/Execution/Execution'
import JoinUs from '@/sections/about/JoinUs/JoinUs'
import Team from '@/sections/about/Team/Team'
import { Vision } from '@/sections/about/Vision/Vision'
import React from 'react'
import Head from 'next/head'

function index() {
  return (
    <div>
      <Head>
        <title>About | 4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
        <meta
          name="description"
          content="Discover the heart of 4Dots Solutions LLC through our 'About Us' page. Explore our journey, values, and commitment to excellence in software, AI, and blockchain development."
          key="desc"
        />
      </Head>
      <AboutBanner />
      {/* <Team /> */}
      <div style={{ background: '#F9F9FD' }}>
        <JoinUs />
        <Vision />
      </div>
    </div>
  )
}

export default index
