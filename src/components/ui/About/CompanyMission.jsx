export default function CompanyMission() {
    return (
      <section className="grid md:grid-cols-2 my-10">
        {/* Left Section */}
        <div className="bg-gray-100 px-8 py-12 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <h3 className=" font-bold text-gray-900 mb-6">
              Company Mission <span className="inline-block w-8 h-1 bg-[#9900ff] ml-2" />
            </h3>
  
            <p className="text-gray-600 mb-8">
              The dedication to fulfill our customer's needs and wants has always been needs and wants has always been
              imperative to the way we operate and we adapt our services in order to achieve this.
            </p>
  
            <ul className="space-y-3">
              {[
                "24-Hours Emergency Services",
                "Uniformed, Licensed Plumbers",
                "No Travel Charges",
                "Licensed and Insured",
                "Discounts to Senior Citizens, Teachers, Police Officers",
                "Free Estimates",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-[#9900ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="bg-cover bg-center relative"
         
          style={{
            backgroundImage: `url(${encodeURI("images/trust.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        <div  className="mission-img px-8 py-12 md:px-12 lg:px-16 text-white flex flex-col justify-center absolute top-0 right-0 z-10 w-full h-full opacity-85">

   
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-6">
              Founded on Trust, <span className="block">Service, & Quality Work</span>
              <span className="inline-block w-8 h-1 bg-white mt-4" />
            </h2>
  
            <p className="mb-8 italic text-lg">
              we love what we do, and we believe in it. It's not just plumbing to us, but a philosophy applied to every
              area of our lives. It's just the plumbing that's made us famous.
            </p>
  
            <button className="bg-[#9900ff] hover:bg-[#9900ff] text-white font-bold py-3 px-8 rounded transition-colors">
              OUR OFFERS
            </button>
          </div>
          </div>
        </div>
      </section>
    )
  }
  
  