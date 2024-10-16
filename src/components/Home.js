import React from 'react'
import Navbar from './Navbar'
import Royal from './Royal'
import Middle from './Middle'
import FullDetails from './FullDetails'
function Home() {
  return (
    <div>
      <Navbar/>
      <Royal/>
      <FullDetails/>
      <Middle/>
    </div>
  )
}

export default Home