const { default: Link } = require("next/link")
import Image from "next/image"
import HomeStyles from "./Home.module.css"
import HeroSection from "./_components/home/HeroSection"
import arrowSvg from '../public/icons/google/north-south-arrow.svg'

export default function Home() {
  return (
    <div className={HomeStyles.home_wrapper + ' home-wrapper'}>
      <section className={HomeStyles.home__landing}>
        <HeroSection />
        <div className={HomeStyles.landing__content_wrapper + " landing__content-wrapper flex m-auto w-[90%] max-w-[1064px] items-center justify-end pt-10"}>
          <div className={HomeStyles.landing__about_wrapper + " landing__about-wrapper flex items-start"}>
            <div className={HomeStyles.landing__arrow_wrapper + " landing__arrow-wrapper rotate-[100deg]"}>
              <Image 
                src={arrowSvg}
                draggable={false}
                width={20}
                height={20}
                alt="Arrow Vector Image"
                className={HomeStyles.landing__arrow + ' landing__arrow'} 
              />
            </div>
            <div className={HomeStyles.landing__text_wrapper + " landing__text-wrapper pl-4"}>
              <p className={HomeStyles.landing__text_p + " landing__text-p text-base uppercase max-w-sm"}>
                Web developer and designer, focusing on web experiences
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>  
  )
}
