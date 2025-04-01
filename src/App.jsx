import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HowitHelps from './components/HowitHelps/HowitHelps'
import Uses from './components/Uses/Uses'
import Trust from './components/Trust/Trust'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <main className=''>
     <Navbar/>
     <Hero/>
     <HowitHelps/>
     <Uses/>
     <Trust/>
     <Footer/>
    </main>
  )
}

export default App