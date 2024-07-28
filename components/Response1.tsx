// components/Testimonial.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Response1: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      title: "Fine Tuning",
      description:
        "Train an AI phone agent on existing phone calls to improve call performance, and build guardrails against hallucination.",
      imgSrc: "Check.png",
      imgAlt: "Lightning Bolt",
    },
    {
      title: "Custom Tools",
      description:
        "Enable your phone agent to access external APIs, live during the call, to access customer records and knowledgebases, and perform actions like scheduling appointments.",
      imgSrc: "Tools.png",
      imgAlt: "Lightning Bolt",
    },
    {
      title: "Dedicated Infrastructure",
      description:
        "Even during moments of high volume, your enterprise’s infrastructure is partitioned from our general API, increasing the reliability of your phone agents.",
      imgSrc: "Voice.png",
      imgAlt: "Lightning Bolt",
    },
  ];

  return (
    <div
      id="testimonial"
      className="flex flex-col justify-center items-center py-16 px-4"
    >
      <h2 className="font-clash-display text-center font-medium mt-12 text-4xl">
        Scale with Enterprise-grade capabilities
      </h2>
      <div className="flex flex-col justify-center items-center mt-10 border border-[#FF853C] shadow-[0_60px_120px_15px_rgba(255,133,60,0.6)] w-full max-w-2xl rounded-lg p-6">
        <div className="w-full font-clash-display">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <div className="flex flex-col justify-center items-center text-center space-y-4">
                  <img
                    src={slide.imgSrc}
                    alt={slide.imgAlt}
                    className="h-16 w-16"
                  />
                  <h3 className="text-2xl font-semibold">{slide.title}</h3>
                  <p className="text-md">{slide.description}</p>
                  <a
                    href="https://app.toingg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                  >
                    Try Now
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Response1;
