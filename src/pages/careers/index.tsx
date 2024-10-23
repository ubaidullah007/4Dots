import CareerBanner from '@/sections/careers/CareerBanner/CareerBanner'
import Jobs from '@/sections/careers/Jobs/Jobs'
import React from 'react'
import Head from 'next/head'

const index = () => {
  return (
 
 <>
  <Head>
    <title>Careers | 4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
    <meta
          name="description"
          content=" 4Dots Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services -Join the 4Dots Solutions LLC family. Explore exciting opportunities on our 'Careers' page. Be part of our journey in software, AI, blockchain, and more."
          key="desc"
        />
  </Head>
 <CareerBanner/>
 <Jobs/>
 </>
  )
}

export default index