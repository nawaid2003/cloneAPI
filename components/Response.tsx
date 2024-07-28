// components/Testimonial.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Response: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      title: "Ultra-Fast Response",
      description:
        "Experience lightning-quick interactions with an impressive 500 ms response time, ensuring seamless conversations.",
      imgSrc: "Lightning Bolt.png",
      imgAlt: "Lightning Bolt",
    },
    {
      title: "Smart Interruption Management",
      description:
        "Our system adeptly handles interruptions, ensuring smooth, natural dialogues just like human conversations",
      imgSrc: "Private.png",
      imgAlt: "Lightning Bolt",
    },
    {
      title: "Advanced Memory Recall",
      description:
        "Remembering context and details from earlier in the conversation, our AI provides a personalized and coherent interaction.",
      imgSrc: "Brain.png",
      imgAlt: "Lightning Bolt",
    },
    {
      title: "Dynamic Conversational Flows",
      description:
        "Navigate through complex conversations with ease, thanks to our AI's ability to understand and adapt to various conversational pathways.",
      imgSrc: "Planned Path.png",
      imgAlt: "Lightning Bolt",
    },
    {
      title: "Custom AI Solution",
      description:
        "Leverage our proprietary AI models tailored to your specific business needs for unparalleled efficiency and effectiveness.",
      imgSrc: "Key.png",
      imgAlt: "New Feature",
    },
    {
      title: "Scalability at Your Fingertips",
      description:
        "From one-on-one conversations to managing 10,000 concurrent calls, our platform scales effortlessly with your business.",
      imgSrc: "Scale Up.png",
      imgAlt: "New Feature",
    },
  ];

  return (
    <div
      id="testimonial"
      className="flex flex-col justify-center items-center py-16 px-4"
    >
      <h2 className="font-clash-display text-center font-medium mt-12 text-4xl">
        Program phone agents to automate any task
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
                    className="bg-[#ff9345] px-2 py-2 border rounded-xl hover:scale-95 text-white"
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

export default Response;
