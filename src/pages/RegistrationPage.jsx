import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
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
    .required("First name is empty")
    .matches(/^[A-Za-z. ]+$/, "Name must not contain special characters."),
  secondName: yup
    .string()
    .required("Last name is empty")
    .matches(/^[A-Za-z. ]+$/, "Name must not contain special characters."),
  email: yup.string().required("Email is empty").email("Enter a valid email"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{7,13}$/, "Phone number must be between 7 and 13 digits."),
  selectedLanguages: yup.string().required("Preferred language is required"),
  privacyCheck: yup
    .boolean()
    .oneOf([true], "You must accept the privacy policy")
    .required("Privacy policy must be accepted"),
});

function RegistrationPage() {
  const [referralId, setReferralId] = useState("");
  const defaultCountryId = 151;
  // const countryRef = useRef("");
  const [isSelectTagSelected, setIsSelectTagSelected] = useState(false);
  const [isTextAreaExpanded, setIsTextAreaExpanded] = useState(false);
  const [specialRemarkCount, setSpecialRemarkCount] = useState(0);
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
  });
  const [completeData, setCompleteData] = useState({});
  const [userEmailToSend, setUserEmailToSend] = useState("");

  // popup states
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isUserStatusOpen, setIsUserStatusOpen] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [isSuccessCardOpen, setIsSuccessCardOpen] = useState(false);

  const [userStatusErrorMessage, setUserStatusErrorMessage] = useState({
    flag: "",
    message: "",
  });

  const [successPageData, setSuccessPageData] = useState({});

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // This line is required for some browsers to show the default dialog
      return "You have pressed the back button"; // Optional custom message (not always displayed)
    };

    if (!success) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (!success) {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
    };
  });

  function handleNonValidatedData(e) {
    const { name, value } = e.target;
    if (name === "specialRemarks") {
      setSpecialRemarkCount(value.length);
    }
    setNonValidatedData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleDateOfBirth(value) {
    setNonValidatedData((prevValue) => {
      return {
        ...prevValue,
        dob: value,
      };
    });
  }

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log(data);
    const {
      firstName,
      secondName,
      email,
      country,
      phone,
      selectedLanguages,
      privacyCheck,
    } = data;

    setUserEmailToSend(email); //to send email at the time of success card loading

    // Merge validated DataTransfer, non validated datas and referral Id
    const mergedData = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      phone: phone,
      languages: selectedLanguages, // store in an array
      country: selectedCountryName,
      country_code: selectedCountryPhonecode,
      ...nonValidatedData,
      ref_id: referralId,
    };
    // console.log(mergedData);

    setCompleteData(mergedData); //Merged data

    if (mergedData) {
      setIsConfirmationOpen(true);
    }
  };

  useEffect(() => {
    try {
      let refId = window.localStorage.getItem("refferalId");
      setSelectedLanguage(localStorage.getItem("selectedLanguage"));
      setReferralId(refId);
      // console.log("Referral Id", refId, selectedLanguage);
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
        // console.log(response.data, "res");
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-5 px-1 background-mountain overflow-y-auto"
        >
          <h1 className="text-center text-2xl font-semibold">
            Satyam vada | Dharmam chara
          </h1>
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 px-2 md:px-10 lg:px-20 py-6">
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <input
                type="text"
                {...register("firstName")}
                placeholder="First name"
                className={`bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-gray-400 placeholder:font-normal ${
                  errors.firstName && "border-2 border-red-500"
                }`}
              />
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">
                *
              </span>
              {errors.firstName && (
                <span className="w-full absolute -bottom-6 left-0 h-6 text-red-600 text-sm text-left font-semibold bg-[hsla(360,100%,100%,0.25)] rounded-sm backdrop-blur-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <input
                type="text"
                {...register("secondName")}
                placeholder="Last name"
                className={`bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-gray-400 placeholder:font-normal ${
                  errors.secondName && "border-2 border-red-500"
                }`}
              />
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">
                *
              </span>
              {errors.secondName && (
                <span className="w-full absolute -bottom-6 left-0 h-6 text-red-600 text-sm text-left font-semibold bg-[hsla(360,100%,100%,0.25)] rounded-sm backdrop-blur-sm">
                  {errors.secondName.message}
                </span>
              )}
            </div>
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className={`bg-white w-full h-full px-4 text-lg rounded-lg outline-none placeholder:text-gray-400 placeholder:font-normal ${
                  errors.email && "border-2 border-red-500"
                }`}
              />
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">
                *
              </span>
              {errors.email && (
                <span className="w-full absolute -bottom-6 left-0 h-6 text-red-600 text-sm text-left font-semibold bg-[hsla(360,100%,100%,0.25)] rounded-sm backdrop-blur-sm">
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
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleNonValidatedData}
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center gap-y-1">
                  <img src="/female.png" alt="" className="w-8" />
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleNonValidatedData}
                  />
                </div>
              </div>
            </div>
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <select
                {...register("country")}
                onChange={handleCountryChange}
                className="w-full h-full bg-white text-lg text-black font-normal rounded-lg px-4 outline-none"
                // ref={countryRef}
                value={selectedCountryId}
              >
                <option value="" disabled>
                  {loading ? "Loading countries" : "Select a country"}
                </option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">
                *
              </span>
              {errors.country && (
                <span className="w-full absolute -bottom-6 left-0 h-6 text-red-600 text-sm text-left font-semibold bg-[hsla(360,100%,100%,0.25)] rounded-sm backdrop-blur-sm">
                  {errors.country.message}
                </span>
              )}
            </div>
            <div className="h-12 relative rounded-lg flex justify-center items-center gap-x-6">
              <div className="w-[20%] h-full flex justify-center items-center bg-white rounded-lg form-input-drop-shadow">
                <img
                  src={selectedCountryFlag}
                  alt=""
                  className="w-10 border-[0.5px] border-[#d9d9e3]"
                />
              </div>
              <div className="w-[80%] h-full flex justify-center items-center rounded-lg bg-white form-input-drop-shadow relative">
                <div className="w-1/4 h-full flex justify-center items-center rounded-l-lg text-lg border-r-2 border-gray-100">
                  {selectedCountryPhonecode}
                </div>
                <div className="w-3/4 h-full flex justify-center items-center rounded-r-lg relative">
                  <input
                    className={`w-full h-full ps-4 outline-none rounded-r-lg text-lg placeholder:text-gray-400 placeholder:font-normal ${
                      errors.phone && "border-2 border-red-500"
                    }`}
                    type="tel"
                    {...register("phone")}
                    placeholder="Mobile no."
                  />
                  <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">
                    *
                  </span>
                </div>
                {errors.phone && (
                  <span className="w-full absolute -bottom-6 left-0 h-6 text-red-600 text-sm text-left font-semibold bg-[hsla(360,100%,100%,0.25)] rounded-sm backdrop-blur-sm">
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
                <input
                  type="radio"
                  name="reference"
                  value="social_media"
                  id=""
                  onChange={handleNonValidatedData}
                />
              </div>
              <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
                Reference
                <input
                  type="radio"
                  name="reference"
                  value="reference"
                  id=""
                  onChange={handleNonValidatedData}
                />
              </div>
              <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
                News
                <input
                  type="radio"
                  name="reference"
                  value="news"
                  id=""
                  onChange={handleNonValidatedData}
                />
              </div>
              <div className="h-full text-sm font-semibold flex flex-col items-center justify-center gap-y-1">
                Others
                <input
                  type="radio"
                  name="reference"
                  value="others"
                  id=""
                  onChange={handleNonValidatedData}
                />
              </div>
            </div>
            <div className="h-12 relative rounded-lg form-input-drop-shadow">
              <select
                {...register("selectedLanguages", {
                  onChange: (e) =>
                    setIsSelectTagSelected(e.target.value !== ""), // Mark as selected when a non-empty value is chosen
                })}
                className={`w-full h-full bg-white text-lg font-normal rounded-lg px-4 outline-none 
                    ${isSelectTagSelected ? "text-black" : "text-gray-400"} 
                    ${
                      errors.selectedLanguages ? "border-2 border-red-500" : ""
                    }`}
              >
                <option
                  value=""
                  selected
                  disabled
                  className={`${
                    isSelectTagSelected ? "text-black" : "text-gray-400"
                  }`}
                >
                  Preferred Language for online zoom class
                </option>
                <option className="text-black" value="English">
                  English
                </option>
                <option className="text-black" value="Hindi">
                  Hindi
                </option>
                <option className="text-black" value="Kannada">
                  Kannada
                </option>
                <option className="text-black" value="Malayalam">
                  Malayalam
                </option>
                <option className="text-black" value="Tamil">
                  Tamil
                </option>
                <option className="text-black" value="Telugu">
                  Telugu
                </option>
              </select>
              <span className="absolute top-2 left-2 text-lg text-[#BA1A1A] font-bold">
                *
              </span>
              {errors.selectedLanguages && (
                <span className="w-full absolute -bottom-6 left-0 h-6 text-red-600 text-sm text-left font-semibold bg-[hsla(360,100%,100%,0.25)] rounded-sm backdrop-blur-sm">
                  {errors.selectedLanguages.message}
                </span>
              )}
            </div>
            <div className="min-h-12 sm:col-span-2 bg-white rounded-lg form-input-drop-shadow relative">
              <textarea
                name="specialRemarks"
                value={nonValidatedData.specialRemarks}
                id=""
                placeholder="Special remarks"
                className="w-full h-full px-4 p-2 text-lg rounded-lg bg-white text-black  outline-none placeholder:text-gray-400 placeholder:font-normal"
                rows={isTextAreaExpanded ? 4 : 1}
                onClick={() => {
                  setIsTextAreaExpanded(true);
                }}
                onBlur={() => {
                  setIsTextAreaExpanded(false);
                }}
                maxLength={500}
                onChange={handleNonValidatedData}
              ></textarea>
              <span className="w-full absolute -bottom-6 left-0 h-7 text-[#2f3542] bg-[hsla(360,100%,100%,0.25)] font-semibold text-sm text-right rounded-sm backdrop-blur-sm">
                {specialRemarkCount}/500
              </span>
            </div>
            <span
              className={`w-full p-2 bg-[hsla(0,0%,100%,0.752)] sm:col-span-2 rounded-md form-input-drop-shadow flex items-center gap-2 ${
                errors.privacyCheck && "border-2 border-red-500"
              }`}
            >
              <input
                type="checkbox"
                {...register("privacyCheck")}
                className="size-5"
              />
              <span className="text-base text-black text-left">
                I have read and agreed to Thasmai Starlife's{" "}
                <a
                  href="/privacyPolicy"
                  className="text-blue-600 underline"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </span>
              {/* {errors.privacyCheck && (
                <span className="w-full absolute -bottom-6 left-0 h-6 text-red-600 text-sm text-left font-semibold bg-[hsla(360,100%,100%,0.25)] rounded-sm backdrop-blur-sm">
                  {errors.privacyCheck.message}
                </span>
              )} */}
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

        {isConfirmationOpen && (
          <ConfirmationPopUp
            completeData={completeData}
            setIsConfirmationOpen={setIsConfirmationOpen}
            setIsUserStatusOpen={setIsUserStatusOpen}
            setIsOtpOpen={setIsOtpOpen}
            setUserStatusErrorMessage={setUserStatusErrorMessage}
          />
        )}
        {isUserStatusOpen && (
          <UserStatusPopUp
            userStatusErrorMessage={userStatusErrorMessage}
            setIsConfirmationOpen={setIsConfirmationOpen}
            setIsUserStatusOpen={setIsUserStatusOpen}
          />
        )}
        {isOtpOpen && (
          <OtpPopUp
            completeData={completeData}
            setIsConfirmationOpen={setIsConfirmationOpen}
            setIsOtpOpen={setIsOtpOpen}
            setIsSuccessCardOpen={setIsSuccessCardOpen}
            setSuccessPageData={setSuccessPageData}
            setSuccess={setSuccess}
          />
        )}
        {isSuccessCardOpen && (
          <SuccessCard
            successPageData={successPageData}
            userEmailToSend={userEmailToSend}
            setIsConfirmationOpen={setIsConfirmationOpen}
            setIsOtpOpen={setIsOtpOpen}
            setIsSuccessCardOpen={setIsSuccessCardOpen}
          />
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;
