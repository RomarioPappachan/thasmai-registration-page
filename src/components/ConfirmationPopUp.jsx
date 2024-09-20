// import React from 'react'

// function ConfirmationPopUp() {
//   return (
//     <div className='w-screen h-screen fixed top-0 left-0 backdrop-blur-[3px] flex justify-center items-center'>
//         <div className='w-[500px] h-[280px] pb-5 rounded-2xl bg-white popup-button-shadow'>
//             <div className='w-full h-1/4 bg-gradient-to-b from-[#414141] to-[#000000] rounded-t-2xl flex justify-center items-center'>
//                 <p className='text-white font-semibold'>Confirm your Email & Phone number?</p>
//             </div>
//             <div className='w-full h-1/2 flex flex-col justify-center items-center gap-0'>
//                 <span className='text-black font-semibold'>+91 83676352748868</span>
//                 <span className='text-[#FA2929] font-semibold'>&</span>
//                 <span className='text-black font-semibold'>jasmin@gmail.com</span>
//                 <span className='mt-4 text-sm text-black'>Press edit to make changes</span>
//             </div>
//             <div className='w-full h-1/4 flex justify-around items-center'>
//                 <button className='w-24 py-2 text-black font-semibold bg-gradient-to-b from-[#fff] to-[#cdc9c9] hover:to-[#cdc9c977] rounded-2xl popup-button-shadow'>OK</button>
//                 <button className='w-24 py-2 text-white font-semibold bg-gradient-to-b from-[#5A5A5A] to-[#000000] hover:to-[#000000bc] rounded-2xl popup-button-shadow'>Edit</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ConfirmationPopUp

import React from 'react'
import axios from 'axios';

function ConfirmationPopUp({completeData, setIsConfirmationOpen, setIsUserStatusOpen, setIsOtpOpen, setUserStatusErrorMessage}) {
  
  const { email, phone, country} = completeData;

  async function handleSubmit () {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/registerUser`, {
        email : email,
        phone : String(phone),
        country : country
      });
      if(response.data) {
        setIsUserStatusOpen(false);
        setIsOtpOpen(true); //open otp popup
        setIsConfirmationOpen(false);
      }

    } catch (error) {
      console.log(error);
      if(error.response.data) {
        setIsOtpOpen(false); 
        setUserStatusErrorMessage({
          flag : `${error.response.data.flag}`,
          message : `${error.response.data.message}`,
        })
        setIsUserStatusOpen(true);
        setIsConfirmationOpen(false);

      }
    
    }
  }
  return (
    <div className='w-screen h-screen fixed top-0 left-0 backdrop-blur-[3px] flex justify-center items-center'>
        <div className='w-[90%] sm:w-[500px] max-w-[500px] h-[280px] pb-5 rounded-2xl bg-white popup-button-shadow'>
            <div className='w-full h-1/4 bg-gradient-to-b from-[#414141] to-[#000000] rounded-t-2xl flex justify-center items-center'>
                <p className='text-white font-semibold text-base sm:text-lg'>Confirm your Email & Phone number?</p>
            </div>
            <div className='w-full h-1/2 flex flex-col justify-center items-center gap-0'>
                <span className='text-black font-semibold text-sm sm:text-base'>{ email }</span>
                <span className='text-[#FA2929] font-semibold text-sm sm:text-base'>&</span>
                <span className='text-black font-semibold text-sm sm:text-base'>{ phone }</span>
                <span className='mt-4 text-xs sm:text-sm text-black'>Press edit to make changes</span>
            </div>
            <div className='w-full h-1/4 flex justify-around items-center'>
                <button 
                  className='w-20 sm:w-24 py-2 text-white font-semibold text-xs sm:text-sm bg-gradient-to-b from-[#5A5A5A] to-[#000000] hover:to-[#000000bc] rounded-2xl popup-button-shadow'
                  onClick={() => setIsConfirmationOpen(false)}
                >
                  Edit
                </button>
                <button 
                  className='w-20 sm:w-24 py-2 text-black font-semibold text-xs sm:text-sm bg-gradient-to-b from-[#fff] to-[#cdc9c9] hover:to-[#cdc9c977] rounded-2xl popup-button-shadow'
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  OK
                </button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationPopUp
