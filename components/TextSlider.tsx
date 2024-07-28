"use client"
import React, { useState, useEffect } from 'react';

const salesCallItems = [
  'Lead Generation',
  'Sales Call',
  'Recruitment',
  'B2B Data Collection',
  'Fund Raising',
  'Political Campaigning',
  'Appointment Booking',
  'Interview Scheduling',
  'Market Surveys',
  'Upselling & Cross-selling',
  'Payment Reminders',
  'Customer Feedback Collection',
  'Property Listing Handling',
  'Brand Promotion',
  'Resolve Customer Complaints',
  'EVERYTHING',
];

const SalesCallAnimation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % salesCallItems.length);
    }, 2000); // Adjust the interval time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="salesCall font-medium md:text-4xl sm:text-md" id="ChangingText">
      <b>
        {salesCallItems.map((item, index) => (
          <span key={index} className={`salesCallItem ${index === currentIndex ? 'block' : 'hidden'}`}>
            {item}
          </span>
        ))}
      </b>
    </div>
  );
};

export default SalesCallAnimation;
