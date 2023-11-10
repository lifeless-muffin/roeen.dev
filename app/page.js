import HomeStyles from "./Home.module.css"
import LandingSection from "./_components/home/LandingSection"

export default function Home() {
  return (
    <div className={HomeStyles.home_wrapper}>
      <LandingSection />
    </div>  
  )
}
