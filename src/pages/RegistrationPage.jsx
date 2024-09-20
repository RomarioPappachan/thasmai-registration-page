// // import React from 'react'

// import axios from "axios";
// import AudioPlay from "../components/AudioPlayer";
// import Footer from "../components/Footer";
// import DobSelector from "../components/DobSelector";
// import { useState, useEffect, useRef } from "react";
// import ConfirmationPopUp from "../components/ConfirmationPopUp";
// import OtpPopUp from "../components/OtpPopUp";
// import UserStatusPopUp from "../components/UserStatusPopUp";
// import SuccessCard from "../components/SuccessCard";

// function RegistrationPage() {

//   const defaultCountryId = 151;
//   const countryRef = useRef("");
//   const [isTextAreaExpanded, setIsTextAreaExpanded] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [countries, setCountries] = useState([]);
//   const [selectedCountryId, setSelectedCountryId] = useState(defaultCountryId);
//   const [selectedCountryFlag, setSelectedCountryFlag] = useState("");
//   const [selectedCountryPhonecode, setSelectedCountryPhonecode] = useState("");


//   useEffect(() => {
//     try {
      
//       let refId = window.localStorage.getItem("refferalId");
//       setSelectedLanguage(localStorage.getItem("selectedLanguage"));
//       console.log("Referral Id", refId, selectedLanguage);
      
//     } catch (error) {
//       console.log(error);
//     }
//   }, [selectedLanguage]);


//   useEffect(() => {
//     console.log(window.history, "back button");

//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}/user/countrieslist`
//         );
//         console.log(response.data, "res");
//         setCountries(response.data);

//         // Find the index of India in the countries array
//         const indiaIndex = response.data.findIndex(
//           (country) => country.id === defaultCountryId
//         );

//         // Set India as the default country
//         const defaultCountry = response.data[indiaIndex];
//         setSelectedCountryId(defaultCountryId);
//         setSelectedCountryFlag(defaultCountry ? defaultCountry.flag : "");
//         setSelectedCountryPhonecode(
//           defaultCountry ? defaultCountry.phonecode : ""
//         );

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching countries:", error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();

//     return () => {
//       // clearInterval(socketInterval)
//     };
//   }, [defaultCountryId]);

//   return (
//     <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-12  overflow-x-hidden">
//       <div className="registration-hero-image h-[28vh] sm:h-[45vh] lg:h-full lg:col-span-4"></div>

//       <div className="h-full lg:col-span-8">
//         <div className="w-full relative top-0 left-0">
//           <AudioPlay />
//         </div>

