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
    <section className={HeroStyles.hero_section + ' hero-section u-width-block u-flex u-flex-centered'}>
      <div className={HeroStyles.hero__feature_wrapper + ' hero__feature-wrapper'}>
        <div className={HeroStyles.hero__gradient + ' hero__gradient u-width-block'}>
          <canvas className={HeroStyles.hero__gradient_canvas + ' hero__gradient-canvas'} id="hero__gradient-canvas" data-transition-in></canvas>
        </div>
        <div className={HeroStyles.hero__vector_wrapper + ' hero__vector-wrapper'}>
          <Image 
            src={heroVector}
            width={1013}
            height={317}
            className={HeroStyles.hero__vector + " hero__vector"}
            alt="Mansoor-Roeen | Mansoor Roeen SVG"
          />
        </div>
      </div>
    </section>
  )
}
