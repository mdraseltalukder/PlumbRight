"use client"

import { useState } from "react"
import { Phone } from "lucide-react"


export default function GetInTouch() {

 

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="container mx-auto">
      <div className="text-center w-full flex flex-col items-center">

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab
          illo inventore veritatis et quasi architecto.
        </p>
      </div>


        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-6" action="https://formspree.io/f/mvgzqnle"
  method="POST">
          <input type="hidden" name="access_key" value="4ddadbc4-d788-4388-b9e8-0782f21b7c21"/>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9900ff]"
              
              
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9900ff]"
             
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9900ff]"
              
              required
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9900ff]"
              
              required
            />
            <button
              type="submit"
              className="bg-[#9900ff] text-white px-6 py-3 rounded-md hover:bg-[#9900ff] transition-colors font-semibold"
            >
              SUBMIT NOW
            </button>
          </form>

          {/* Contact Information */}
          <div className="bg-gray-100 p-6 rounded-lg space-y-8">
            {/* Emergency Plumbing */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                EMERGENCY <span className="text-[#9900ff]">PLUMBING</span>
              </h3>
              <p className="text-gray-600 mb-2">We're open 24/7/365 because plumbing emergencies don't wait.</p>
              <p className="text-gray-600 mb-1">Call us now on</p>
              <a
                href="tel:1800458654"
                className="text-2xl font-bold hover:text-[#9900ff] transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                1800 (458) 6547
              </a>
            </div>
            <hr />

            {/* Plumbing Maintenance */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                PLUMBING <span className="text-[#9900ff]">MAINTANCE</span>
              </h3>
              <p className="text-gray-600 mb-2">Do you have a leaky faucet or clogged drain? Call Us For Fixing</p>
              <a
                href="tel:4787854965"
                className="text-2xl font-bold hover:text-[#9900ff]  transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                4787 (854) 9658
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