//         {/* Registration form  */}
//         <div className="py-5 px-1 background-mountain overflow-y-auto">
//           <h1 className="text-center text-2xl font-semibold">
//             Satyam vada | Dharmam chara
//           </h1>
//           <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 px-2 md:px-10 lg:px-20 py-6">
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First name*"
//                 className="bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-black placeholder:font-semibold"
//               />
//               {/* <div className="relative h-full w-full">
//                 <input
//                   type="text"
//                   name="firstName"
//                   // placeholder="First name"
//                   className="bg-white w-full h-full px-4 rounded-lg outline-none placeholder:text-black placeholder:text-xl placeholder:font-semibold"
//                 />
//                 <label className="absolute top-1/2 left-4 transform -translate-y-1/2 pointer-events-none text-black text-xl font-semibold">
//                   First name<span className="text-[#BA1A1A]">*</span>
//                 </label>
//               </div> */}
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                 Please enter your first name
//               </span>
//             </div>
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <input
//                 type="text"
//                 name="secondName"
//                 placeholder="Last name*"
//                 className="bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-black placeholder:font-semibold"
//               />
//               {/* <div className="relative h-full w-full">
//                 <input
//                   type="text"
//                   name="lastName"
//                   // placeholder="Last name"
//                   className="bg-white w-full h-full px-4 rounded-lg outline-none placeholder:text-black placeholder:text-xl placeholder:font-semibold"
//                 />
//                 <label className="absolute top-1/2 left-4 transform -translate-y-1/2 pointer-events-none text-black text-xl font-semibold">
//                   Last name<span className="text-[#BA1A1A]">*</span>
//                 </label>
//               </div> */}
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                 Please enter your last name
//               </span>
//             </div>
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email*"
//                 className="bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-black placeholder:font-semibold"
//               />
//               {/* <div className="relative h-full w-full">
//                 <input
//                   type="email"
//                   name="email"
//                   // placeholder="Email*"
//                   className="bg-white w-full h-full px-4 rounded-lg outline-none placeholder:text-black placeholder:text-xl placeholder:font-semibold"
//                 />
//                 <label className="absolute top-1/2 left-4 transform -translate-y-1/2 pointer-events-none text-black text-xl font-semibold">
//                   Email<span className="text-[#BA1A1A]">*</span>
//                 </label>
//               </div> */}
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                 Please enter your email
//               </span>
//             </div>
//             <div className="h-12 rounded-lg form-input-drop-shadow flex justify-between items-center">
//               <div className="w-3/4 text-left">
//                 <DobSelector />
//               </div>
//               <div className="w-1/4 flex ">
//                 <div className="w-1/2 flex flex-col justify-center items-center gap-y-1">
//                   <img src="/man.png" alt="" className="w-8" />
//                   <input type="radio" name="gender" value="male" id="" />
//                 </div>
//                 <div className="w-1/2 flex flex-col justify-center items-center gap-y-1">
//                   <img src="/female.png" alt="" className="w-8" />
//                   <input type="radio" name="gender" value="female" id="" />
//                 </div>
//               </div>
//             </div>
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <select 
//                 className="w-full h-full bg-white text-lg text-black font-semibold rounded-lg px-4 outline-none" 
//                 id=""
//                 ref={countryRef}
//               >
//                 <option value="" disabled>{ loading ? "Loading countries" : "Select a country"}</option>
//                 {
//                   countries.map((country) => (
//                     <option key={ country.id } value={ country.id }>{ country.name }</option>
//                   ))
//                 }
//               </select>
//             </div>
//             <div className="h-12 relative rounded-lg flex justify-center items-center gap-x-6">
//               <div className="w-[20%] h-full flex justify-center items-center bg-white rounded-lg form-input-drop-shadow">
//                 <img src={selectedCountryFlag} alt="" className="w-10 border-[0.5px] border-[#d9d9e3]" />
//               </div>
//               <div className="w-[80%] h-full flex justify-center items-center rounded-lg bg-white form-input-drop-shadow relative">
//                 <div className="w-1/4 h-full flex justify-center items-center rounded-l-lg text-lg border-r-2 border-gray-100">{ selectedCountryPhonecode }</div>
//                 <div className="w-3/4 h-full flex justify-center items-center rounded-r-lg">
//                   <input 
//                     className="w-full h-full ps-2 outline-none rounded-r-lg text-lg placeholder:text-black placeholder:font-semibold"
//                     type="tel" 
//                     name="phone" 
//                     id="" 
//                     pattern="\d{7, 13}"
//                     placeholder="Mobile no.*"
//                   />
//                 </div>
//                 <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                     Please enter your mobile number
//                 </span>
//               </div>
//             </div>
//             <div className="h-12 relative rounded-lg bg-white form-input-drop-shadow flex justify-around items-center gap-1">
//                 <div className="h-full flex justify-center items-center">
//                   <img src="/magnifier.svg" alt="" className="size-6" />
//                 </div>
//                 <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
//                   Social media
//                   <input type="radio" name="reference" value="social_media" id="" />
//                 </div>
//                 <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
//                   Reference
//                   <input type="radio" name="reference" value="reference" id="" />
//                 </div>
//                 <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
//                   News
//                   <input type="radio" name="reference" value="news" id="" />
//                 </div>
//                 <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
//                   Others
//                   <input type="radio" name="reference" value="others" id="" />
//                 </div>
//             </div>
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <select 
//                 className="w-full h-full bg-white text-lg text-black font-semibold rounded-lg px-4 outline-none text-wrap" 
//                 id=""
//                 name="selectedLanguages"
//               >
//                 <option value="" selected disabled>Preferred Language for Online Zoom class*</option>
//                 <option value="English">English</option>
//                 <option value="Hindi">Hindi</option>
//                 <option value="Kannada">Kannada</option>
//                 <option value="Malayalam">Malayalam</option>
//                 <option value="Tamil">Tamil</option>
//                 <option value="Telugu">Telugu</option>
//               </select>
//             </div>
//             <div className="min-h-12 sm:col-span-2 bg-white rounded-lg form-input-drop-shadow relative">
//               <textarea 
//                 name="specialRemarks" 
//                 id=""
//                 placeholder="Special remarks"
//                 className="w-full h-full px-4 p-2 text-lg rounded-lg bg-white text-black  outline-none placeholder:text-black placeholder:font-semibold"
//                 rows={isTextAreaExpanded ? 4 : 1}
//                 onClick={() => {setIsTextAreaExpanded(true)}}
//                 maxLength={500}
//               >

