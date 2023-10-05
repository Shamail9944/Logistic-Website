import IndustryNews from '@/components/IndustryNews'
import PromoVid from '@/components/PromoVid'
import SliderHome from '@/components/SliderHome'
import SpecialitySection from '@/components/SpecialitySection'

export default function Home() {

  return (
    <main className="flex  flex-col items-center" >
      <div className="max-w-8xl w-full items-center justify-between"  >
        <SliderHome />
        <SpecialitySection />
        <PromoVid />
        <IndustryNews />
      </div>
    </main>
  )
}
