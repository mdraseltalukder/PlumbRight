
export default function OurCompany() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
          <h2 className="text-black font-bold">
                Our Company
                </h2>
                <span className="text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </span>
          </div>

       {/* Van Image */}
<div className="relative w-full aspect-[4/3] h-full">
  <img
    src="images/van.jpg"
    alt="Plumbing Master service van"
    className="object-contain w-full h-full"
  />

  {/* Centered Content */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-end">
    <h3 className="text-black font-bold">Plumbing Master</h3>
    <p className="text-black">+(1800) 654 8745</p>
    <span className="text-black">24 Emergency Response</span>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}