//               </textarea>
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-[#2f3542] font-semibold text-sm text-right">
//                  0/500
//               </span>
//             </div>

//             <span className="w-full p-2 bg-[hsla(0,0%,100%,0.752)] sm:col-span-2 rounded-md form-input-drop-shadow flex items-center gap-2">
//                 <input type="checkbox" name="privacyCheck" id="" className="size-5" />
//                 <span className="text-base text-black text-left">
//                   I have read and agreed to Thasmai Starlife's {""}
//                   <a href="/privacyPolicy" className="text-blue-600" target="_blank">Privacy Policy</a>
//                 </span>
//             </span>


//             <div className="h-12 sm:col-span-2">
//                 <button className="w-full h-full bg-gradient-to-b from-[#434242] to-[#000000] hover:to-[#434242] hover:from-[#000000] text-white text-lg font-semibold rounded-lg">Submit</button>
//             </div>


//           </div>

//           {/* Footer Section */}
//           <Footer />
//         </div>
//       </div>


//       {/* <ConfirmationPopUp/> */}

//       {/* <OtpPopUp/> */}

//       {/* <UserStatusPopUp/> */}
//       {/* <SuccessCard/> */}
//     </div>
//   );
// }

// export default RegistrationPage;




// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import AudioPlay from "../components/AudioPlayer";
// import Footer from "../components/Footer";
// import DobSelector from "../components/DobSelector";
// import ConfirmationPopUp from "../components/ConfirmationPopUp";
// import OtpPopUp from "../components/OtpPopUp";
// import UserStatusPopUp from "../components/UserStatusPopUp";
// import SuccessCard from "../components/SuccessCard";

// function RegistrationPage() {
//   const defaultCountryId = 151;
//   const countryRef = useRef("");
//   const [isTextAreaExpanded, setIsTextAreaExpanded] = useState(false);

//   const [selectedAudioLanguage, setSelectedAudioLanguage] = useState("");
//   const [loading, setLoading] = useState(true);

//   const [countries, setCountries] = useState([]);
//   const [selectedCountryId, setSelectedCountryId] = useState(defaultCountryId);
//   const [selectedCountryFlag, setSelectedCountryFlag] = useState("");
//   const [selectedCountryPhonecode, setSelectedCountryPhonecode] = useState("");

//   useEffect(() => {
//     try {
//       let refId = window.localStorage.getItem("refferalId");
//       setSelectedAudioLanguage(localStorage.getItem("selectedAudioLanguage"));
//       console.log("Referral Id", refId, selectedAudioLanguage);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [selectedAudioLanguage]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}/user/countrieslist`
//         );
//         console.log(response.data, "res");
//         setCountries(response.data);

//         // Set default country details
//         const defaultCountry = response.data.find(
//           (country) => country.id === defaultCountryId
//         );
//         if (defaultCountry) {
//           setSelectedCountryId(defaultCountryId);
//           setSelectedCountryFlag(defaultCountry.flag);
//           setSelectedCountryPhonecode(defaultCountry.phonecode);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching countries:", error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();

//     return () => {
//       // Cleanup code if needed
//     };
//   }, [defaultCountryId]);

//   const handleCountryChange = (event) => {
//     const selectedId = parseInt(event.target.value);
//     const selectedCountry = countries.find(
//       (country) => country.id === selectedId
//     );
//     if (selectedCountry) {
//       setSelectedCountryId(selectedId);
//       setSelectedCountryFlag(selectedCountry.flag);
//       setSelectedCountryPhonecode(selectedCountry.phonecode);
//     }
//   };

//   return (
//     <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-12 overflow-x-hidden">
//       <div className="registration-hero-image h-[28vh] sm:h-[45vh] lg:h-full lg:col-span-4"></div>

//       <div className="h-full lg:col-span-8">
//         <div className="w-full relative top-0 left-0">
//           <AudioPlay />
//         </div>

//         {/* Registration form */}
//         <div className="py-5 px-1 background-mountain overflow-y-auto">
//           <h1 className="text-center text-2xl font-semibold">
//             Satyam vada | Dharmam chara
//           </h1>
//           <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 px-2 md:px-10 lg:px-20 py-6">
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First name*"
//                 className="bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-black placeholder:font-semibold"
//               />
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                 Please enter your first name
//               </span>
//             </div>
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <input
//                 type="text"
//                 name="secondName"
//                 placeholder="Last name*"
//                 className="bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-black placeholder:font-semibold"
//               />
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                 Please enter your last name
//               </span>
//             </div>
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email*"
//                 className="bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-black placeholder:font-semibold"
//               />
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                 Please enter your email
//               </span>
//             </div>
//             <div className="h-12 rounded-lg form-input-drop-shadow flex justify-between items-center">
//               <div className="w-3/4 text-left">
//                 <DobSelector />
//               </div>
//               <div className="w-1/4 flex">
//                 <div className="w-1/2 flex flex-col justify-center items-center gap-y-1">
//                   <img src="/man.png" alt="" className="w-8" />
//                   <input type="radio" name="gender" value="male" />
//                 </div>
//                 <div className="w-1/2 flex flex-col justify-center items-center gap-y-1">
//                   <img src="/female.png" alt="" className="w-8" />
//                   <input type="radio" name="gender" value="female" />
//                 </div>
//               </div>
//             </div>
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <select
//                 className="w-full h-full bg-white text-lg text-black font-semibold rounded-lg px-4 outline-none"
//                 onChange={handleCountryChange}
//                 ref={countryRef}
//                 value={selectedCountryId}
//               >
//                 <option value="" disabled>
//                   {loading ? "Loading countries" : "Select a country"}
//                 </option>
//                 {countries.map((country) => (
//                   <option key={country.id} value={country.id}>
//                     {country.name}
//                   </option>
//                 ))}
//               </select>
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                 Please select a country
//               </span>
//             </div>
//             <div className="h-12 relative rounded-lg flex justify-center items-center gap-x-6">
//               <div className="w-[20%] h-full flex justify-center items-center bg-white rounded-lg form-input-drop-shadow">
//                 {selectedCountryFlag && (
//                   <img
//                     src={selectedCountryFlag}
//                     alt="Country Flag"
//                     className="w-10 border-[0.5px] border-[#d9d9e3]"
//                   />
//                 )}
//               </div>
//               <div className="w-[80%] h-full flex justify-center items-center rounded-lg bg-white form-input-drop-shadow relative">
//                 <div className="w-1/4 h-full flex justify-center items-center rounded-l-lg text-lg border-r-2 border-gray-100">
//                   {selectedCountryPhonecode}
//                 </div>
//                 <div className="w-3/4 h-full flex justify-center items-center rounded-r-lg">
//                   <input
//                     className="w-full h-full ps-2 outline-none rounded-r-lg text-lg placeholder:text-black placeholder:font-semibold"
//                     type="tel"
//                     name="phone"
//                     placeholder="Mobile no.*"
//                     pattern="\d{7,13}"
//                   />
//                 </div>
//                 <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                   Please enter your mobile number
//                 </span>
//               </div>
//             </div>
//             <div className="h-12 relative rounded-lg bg-white form-input-drop-shadow flex justify-around items-center gap-1">
//               <div className="h-full flex justify-center items-center">
//                 <img src="/magnifier.svg" alt="" className="size-6" />
//               </div>
//               <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
//                 Social media
//                 <input type="radio" name="reference" value="social_media" />
//               </div>
//               <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
//                 Reference
//                 <input type="radio" name="reference" value="reference" />
//               </div>
//               <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
//                 News
//                 <input type="radio" name="reference" value="news" />
//               </div>
//               <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
//                 Others
//                 <input type="radio" name="reference" value="others" />
//               </div>
//             </div>
//             <div className="h-12 relative rounded-lg form-input-drop-shadow">
//               <select
//                 className="w-full h-full bg-white text-lg text-black font-semibold rounded-lg px-4 outline-none text-wrap"
//                 name="selectedLanguages"
//               >
//                 <option value="" disabled>
//                   Preferred Language for Online Zoom class*
//                 </option>
//                 <option value="English">English</option>
//                 <option value="Hindi">Hindi</option>
//                 <option value="Kannada">Kannada</option>
//                 <option value="Malayalam">Malayalam</option>
//                 <option value="Tamil">Tamil</option>
//                 <option value="Telugu">Telugu</option>
//               </select>
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
//                 Please select alanguage
//               </span>
//             </div>
//             <div className="min-h-12 sm:col-span-2 bg-white rounded-lg form-input-drop-shadow relative">
//               <textarea
//                 name="specialRemarks"
//                 placeholder="Special remarks"
//                 className="w-full h-full px-4 p-2 text-lg rounded-lg bg-white text-black outline-none placeholder:text-black placeholder:font-semibold"
//                 rows={isTextAreaExpanded ? 4 : 1}
//                 onClick={() => setIsTextAreaExpanded(true)}
//                 maxLength={500}
//               ></textarea>
//               <span className="w-full absolute -bottom-5 left-0 h-6 text-[#2f3542] font-semibold text-sm text-right">
//                 0/500
//               </span>
//             </div>

//             <span className="w-full p-2 bg-[hsla(0,0%,100%,0.752)] sm:col-span-2 rounded-md form-input-drop-shadow flex items-center gap-2">
//               <input type="checkbox" name="privacyCheck" className="size-5" />
//               <span className="text-base text-black text-left">
//                 I have read and agreed to Thasmai Starlife's{" "}
//                 <a href="/privacyPolicy" className="text-blue-600" target="_blank">
//                   Privacy Policy
//                 </a>
//               </span>
//             </span>

//             <div className="h-12 sm:col-span-2">
//               <button className="w-full h-full bg-gradient-to-b from-[#434242] to-[#000000] hover:to-[#434242] hover:from-[#000000] text-white text-lg font-semibold rounded-lg">
//                 Submit
//               </button>
//             </div>
//           </div>

//           {/* Footer Section */}
//           <Footer />
//         </div>
//       </div>

//       {/* <ConfirmationPopUp/> */}
//       {/* <OtpPopUp/> */}
//       {/* <UserStatusPopUp/> */}
//       {/* <SuccessCard/> */}
//     </div>
//   );
// }

// export default RegistrationPage;


import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AudioPlay from "../components/AudioPlayer";
import Footer from "../components/Footer";
import DobSelector from "../components/DobSelector";
import ConfirmationPopUp from "../components/ConfirmationPopUp";
import OtpPopUp from "../components/OtpPopUp";
import UserStatusPopUp from "../components/UserStatusPopUp";
import SuccessCard from "../components/SuccessCard";

// Validation schema
const schema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-z. ]+$/, "Name must not contain special characters."),
  secondName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-z. ]+$/, "Name must not contain special characters."),
  email: yup
    .string()
    .required("Email is required")
    .email("Email is not valid"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{7,13}$/, "Phone number must be between 7 and 13 digits."),
  selectedLanguages: yup
    .string()
    .required("Preferred language is required"),
  privacyCheck: yup
    .boolean()
    .oneOf([true], "You must accept the privacy policy")
    .required("Privacy policy must be accepted"),
});

