/* eslint-disable react/prop-types */
import axios from "axios";
import React, {useState, useEffect} from "react";


function SuccessCard(props) {
  console.log(props.successPageData, "Line 4");
  
  const data = props.successPageData;
  console.log(data);
  

  const [expiry, setExpiry] = useState({})
 
 
  console.log(data.DOJ.split('T')[0]);

  const joinDate = data.DOJ.split('T')[0];
  const dateOfJoining = joinDate.split('-');
  const yearOfJoining = dateOfJoining[0];
  const monthOfJoining = dateOfJoining[1];
  const dayOfJoining = dateOfJoining[2];

  const doj = dayOfJoining + "/" + monthOfJoining + "/" + yearOfJoining;

  console.log(doj);
  

  const expDate = data.expiredDate.split('T')[0];
  const dateOfExpiry = expDate.split('-');
  const yearOfExpiry = dateOfExpiry[0];
  const monthOfExpiry = dateOfExpiry[1];
  const dayOfExpiry = dateOfExpiry[2];

  const expiryDate = dayOfExpiry + "/" + monthOfExpiry + "/" + yearOfExpiry;
  console.log(expiryDate);





useEffect(()=>{
  console.log("card expiry", expiryDate);
  axios.post(`${import.meta.env.VITE_BASE_URL}/user/send-email`,{
      first_name : data.first_name,
      last_name : data.last_name,
      UId : data.UId,
      DOJ : doj,
      expiredDate : expiryDate,
      to: props.userEmailToSend
  })
  .then((res)=>{
      console.log('email sended successfully');
  }).catch((err)=>{
      console.log('error from success card 123',err);

  })
  try {
    const date = data.expiredDate.split('T')[0].split('-');
    const year = date[0]
    const month = date[1]
    const day = date[2]

    setExpiry({ day:Number(day), month:Number(month), year:Number(year)+1 })
    localStorage.setItem('user_id', data.UId);
    localStorage.setItem('user_name', data.first_name + " " + data.last_name);
  }
  catch(err){
    console.log(err);
  }
},[]);
  
  return (
    <div className="w-screen h-screen fixed top-0 left-0 backdrop-blur-[3px] flex justify-center items-center poppins-font">
      {/* Success Card Section */}
      <div
        className="bg-cover bg-no-repeat bg-center h-[280px] w-[90%] sm:w-[500px] mx-auto text-white rounded-3xl"
        style={{ backgroundImage: "url('/success-card-bg2.png')" }}
      >
        <div
          className="w-full h-full p-2 rounded-3xl"
          // style={{
          //   background:
          //     "linear-gradient(to bottom, #000000 0%, #f5efb9 43%, #446368 65%, #05060b 80%, #000000 100%)",
          // }}
        >
          {/* Header */}
          <div className="flex justify-between p-3">
            <div>
              <p className="text-xs">Card Number</p>
              <h1 className="text-lg font-bold">TSL{ data.UId }</h1>
            </div>
            <img className="w-12" src="/thasmai-logo.ico" alt="Thasmai logo" />
          </div>

          {/* Content */}
          <div className="flex justify-center items-center relative">
            <img
              className="w-12 absolute top-1/4 left-5"
              src="/chip.png"
              alt="Chip"
            />
            <div className="relative flex flex-col justify-center items-center">
              <img
                className="w-44 mb-2 absolute -top-3/4"
                src="/thasmai-starlife.svg"
                alt="Star Life"
              />
              <p className="h-6"></p>
              <h3 className="text-lg font-semibold bg-gradient-to-b from-[#3F3E3E] to-[#D09700] inline-block text-transparent bg-clip-text">
                Registration Successful
              </h3>
              <p className="text-xs font-bold text-black">Contact: +91 9008290027</p>
              <a 
                className="w-20 text-center bg-[#000000bd] text-white rounded-sm border-2 border-[#ffffff50]"
                href="/registrationSuccess"
                onClick={() => {
                  props.setIsSuccessCardOpen(false);
                }}
              >OK</a>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between p-3 mt-auto">
            <div>
              <p className="text-xs">Cardholder Name</p>
              <h2 className="text-lg font-bold">{ data.first_name } { data.last_name }</h2>
              <p className="text-xs">DOJ: { doj }</p>
            </div>
            <div className="flex flex-col-reverse">
              <p className="text-xs">VALID: 0 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessCard;
