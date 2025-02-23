export default function Exp() {
  return (
    <section className=" xl:mr-48 bg-[#001f3f] ">
      <div className=" flex gap-0 flex-col md:flex-row justify-between ">
        {/* Content Side */}
        <div
          className="relative text-white py-16 md:py-24 lg:pl-32"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
        >
          {/* Diagonal Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
            45deg,
            currentColor,
            currentColor 1px,
            transparent 1px,
            transparent 12px
          )`,
            }}
          />

          {/* Content Container */}
          <div className="relative container  px-4 md:px-6">
            <div className="max-w-2xl flex flex-col gap-3 items-start">
              <h2 className="font-bold leading-tight">Great Experience</h2>
              <h2 className="font-bold mb-6 leading-tight">For Boilding</h2>
              <p className="text-gray-200 leading-relaxed text-left">
                We offering expert plumbers for repair and installation of
                plumbing & gas items. We have a fast and efficient in-home
                estimating team to quickly service Maryland. If you have a
                chronic drain problem, ask about our fiber optic under-ground
                camera to pinpoint the problem, and avoid costly dig ups.
              </p>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div
          className="relative h-[400px] md:h-auto"
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
        >
          <img
            src="images/building.jpg"
            alt="Professional plumbing team"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
