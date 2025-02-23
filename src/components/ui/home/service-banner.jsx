import { MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function ServiceBanner() {
  return (
    <div className=" bg-[#bd77ec] text-white py-6">
      <div className=" mx-auto px-4 max-w-[1100px] ">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4 md:gap-8"  data-aos="fade-up"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine">
          {/* Service Area Section */}
          <div className=" flex items-center gap-3">
            <MapPin className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="font-bold ">OUR SERVICE AREA IN COLORADO</h3>
              <span>It&apos;s our pleasure to serve Denver and the surrounding areas</span>
              <Link href="/service-area" className="text-sm underline hover:text-white/90 transition-colors">
                See Service Area Details
              </Link>
            </div>
          </div>

          {/* Divider for larger screens */}
          <div className="hidden md:block w-2 h-16 bg-red-400/60" />

          {/* Emergency Section */}
          <div className="flex items-center gap-3">
            <Phone className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="font-bold ">EMERGENCY PLUMBLING</h3>
              <span>
                We&apos;re open 24/7/365 because plumbing emergencies don&apos;t wait.{" "}
                <Link href="../../../Pages/Contact.jsx" className="underline hover:text-white/90 transition-colors">
                  Call us now.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

