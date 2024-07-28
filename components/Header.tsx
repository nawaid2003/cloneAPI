import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#FFD3B4] flex justify-center items-end h-12 pb-2">
      <div className="scrolling-message">
        We are still in beta mode, The demo call is highly tuned for Toingg's
        help desk and when you make a call with us with Toingg you are agreeing
        all the T&amp;C's by default.
      </div>
    </div>
  );
};

export default Header;
