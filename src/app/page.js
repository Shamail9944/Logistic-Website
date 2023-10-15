import IndustryNews from '@/components/IndustryNews'
import PromoVid from '@/components/PromoVid'
import SliderHome from '@/components/SliderHome'
import SpecialitySection from '@/components/SpecialitySection'

export const metadata = {
  title: 'ASK Someday - Home',
  description: 'Get delivery services at door steps',
}

export default function Home() {

  return (
    <main className="w-full " >
      <div className="w-full flex flex-col items-center justify-between"  >
        <div className="w-full items-center justify-between"  >
          <SliderHome />
          <SpecialitySection />
          <PromoVid />
          <IndustryNews />
        </div>
      </div>
    </main>
  )
}
