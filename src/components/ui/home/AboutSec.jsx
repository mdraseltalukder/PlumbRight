"use client";

import { Check } from "lucide-react";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Input } from "../input";
import { Textarea } from "../textarea";

export default function AboutSec() {
  return (
    <div
      className=" bg-[#1B2B54] p-14 md:p-28 relative overflow-hidden"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-easing="ease-in-sine"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Request Service Form */}
        <Card className="bg-[#723d96] text-white border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              REQUEST SERVICE
            </CardTitle>
            <p className="text-sm opacity-90">
              Enter your contact details here to help us serve you better &
              faster.
            </p>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              action="https://formspree.io/f/mvgzqnle"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="4ddadbc4-d788-4388-b9e8-0782f21b7c21"
              />
              <Input
                placeholder="Name"
                className="bg-white text-black border-none"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-white text-black border-none"
              />
              <Input
                type="tel"
                placeholder="Telephone"
                className="bg-white text-black border-none"
              />
              <Textarea
                placeholder="How may we help you?"
                className="bg-white text-black border-none min-h-[120px]"
              />
              <Button
                className="w-full bg-[#9900ff] hover:bg-[#6502a7] text-white text-black"
                type="submit"
              >
                GET QUOTE
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* About Us Section */}
        <div className="text-white space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="font-semibold mb-6">
              Our licensed plumber perform all plumbing services including:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>Faucet</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>Toilets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>Garbage Disposals</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>Drain Cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>Water Heater Repair and Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>Gas Line Repair/Replacement</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              In Addition to our commitment towards excellence our advantages
              are :
            </h3>
            <p className="text-sm opacity-80 mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo invent ore veritatis et.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>24 -Hours Emergency Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>Uniformed, Licensed Plumbers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>No Travel Charges</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>Licensed and Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-[#9900ff]" />
                  <span>Free Estimates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Water Splash Effect */}
      <div
        className="absolute bottom-0 right-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("images/water.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
