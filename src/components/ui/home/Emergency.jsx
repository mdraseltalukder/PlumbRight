"use client";

const EmergencyBanner = () => {
  return (
    <div className="emergency-banner">
      <div
        className="container flex flex-col gap-2 mx-auto px-4 py-12 text-center"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
      >
        <span className="text-white  mb-4">
          If you have any emergency plumbing need, simply call our 24 hour
          emergency plumbing
        </span>

        <h3 className="text-white  font-bold mb-2">
          QUICK AND RELIABLE REPAIRE OF{" "}
          <span className="text-[24px] text-[#9900ff]">
            EMERGENCY LEAKES & PIPE BRUST
          </span>
        </h3>

        <a
          href="tel:+1800-654-8745"
          className="text-[#fff] text-[28px] hover:text-[#9900ff] transition-colors"
        >
          +(1800)-654-8745
        </a>
      </div>
    </div>
  );
};

export default EmergencyBanner;
