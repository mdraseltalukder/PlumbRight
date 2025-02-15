

"use client"


import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { Button } from "../button"

const services = [
  {
    icon: "images/9.png",
    title: "Sewer Repair & Cleaning",
    link: "/services/sewer-repair",
  },
  {
    icon: "images/8.png",
    title: "Facuet & Leak Repairs",
    link: "/services/faucet-repair",
  },
  {
    icon: "images/7.png",
    title: "Remodeling Service",
    link: "/services/remodeling",
  },
  {
    icon: "images/6.png",
    title: "Plumbing Services",
    link: "/services/plumbing",
  },
  {
    icon: "images/9.png",
    title: "Drain Cleaning & Repairs",
    link: "/services/sewer-repair",
  },
  {
    icon: "images/8.png",
    title: "Gas Line Services",
    link: "/services/faucet-repair",
  },
  {
    icon: "images/7.png",
    title: "Water Treatment System",
    link: "/services/remodeling",
  },

  // Add more services as needed
]

export default function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slideInterval = 3000 // 3 seconds per slide

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }, [])

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, slideInterval)
      return () => clearInterval(interval)
    }
  }, [isPaused, nextSlide])

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Plumbing, Heating, Air Conditioning, and Insulation
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            For over 80 years, We have been the trusted name in heating, air conditioning and plumbing businesses.
            Throughout the years, our number one goal has been to accurately and honestly assess your HVAC and plumbing
            systems and repair them back to proper working conditions.
          </p>
        </div>

        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {/* Duplicate the services array for infinite loop effect */}
              {[...services, ...services].map((service, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img src={service.icon || "/placeholder.svg"} alt="" className="w-12 h-12 mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                    <a href={service.link} className="text-[#9900ff]  hover:text-[#9900ff] inline-flex items-center group">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                prevSlide()
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 5000) // Resume auto-slide after 5 seconds
              }}
              className="rounded-full"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                nextSlide()
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 5000) // Resume auto-slide after 5 seconds
              }}
              className="rounded-full"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsPaused(true)
                  setTimeout(() => setIsPaused(false), 5000)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-red-500 w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



