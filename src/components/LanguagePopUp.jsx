// import React from 'react'

// function LanguagePopUp() {
//   return (
//     <div className="w-screen h-screen fixed top-0 left-0  bg-[#0000009c] flex justify-center items-center">
//         <div className="w-[1000px] h-[600px]  bg-white px-20 py-16">
//             <h1 className='text-[#211B12] text-3xl font-medium py-1 border-b-[1px] border-[#D6C4AE]'>Select a Language</h1>
//             {/* Language section main div */}
//             <div className='py-10 grid grid-cols-4 gap-x-14 gap-y-8'>

//                 {/* English  */}
//                 <div className='w-36 flex flex-col justify-center items-center'>
//                     <div className='w-28 h-28 rounded-full bg-gradient-to-b from-[#BA1A1A] to-[#540c0c] flex justify-center items-center'>
//                         <div className='size-24 rounded-full bg-white flex justify-center items-center'>
//                            <span className='text-5xl text-[#372F26]'>E</span>
//                         </div>
//                     </div>
//                     <p className='py-2 text-2xl text-[#514534] text-center'>English</p>
//                 </div>

//                 {/* Kannada  */}
//                 <div className='w-36 flex flex-col justify-center items-center'>
//                     <div className='w-28 h-28 rounded-full bg-gradient-to-b from-[#4584DD] to-[#254777] flex justify-center items-center'>
//                         <div className='size-24 rounded-full bg-white flex justify-center items-center'>
//                            <span className='text-5xl text-[#372F26]'>ಕ</span>
//                         </div>
//                     </div>
//                     <p className='py-2 text-2xl text-[#514534] text-center'>ಕನ್ನಡ</p>
//                 </div>

//                 {/* Malayalam  */}
//                 <div className='w-36 flex flex-col justify-center items-center'>
//                     <div className='w-28 h-28 rounded-full bg-gradient-to-b from-[#B2C649] to-[#566023] flex justify-center items-center'>
//                         <div className='size-24 rounded-full bg-white flex justify-center items-center'>
//                            <span className='text-5xl text-[#372F26]'>മ</span>
//                         </div>
//                     </div>
//                     <p className='py-2 text-2xl text-[#514534] text-center'>മലയാളം</p>
//                 </div>

//                 {/* Hindi  */}
//                 <div className='w-36 flex flex-col justify-center items-center'>
//                     <div className='w-28 h-28 rounded-full bg-gradient-to-b from-[#F8AD2B] to-[#926619] flex justify-center items-center'>
//                         <div className='size-24 rounded-full bg-white flex justify-center items-center'>
//                            <span className='text-5xl text-[#372F26]'>हि</span>
//                         </div>
//                     </div>
//                     <p className='py-2 text-2xl text-[#514534] text-center'>हिन्दी</p>
//                 </div>

//                 {/* Telugu  */}
//                 <div className='w-36 flex flex-col justify-center items-center col-start-2'>
//                     <div className='w-28 h-28 rounded-full bg-gradient-to-b from-[#B583C2] to-[#563E5C] flex justify-center items-center'>
//                         <div className='size-24 rounded-full bg-white flex justify-center items-center'>
//                            <span className='text-5xl text-[#372F26]'>తె</span>
//                         </div>
//                     </div>
//                     <p className='py-2 text-2xl text-[#514534] text-center'>తెలుగు</p>
//                 </div>

//                 {/* Tamil  */}
//                 <div className='w-36 flex flex-col justify-center items-center'>
//                     <div className='w-28 h-28 rounded-full bg-gradient-to-b from-[#815600] to-[#1B1200] flex justify-center items-center'>
//                         <div className='size-24 rounded-full bg-white flex justify-center items-center'>
//                            <span className='text-5xl text-[#372F26]'>த</span>
//                         </div>
//                     </div>
//                     <p className='py-2 text-2xl text-[#514534] text-center'>தமிழ்</p>
//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default LanguagePopUp



import React, { useState } from 'react';

