"use client"

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import FloatingImage from './components/Story'
import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import Universe from './components/Universe'
import WhoAreWe from './components/WhoAreWe'
import Glance from './components/Glance'
import Labels from './components/Labels'
import Updates from './components/Updates'
import Intro from './components/Intro'

function App() {
  const comp = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()

      t1.from("#intro-slider", {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        backgroundColor: "#000000",
      })

        .to("#intro-slider", {
          // scale: 1, 
          duration: 1.3,
          ease: "power3.inOut",
          backgroundColor: "#5729ff",
        })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          // opacity: 0,
          y: "-100vh",
          stagger: 0.6,
          ease: "circ.inOut",
        }).to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-100vh",
          ease: "back.out",
          stagger: 0.5,
        })
        .to("#intro-slider", {
          scale: 0,
          // borderRadius: "100%",
          backgroundColor: "black",
          duration: 0.5,
          onComplete: () => setShowContent(true)
        })

    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={comp} className='relative min-h-screen w-screen overflow-x-hidden '>
     <Intro />
      {
        showContent && (
          <>
            <NavBar />
            <Hero />
            <About />
            <Features />
            <FloatingImage />
            <Universe />
            <WhoAreWe />
            <Glance />
            <Labels />
            <Updates />
            <Contact />
            <Footer />
          </>
        )
      }
    </main >
  )
}

export default App;