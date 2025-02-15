
import AboutSec from "@/components/ui/home/AboutSec";
import EmergencyBanner from "@/components/ui/home/Emergency";

import Hero from "@/components/ui/home/Hero";
import ServicesBanner from '@/components/ui/home/service-banner';
import ServicesCarousel from "@/components/ui/home/ServiceCarousel";
import Testimonials from "@/components/ui/home/Testimonials";
import WhyChooseUs from "@/components/ui/home/WhyChooseUs";
import Exp from "../components/ui/home/Exp";


export default function Home() {
  return (
<>
  <Hero />
  <ServicesBanner />
  <ServicesCarousel />
  <Exp />
  <AboutSec />
  <WhyChooseUs />
  <Testimonials />
  <EmergencyBanner/>
</>
  )
}
