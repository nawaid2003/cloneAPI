"use client";
import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";


interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is Toingg\'s pricing?',
      answer: 'Toingg is a realistic English & Hindi AI Calling Agent with features like interruption handling, batch calling, live text sending, sentiment analysis, and integration with over 5000+ apps. You can call anyone at any corner of the world easily. We are also developing our own proprietary TTS model to enhance voice interactions with a focus on reducing costs, enhancing accent and dialects to promote research for non-commercial use.',
    },
    {
      question: 'What is Toingg?',
      answer: 'Toingg is a realistic English & Hindi AI Calling Agent with features like interruption handling, batch calling, live text sending, sentiment analysis, and integration with over 5000+ apps. You can call anyone at any corner of the world easily. We are also developing our own proprietary TTS model to enhance voice interactions with a focus on reducing costs, enhancing accent and dialects to promote research for non-commercial use.',
    },
    {
      question: 'How secure is Toingg?',
      answer: 'Toingg prioritizes data security and privacy, adhering to global standards and employing internal hard audits and compliance measures to protect your information.'
    },
    {
        question: 'How does billing work?',
        answer: 'Toingg provides bespoke enterprise solutions with dedicated support for smooth implementation, integration, and customization to meet specific enterprise needs.'
      },
      {
        question: 'What phone numbers can i use with Toingg?',
        answer:'For inquiries or more info, you can reach us out at contact@toingg.com and our team will promptly assist you.'
      },
      {
        question: 'Does Toingg support multiple language?',
        answer: 'Toingg provides bespoke enterprise solutions with dedicated support for smooth implementation, integration, and customization to meet specific enterprise needs.'
      },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" mt-40 mb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(index)}>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-black">
                  {faq.question}
                </h3>
                <IoMdAdd/>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-sm sm:text-base md:text-lg text-black">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
