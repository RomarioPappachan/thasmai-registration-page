// import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import LanguagePopUp from "../components/LanguagePopUp";
import { useState, useEffect } from "react";

function HomePage() {
  const [isLangPopUp, setIsLangPopUp] = useState(false);


  useEffect(() => {
    try {
      window.localStorage.removeItem("refferalId");

      let referralId = location.href.split("?")[1].split("=")[1];
      window.localStorage.setItem("refferalId", referralId);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="hero-section w-full h-screen relative flex justify-center items-center">
      <div className="w-24 h-24 md:w-32 md:h-32 flex justify-center items-center bg-gradient-to-b from-[#BA1A1A] to-[#540c0c] rounded-full absolute bottom-14  md:right-12 md:bottom-12 lg:right-20 lg:bottom-20">
        <button
          className="proceed-button w-20 h-20 md:w-28 md:h-28 rounded-full flex justify-center items-center bg-white"
          onClick={() => {
            setIsLangPopUp(true);
          }}
        >
          <MdKeyboardArrowRight className="text-black text-4xl md:text-5xl lg:text-7xl font-light" />
        </button>
      </div>
      {isLangPopUp && (
        <LanguagePopUp setIsLangPopUp={setIsLangPopUp} />
      )}
    </div>
  );
}

export default HomePage;
