"use client"
import React, { useEffect } from 'react'
import HeroStyles from "./Hero.module.css"
import Image from 'next/image';
import heroVector from '../../../public/icons/hero.svg'
import Gradient from '../../_utilities/gradientCanvas'

export default function HeroSection() {

  useEffect(() => {
    const canvasElement = document.getElementById("hero__gradient-canvas");
    const gradient = new Gradient()
    if (canvasElement) {
      gradient.initGradient("#hero__gradient-canvas");
    } else {
      gradient.pause();
    }
  }, []);

  return (
    <div className={HeroStyles.hero_section + ' hero-section w-full flex justify-center items-end'}>
      <div className={HeroStyles.hero__feature_wrapper + ' hero__feature-wrapper'}>
        <div className={HeroStyles.hero__gradient + ' hero__gradient w-full'}>
          <canvas className={HeroStyles.hero__gradient_canvas + ' hero__gradient-canvas'} id="hero__gradient-canvas" data-transition-in></canvas>
        </div>
        <div className={HeroStyles.hero__vector_wrapper + ' hero__vector-wrapper'}>
          <Image 
            draggable={false}
            src={heroVector}
            width={1016}
            height={316}
            className={HeroStyles.hero__vector + " hero__vector"}
            alt="Mansoor-Roeen | Mansoor Roeen SVG"
          />
        </div>
      </div>
    </div>
  )
}
