/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import axios from 'axios';
import React, { useState, useEffect, useRef} from 'react'

function OtpPopUp(props) {

  const [isInvalidOtp, setIsInvalidOtp] = useState(false);

  const [timer, setTimer] = useState(``);
  const [otpTimerToggle, setOtpTimerToggle] = useState(false);
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const [isResendButtonEnabled, setIsResendButtonEnabled] = useState(false);
  const [otpErrorMessage, setOtpErrorMessage] = useState("");

  const inputRefs = Array.from({ length: 4 }, () => useRef(null));

 
 

 
  useEffect(() => {
    
    // console.log(props.completeData, 'Complete Data......');
    let countDown = new Date(Date.now() + 1.03 * 60 * 1000);

    
    let update = setInterval(function () {
      setIsResendButtonEnabled(false);
      let now = new Date().getTime();
      let diff = countDown - now;
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);
 
      setTimer(
        `0${minutes} : ${
          String(seconds).length >= 2 ? String(seconds) : "0" + seconds
        }`
      );
 
      if (diff < 0) {
        setShowCloseBtn(true)
        // this.resendEnabled = true;
        // this.message = "OTP expired! Click resend";
        clearInterval(update);
        setIsResendButtonEnabled(true);
        setOtpErrorMessage("");
        setTimer("00 : 00");
      } else {
        setShowCloseBtn(false)
      }
    }, 1000);
 
    return () => {
      clearInterval(update);
    };
  }, [otpTimerToggle]);


  // function handleCloseOtpPopup() {
  //   setEdit(false);
  //   otp(false);
  //   setAllPopupState(false);
  // }

 
  const focusNext = (index, event) => {
    const value = event.target.value;
 
    // Handle backspace
    if (event.key === "Backspace" && index > 0 && value === "") {
      inputRefs[index - 1].current.focus();
      inputRefs[index - 1].current.value = ""; // Clear the value of the previous field
    } else if (value !== "" && index < 3) {
      // Move to the next field
      inputRefs[index + 1].current.focus();
    }
  };
 
  const handleSubmitOtp = async () => {

    let fullotp = inputRefs.map((input) => input.current.value).join("");
    // console.log(fullotp, props.completeData, "..............", fullotp);


    if(fullotp.toString().length === 4) {

      const {firstName, secondName, email, dob, gender, country, phone, reference, languages, specialRemarks, ref_id } = props.completeData;

      const otpIncludedData = {
        first_name: firstName,
        last_name: secondName,
        email: email,
        DOB: dob,
        gender: gender,
        country: country,
        phone: String(phone),
        reference: reference,
        languages: languages,
        remark: specialRemarks,
        OTP: fullotp,
        ref_id: ref_id ? ref_id : 0
      }
    
      console.log(otpIncludedData);

      if(otpIncludedData) {
        try {
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/verify_otp`, otpIncludedData);
          if(response.data.message) {
            console.log(response);
            props.setSuccessPageData(response.data.data);
            // localStorage.setItem("regUserDetails", response.data.data);
            props.setIsSuccessCardOpen(true);
          }
          props.setIsOtpOpen(false);

        } catch (error) {
          console.log(error);
          inputRefs.forEach((input) => input.current.value = "");
          setOtpErrorMessage("Invalid OTP");
          setIsInvalidOtp(true);
        }
      }
    } else {
      setOtpErrorMessage("Please enter the OTP");
      setIsInvalidOtp(true);
    }
    

  };

  async function handleResendOtp() {
    setOtpErrorMessage("");
    setIsInvalidOtp(true);
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/registerUser`, props.completeData);
        if(response.data.message) {
          setOtpTimerToggle(!otpTimerToggle);
        }     
      } catch (error) {
        console.log(error);
      }
  }
 

  return (
    <div className='w-screen h-screen fixed top-0 left-0 backdrop-blur-[3px] flex justify-center items-center poppins-font'>
        <div className='w-[90%] sm:w-[500px] max-w-[500px] h-[280px] pb-5 rounded-2xl bg-white popup-button-shadow'>
            <div className='w-full h-1/4 bg-gradient-to-b from-[#414141] to-[#000000] rounded-t-2xl flex justify-center items-center relative'>
                <p className='text-white font-semibold text-base sm:text-lg'>Enter your OTP</p>
                {
                    showCloseBtn && 
                    <button 
                      className='absolute top-4 right-4 rotate-45 text-4xl text-white'
                      onClick={() => {
                        props.setIsOtpOpen(false);
                      }}
                    >+</button>
                }
            </div>
            <div className='w-full h-1/2 flex flex-col justify-center items-center gap-0'>
                <div className='w-full pt-2 flex justify-center gap-8'>
                {Array.from({ length: 4 }, (_, index) => (
                    <input
                      key={index}
                      ref={inputRefs[index]}
                      className={"text-center size-10 border-2 border-black rounded-lg"}
                      maxLength="1"
                      onChange={(event) => focusNext(index, event)}
                      onKeyDown={(event) => focusNext(index, event)}
                      type="tel"
                      // style={{ border: otpstatus ? "2px solid red" : "2px solid black", textAlign: "center" }}
                    />
                ))}
                </div>
                <span className='mt-4 text-green-600 font-semibold text-sm sm:text-base'>{ timer }</span>
                {
                  isInvalidOtp && <span className='mt-2 text-xs sm:text-sm text-[#FF0000]'>{ otpErrorMessage }</span>
                }
            </div>
            <div className='w-full h-1/4 flex justify-around items-center'>
                <button 
                  className={isResendButtonEnabled ? 'w-20 sm:w-24 py-2 text-white font-semibold text-xs sm:text-sm bg-gradient-to-b from-[#5A5A5A] to-[#000000] hover:to-[#000000bc] rounded-xl popup-button-shadow'
                                          :
                                          'cursor-not-allowed w-20 sm:w-24 py-2 text-white font-semibold text-xs sm:text-sm bg-gradient-to-b from-[#5A5A5A] to-[#000000] hover:to-[#000000bc] rounded-xl popup-button-shadow'
                            }
                  disabled={!isResendButtonEnabled}
                  onClick={handleResendOtp}
                >
                  Resend
                </button>
                <button 
                  className='w-20 sm:w-24 py-2 text-black font-semibold text-xs sm:text-sm bg-gradient-to-b from-[#fff] to-[#cdc9c9] hover:to-[#cdc9c977] rounded-xl popup-button-shadow'
                  onClick={handleSubmitOtp}
                >
                  Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default OtpPopUp