function RegistrationPage() {

  const [referralId, setReferralId] = useState("");
  const defaultCountryId = 151;
  // const countryRef = useRef("");
  const [isTextAreaExpanded, setIsTextAreaExpanded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState(defaultCountryId);
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [selectedCountryFlag, setSelectedCountryFlag] = useState("");
  const [selectedCountryPhonecode, setSelectedCountryPhonecode] = useState("");
  const [nonValidatedData, setNonValidatedData] = useState({
    dob: "",
    gender: "",
    reference: "",
    specialRemarks: "",
  })
  const [completeData, setCompleteData] = useState({});
  const [userEmailToSend, setUserEmailToSend] = useState("");

  // popup states 
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isUserStatusOpen, setIsUserStatusOpen] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [isSuccessCardOpen, setIsSuccessCardOpen] = useState(false);

  const[userStatusErrorMessage, setUserStatusErrorMessage] = useState({
    flag : "",
    message : "",
  });

  const [successPageData, setSuccessPageData] = useState({});

  function handleNonValidatedData(e) {
    const { name, value } = e.target;
    setNonValidatedData((prevValue) => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  function handleDateOfBirth(value) {
    setNonValidatedData((prevValue) => {
      return {
        ...prevValue,
        dob : value
      }
    })
  }

  

  // Initialize react-hook-form
  const { control, handleSubmit, register, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
    const {firstName, secondName, email, country, phone, selectedLanguages, privacyCheck } = data;

    setUserEmailToSend(email); //to send email at the time of success card loading

    // Merge validated DataTransfer, non validated datas and referral Id 
    const mergedData = {
      firstName : firstName,
      secondName: secondName,
      email : email,
      phone : phone,
      languages : selectedLanguages, // store in an array
      country : selectedCountryName,
      // country_code : selectedCountryPhonecode,
      ...nonValidatedData,
      ref_id : referralId
    }
    console.log(mergedData);

    setCompleteData(mergedData); //Merged data

    if(mergedData) {
      setIsConfirmationOpen(true);
    }
  };




  useEffect(() => {
    try {
      let refId = window.localStorage.getItem("refferalId");
      setSelectedLanguage(localStorage.getItem("selectedLanguage"));
      setReferralId(refId);
      console.log("Referral Id", refId, selectedLanguage);
      
    } catch (error) {
      console.log(error);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/countrieslist`
        );
        console.log(response.data, "res");
        setCountries(response.data);

        // Set default country details
        const defaultCountry = response.data.find(
          (country) => country.id === defaultCountryId
        );
        if (defaultCountry) {
          setSelectedCountryId(defaultCountryId);
          setSelectedCountryName(defaultCountry.name);
          setSelectedCountryFlag(defaultCountry.flag);
          setSelectedCountryPhonecode(defaultCountry.phonecode);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup code if needed
    };
  }, [defaultCountryId]);

  const handleCountryChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const selectedCountry = countries.find(
      (country) => country.id === selectedId
    );
    if (selectedCountry) {
      setSelectedCountryId(selectedId);
      setSelectedCountryName(selectedCountry.name);
      setSelectedCountryFlag(selectedCountry.flag);
      setSelectedCountryPhonecode(selectedCountry.phonecode);
    }
  };

  return (
    <div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-12 overflow-x-hidden">
      <div className="registration-hero-image h-[28vh] sm:h-[45vh] lg:h-full lg:col-span-4"></div>
      <div className="h-full lg:col-span-8">
        <div className="w-full relative top-0 left-0">
          <AudioPlay />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="py-5 px-1 background-mountain overflow-y-auto">
          <h1 className="text-center text-2xl font-semibold">
            Satyam vada | Dharmam chara
          </h1>
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 px-2 md:px-10 lg:px-20 py-6">
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <input
                type="text"
                {...register("firstName")}
                placeholder="First name"
                className="bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-black placeholder:font-semibold"
              />
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">*</span>
              {errors.firstName && (
                <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <input
                type="text"
                {...register("secondName")}
                placeholder="Last name"
                className="bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-black placeholder:font-semibold"
              />
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">*</span>
              {errors.secondName && (
                <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
                  {errors.secondName.message}
                </span>
              )}
            </div>
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-black placeholder:font-semibold"
              />
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">*</span>
              {errors.email && (
                <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="h-12 rounded-lg  flex justify-between items-center">
              <div className="w-3/4 text-left h-12 rounded-lg form-input-drop-shadow">
                <DobSelector handleDateOfBirth={handleDateOfBirth} />
              </div>
              <div className="w-1/4 flex">
                <div className="w-1/2 flex flex-col justify-center items-center gap-y-1">
                  <img src="/male.png" alt="" className="w-8" />
                  <input type="radio" name="gender" value="male" onChange={handleNonValidatedData} />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center gap-y-1">
                  <img src="/female.png" alt="" className="w-8" />
                  <input type="radio" name="gender" value="female" onChange={handleNonValidatedData} />
                </div>
              </div>
            </div>
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <select
                {...register("country")}
                onChange={handleCountryChange}
                className="w-full h-full bg-white text-lg text-black font-semibold rounded-lg px-4 outline-none"
                // ref={countryRef}
                value={selectedCountryId}
              >
                <option value="" disabled>{ loading ? "Loading countries" : "Select a country"}</option>
                {
                  countries.map((country) => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))
                }
              </select>
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">*</span>
              {errors.country && (
                <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
                  {errors.country.message}
                </span>
              )}
            </div>
            <div className="h-12 relative rounded-lg flex justify-center items-center gap-x-6">
              <div className="w-[20%] h-full flex justify-center items-center bg-white rounded-lg form-input-drop-shadow">
                <img src={selectedCountryFlag} alt="" className="w-10 border-[0.5px] border-[#d9d9e3]" />
              </div>
              <div className="w-[80%] h-full flex justify-center items-center rounded-lg bg-white form-input-drop-shadow relative">
                <div className="w-1/4 h-full flex justify-center items-center rounded-l-lg text-lg border-r-2 border-gray-100">{selectedCountryPhonecode}</div>
                <div className="w-3/4 h-full flex justify-center items-center rounded-r-lg relative">
                  <input
                    className="w-full h-full ps-4 outline-none rounded-r-lg text-lg placeholder:text-black placeholder:font-semibold"
                    type="tel"
                    {...register("phone")}
                    placeholder="Mobile no."
                  />
                  <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">*</span>
                </div>
                {errors.phone && (
                  <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="h-12 relative rounded-lg bg-white form-input-drop-shadow flex justify-around items-center gap-1">
                <div className="h-full flex justify-center items-center">
                  <img src="/magnifier.svg" alt="" className="size-6" />
                </div>
                <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
                  Social media
                  <input type="radio" name="reference" value="social_media" id="" onChange={handleNonValidatedData} />
                </div>
                <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
                  Reference
                  <input type="radio" name="reference" value="reference" id="" onChange={handleNonValidatedData} />
                </div>
                <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
                  News
                  <input type="radio" name="reference" value="news" id="" onChange={handleNonValidatedData} />
                </div>
                <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
                  Others
                  <input type="radio" name="reference" value="others" id="" onChange={handleNonValidatedData} />
                </div>
            </div>
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <select
                {...register("selectedLanguages")}
                className="w-full h-full bg-white text-lg text-black font-semibold rounded-lg px-4 outline-none"
              >
                <option value="" selected disabled>Preferred Language for online zoom class</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Kannada">Kannada</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
              </select>
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">*</span>
              {errors.selectedLanguages && (
                <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
                  {errors.selectedLanguages.message}
                </span>
              )}
            </div>
            <div className="min-h-12 sm:col-span-2 bg-white rounded-lg form-input-drop-shadow relative">
              <textarea 
                name="specialRemarks"
                value={ nonValidatedData.specialRemarks }
                id=""
                placeholder="Special remarks"
                className="w-full h-full px-4 p-2 text-lg rounded-lg bg-white text-black  outline-none placeholder:text-black placeholder:font-semibold"
                rows={isTextAreaExpanded ? 4 : 1}
                onClick={() => {setIsTextAreaExpanded(true)}}
                maxLength={500}
                onChange={ handleNonValidatedData }
              >

              </textarea>
              <span className="w-full absolute -bottom-5 left-0 h-6 text-[#2f3542] font-semibold text-sm text-right">
                 0/500
              </span>
            </div>
            <span className="w-full p-2 bg-[hsla(0,0%,100%,0.752)] sm:col-span-2 rounded-md form-input-drop-shadow flex items-center gap-2">
              <input type="checkbox"   {...register("privacyCheck")} className="size-5" />
              <span className="text-base text-black text-left">
                I have read and agreed to Thasmai Starlife's{" "}
                <a href="/privacyPolicy" className="text-blue-600 underline" target="_blank">
                  Privacy Policy
                </a>
              </span>
              {errors.privacyCheck && (
                <span className="w-full absolute -bottom-5 left-0 h-6 text-red-600 text-sm text-left">
                  {errors.privacyCheck.message}
                </span>
              )}
            </span>
            <div className="h-12 sm:col-span-2">
              <button
                type="submit"
                className="w-full h-full bg-gradient-to-b from-[#434242] to-[#000000] hover:to-[#434242] hover:from-[#000000] text-white text-lg font-semibold rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
          <Footer />
        </form>

        {
          isConfirmationOpen && 
          <ConfirmationPopUp 
            completeData={completeData} 
            setIsConfirmationOpen={setIsConfirmationOpen}
            setIsUserStatusOpen={setIsUserStatusOpen}
            setIsOtpOpen={setIsOtpOpen} 
            setUserStatusErrorMessage={setUserStatusErrorMessage}
          />
        }
        {
          isUserStatusOpen && 
          <UserStatusPopUp 
            userStatusErrorMessage={userStatusErrorMessage}
            setIsConfirmationOpen={setIsConfirmationOpen}
            setIsUserStatusOpen={setIsUserStatusOpen}
          />
        }
        {
          isOtpOpen && 
          <OtpPopUp 
            completeData={completeData} 
            setIsConfirmationOpen={setIsConfirmationOpen}
            setIsOtpOpen={setIsOtpOpen}
            setIsSuccessCardOpen={setIsSuccessCardOpen} 
            setSuccessPageData={setSuccessPageData}
          />
        }
        {
          isSuccessCardOpen && 
          <SuccessCard 
            successPageData={successPageData}
            userEmailToSend={userEmailToSend}
            setIsConfirmationOpen={setIsConfirmationOpen}
            setIsOtpOpen={setIsOtpOpen}
            setIsSuccessCardOpen={setIsSuccessCardOpen} 
          />
        }
        
      </div>
    </div>
  );
}

export default RegistrationPage;
