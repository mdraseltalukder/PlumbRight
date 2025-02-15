"use client"

import { Home, Tag, ThumbsUp, Truck, User, Wrench } from "lucide-react"
import { useState } from "react"

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      id: 1,
      icon: <User size={24} />,
      title: "Highly Trained Plumber",
      angle: 0,
    },
    {
      id: 2,
      icon: <Truck size={24} />,
      title: "24/7 Emergency Service",
      angle: 60,
    },
    {
      id: 3,
      icon: <Tag size={24} />,
      title: "Fix Price Repairs",
      angle: 120,
    },
    {
      id: 4,
      icon: <ThumbsUp size={24} />,
      title: "100% Satisfaction Guaranteed",
      angle: 180,
    },
    {
      id: 5,
      icon: <Wrench size={24} />,
      title: "Fast, Same Day Repairs",
      angle: 240,
    },
    {
      id: 6,
      icon: <Home size={24} />,
      title: "Respect Your Home",
      angle: 300,
    },
  ]

  return (
    <div className="why-choose-container">
      <h2 className="">
        Why Choose Us
        <span className="title-underline"></span>
      </h2>

      <div className="features-wheel realtive">
        {/* Center Image */}
        <div className="center-image">
          <img
            src="images/img_1.png"
            alt="Professional Plumber"
            width={200}
            height={200}
            className="plumber-image"
          />
        </div>

    

        {/* Feature Icons */}
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`feature-item ${activeFeature === feature.id ? "active" : ""}`}
            style={{
              transform: `rotate(${feature.angle}deg) translateX(270px) rotate(-${feature.angle}deg)`,
            }}
            onMouseEnter={() => setActiveFeature(feature.id)}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <span className="feature-title">{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs

