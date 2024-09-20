/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

function SuccessPage(props) {

  const [countdown, setCountdown] = useState(60);
  const [configText, setConfigText] = useState("");

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null);



  function handleUserDetails () {
      setUserId(localStorage.getItem("user_id"));
      setUserName(localStorage.getItem("user_name"));
  }
  

  useEffect(() => {
    // Set up the timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          // Redirect when countdown reaches zero
          window.location.href = 'https://wa.me/+919008290027';
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
      handleUserDetails();
  }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/superadmin/appconfig`);
        console.log(response , "response1");
        if(response.data) {
          setConfigText(response.data.appconfig[0].value);
        }
      } catch (error) {
        console.log(error);
      }  
    }
    fetchData();
  }, []);




  return (
    <div className="success-page-bg w-screen h-screen poppins-font relative overflow-y-auto">
      {/* Logo Section */}
      <div className="w-full px-6 py-3 md:px-10 md:py-5">
        <img src="/starlife-logo.png" alt="Starlife Logo" className="w-[30%] md:w-[20%] lg:w-[13%]" />
      </div>

      {/* Welcome Text Section */}
      <div className="w-full px-6 md:px-10 lg:px-20">
        <h1 className="font-semibold text-2xl md:text-3xl text-center text-[#211b12]">Welcome</h1>
        <p className="mt-2 font-semibold text-2xl md:text-3xl text-center text-wrap text-[#211b12]">{ userName && userName.toUpperCase() }</p>
        <p className="text-center text-lg md:text-xl font-medium text-[#372f26]">TSL { userId && userId }</p>
      </div>

      {/* Description Section */}
      <p className="mt-6 px-6 md:px-20 lg:px-64 text-center text-[#514534] text-sm md:text-base leading-6 md:leading-7">
          { configText }
        {/* This space is a sanctuary for reflection and exploration, where we can dive into the depths of spirituality and find peace together. Whether you’re here to meditate, chat, or simply seek some insight, know that you’re in a safe and nurturing environment. Let’s embark on this journey with an open heart and a curious mind. Feel free to share your thoughts, ask questions, or just be present. May this time be enriching and uplifting for you. */}
      </p>

      {/* WhatsApp Redirect Section */}
      <div className="py-6 md:py-10 flex flex-col gap-y-2 md:gap-y-3 font-semibold">
        <p className="text-center text-base md:text-xl text-[#211b12]">Redirecting to WhatsApp in...</p>
        <p className="text-center text-lg md:text-2xl text-[#29a719]">{ countdown }</p>
        <p className="text-center text-sm md:text-lg text-[#000]">
          Please send a hi to
          <a href="https://wa.me/+919008290027" className="px-1 md:px-2">
            <img 
              src="/whatsapp-ripple.gif" 
              className="w-6 md:w-8 inline-block rounded-full"
              alt="whatsapp ripple" 
            />
          </a> 
          for registration completion. Thank you.
        </p>
      </div>

      {/* App Download Section */}
      {/* <div className="m-auto w-full md:w-2/3 lg:w-1/2 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-xs md:text-sm font-semibold text-black flex flex-col items-center md:items-end gap-2">
          <p className="text-center md:text-right">Download our mobile app</p>
          <img src="/qr-code.png" alt="QR Code" className="w-16 md:w-20" />
        </div>
        <div className="w-full md:w-1/2 md:ps-2 flex flex-col gap-y-2 md:gap-y-4 items-center md:items-start">
          <img src="/play-store.png" alt="Play Store Icon" className="w-24 md:w-28 lg:w-36" />
          <img src="/apple-store.png" alt="Apple Store Icon" className="w-24 md:w-28 lg:w-36" />
        </div>
      </div> */}
      <div >
          <p className="text-center">Download our mobile app</p>
          <div className='mt-2 flex justify-center items-center'>
            <img src="/play-store.png" alt="Play Store Icon" className="w-24 md:w-28 lg:w-36" />
            <img src="/apple-store.png" alt="Apple Store Icon" className="w-24 md:w-28 lg:w-36" />
          </div>
      </div>

      {/* Footer Section */}
      <div className='w-full fixed bottom-0 left-0'>
        <Footer/>
      </div> 

    </div>
  );
}

export default SuccessPage;
