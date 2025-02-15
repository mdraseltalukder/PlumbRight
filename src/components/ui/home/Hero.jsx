"use client"


export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg- bg-center"
        style={{
          backgroundImage: `url('images/slider-1.jpg')`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-center">
        <div className="container  px-4 md:px-6">
          <div className="max-w-2xl flex flex-col justify-start items-start space-y-4">
       
              <p className="text-navy-900 font-light   ">BEST PLUMBING COMPANY_____</p>

    
              <h1 className="text-navy-900 font-bold  leading-none">
                EMERGENCY

           
              </h1>
              <h1 className="text-navy-900 font-bold  leading-none">
                PLUMBING

              </h1>

              <span className="  text-navy-800  max-w-xl">
                We&apos;re open 24/7/365 because plumbing emergencies don&apos;t wait...
              </span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <div className="absolute inset-y-0 left-0 flex items-center">
        <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/80 hover:bg-white">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
      </div> */}
{/* 
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/80 hover:bg-white">
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div> */}
    </div>
  )
}

