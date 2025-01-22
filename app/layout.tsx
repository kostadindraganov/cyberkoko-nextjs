"use client"

import { useLayoutEffect, useRef, useState } from "react"
import Intro from "@/components/Intro";

import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import gsap from "gsap"

import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
    <html lang="en">
      <body
        className="antialiased"
      >
   <main ref={comp} className='relative min-h-screen w-screen overflow-x-hidden '>
     <Intro />
      {
        showContent && (
          <>
            <NavBar />  
               {children}
             <Footer />
          </> 
        )
      }
    </main >
      </body>
    </html>
  );
}
