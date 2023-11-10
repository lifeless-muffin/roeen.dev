const { default: Link } = require("next/link")
import Image from "next/image"
import React from 'react'
import HeroSection from "./HeroSection"
import arrowSvg from '../../../public/icons/google/north-south-arrow.svg'
import stdSvg from '../../../public/icons/custom/scroll-to-discover.svg'
import styles from './Landing.module.css'

export default function LandingSection() {
  return (
    <section className={styles.home__landing}>
      <HeroSection />
      <div className={styles.landing__content_wrapper + " flex m-auto w-[90%] max-w-[1064px] items-center justify-end pt-10"}>
        <div className={styles.landing__about_wrapper + " flex items-start"}>
          <div className={styles.landing__arrow_wrapper + " rotate-[100deg]"}>
            <Image 
              src={arrowSvg}
              draggable={false}
              width={20}
              height={20}
              alt="Arrow Vector Image"
              className={styles.landing__arrow}
            />
          </div>
          <div className={styles.landing__text_wrapper + " pl-4"}>
            <p className={styles.landing__text_p + " text-base uppercase max-w-sm"}>
              Web developer and designer, focusing on web experiences
            </p>
          </div>
        </div>
      </div>
      <div className={styles.std_wrapper + " absolute left-10 bottom-[4vh] h-fit"}>
        <Image 
          src={stdSvg}
          width={80}
          height={80}
          alt="Scroll To Discover"
          draggable={false}
          className={styles.std_icon + " w-full h-auto"}
        />
      </div>
    </section>
  )
}
