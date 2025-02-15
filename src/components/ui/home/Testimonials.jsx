
'use client'

import { Quote } from 'lucide-react'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { Card, CardContent } from '../card'

export default function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()])

  const testimonials = [
    {
      quote: "Totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque.",
      author: "Philipin John",
      location: "UNITEDSTATE",
      image: "images/testimonial-1.jpg"
    },
    {
      quote: "Totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque.",
      author: "Mariya John",
      location: "MOUNTHILL",
      image: "images/testimonial-2.jpg"
    },
    {
      quote: "Totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque.",
      author: "Philipin John",
      location: "UNITEDSTATE",
      image: "images/testimonial-1.jpg"
    },
    {
      quote: "Totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab.Teritatis et quasi architecto. Sed ut perspi ciatis unde omnis iste natus error sit volu ptatem accusantium dolore mque.",
      author: "Mariya John",
      location: "MOUNTHILL",
      image: "images/testimonial-2.jpg"
    }
  ]

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi])

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Client Says
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%]"
              >
                <Card className="border-none shadow-lg mr-4">
                  <CardContent className="p-6 relative">
                    <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-400 opacity-20" />
                    <div className="pl-8">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {testimonial.author}
                          </h4>
                          <p className="text-[#9900ff] text-sm">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
