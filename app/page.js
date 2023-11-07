const { default: Link } = require("next/link")
import HomeStyles from "./Home.module.css"
import HeroSection from "./_components/home/HeroSection"

export default function Home() {
  return (
    <div className={HomeStyles.home_wrapper + ' home-wrapper'}>
      <HeroSection />
    </div>
  )
}