function LanguagePopUp() {

    const [selectedAudioLanguage, setSelectedAudioLanguage] =  useState("");
    console.log(selectedAudioLanguage);
    
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-[#0000009c] flex justify-center items-center px-3 py-5 overflow-y-auto">
      {/* Adjusting container styles for different breakpoints */}
      <div className="w-full max-w-3xl lg:max-w-[1000px] h-auto lg:h-[600px] bg-white px-8 md:px-16 lg:px-20 py-8 md:py-12 lg:py-16">
        <h1 className="text-[#211B12] text-2xl md:text-3xl font-medium py-1 border-b-[1px] border-[#D6C4AE]">
          Select a Language
        </h1>
        {/* Adjusting grid layout for different breakpoints */}
        <div className="py-6 md:py-8 lg:py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-10 lg:gap-x-14 gap-y-6 md:gap-y-8 lg:gap-y-8">
          
          {/* English */}
          <div className="w-36 flex flex-col justify-center items-center cursor-pointer" onClick={() => {
            setSelectedAudioLanguage("English");
            localStorage.removeItem("selectedLanguage");
            localStorage.setItem("selectedLanguage", "English");
            window.location.href = "/register";
          }}>
            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-[#BA1A1A] to-[#540c0c] flex justify-center items-center">
              <div className="size-24 rounded-full bg-white flex justify-center items-center hover:bg-slate-200">
                <span className="text-5xl text-[#372F26]">E</span>
              </div>
            </div>
            <p className="py-2 text-2xl text-[#514534] text-center">English</p>
          </div>

          {/* Kannada */}
          <div className="w-36 flex flex-col justify-center items-center cursor-pointer" onClick={() => {
            setSelectedAudioLanguage("Kannada");
            localStorage.removeItem("selectedLanguage");
            localStorage.setItem("selectedLanguage", "Kannada");
            window.location.href = "/register";
          }}>
            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-[#4584DD] to-[#254777] flex justify-center items-center">
              <div className="size-24 rounded-full bg-white flex justify-center items-center hover:bg-slate-200">
                <span className="text-5xl text-[#372F26]">ಕ</span>
              </div>
            </div>
            <p className="py-2 text-2xl text-[#514534] text-center">ಕನ್ನಡ</p>
          </div>

          {/* Malayalam */}
          <div className="w-36 flex flex-col justify-center items-center cursor-pointer" onClick={() => {
            setSelectedAudioLanguage("Malayalam");
            localStorage.removeItem("selectedLanguage");
            localStorage.setItem("selectedLanguage", "Malayalam");
            window.location.href = "/register";
          }}>
            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-[#B2C649] to-[#566023] flex justify-center items-center">
              <div className="size-24 rounded-full bg-white flex justify-center items-center hover:bg-slate-200">
                <span className="text-5xl text-[#372F26]">മ</span>
              </div>
            </div>
            <p className="py-2 text-2xl text-[#514534] text-center">മലയാളം</p>
          </div>

          {/* Hindi */}
          <div className="w-36 flex flex-col justify-center items-center cursor-pointer" onClick={() => {
            setSelectedAudioLanguage("Hindi");
            localStorage.removeItem("selectedLanguage");
            localStorage.setItem("selectedLanguage", "Hindi");
            window.location.href = "/register";
          }}>
            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-[#F8AD2B] to-[#926619] flex justify-center items-center">
              <div className="size-24 rounded-full bg-white flex justify-center items-center hover:bg-slate-200">
                <span className="text-5xl text-[#372F26]">हि</span>
              </div>
            </div>
            <p className="py-2 text-2xl text-[#514534] text-center">हिन्दी</p>
          </div>

          {/* Telugu */}
          <div className="w-36 flex flex-col justify-center items-center md:col-start-2 cursor-pointer" onClick={() => {
            setSelectedAudioLanguage("Telugu");
            localStorage.removeItem("selectedLanguage");
            localStorage.setItem("selectedLanguage", "Telugu");
            window.location.href = "/register";
          }}>
            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-[#B583C2] to-[#563E5C] flex justify-center items-center">
              <div className="size-24 rounded-full bg-white flex justify-center items-center hover:bg-slate-200">
                <span className="text-5xl text-[#372F26]">తె</span>
              </div>
            </div>
            <p className="py-2 text-2xl text-[#514534] text-center">తెలుగు</p>
          </div>

          {/* Tamil */}
          <div className="w-36 flex flex-col justify-center items-center cursor-pointer" onClick={() => {
            setSelectedAudioLanguage("Tamil");
            localStorage.removeItem("selectedLanguage");
            localStorage.setItem("selectedLanguage", "Tamil");
            window.location.href = "/register";
          }}>
            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-[#815600] to-[#1B1200] flex justify-center items-center">
              <div className="size-24 rounded-full bg-white flex justify-center items-center hover:bg-slate-200">
                <span className="text-5xl text-[#372F26]">த</span>
              </div>
            </div>
            <p className="py-2 text-2xl text-[#514534] text-center">தமிழ்</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguagePopUp;
