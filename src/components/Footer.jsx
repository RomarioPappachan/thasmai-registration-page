/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect} from 'react'
import axios from 'axios';

function Footer() {

    const [newjoineescount,setNewJoineesCount] = useState(0);
    const [classCount, setClassCount] = useState(0);
    const [beneficiariescount, setBeneficiariesCount] = useState(0);
    const [totalmeditatorscount, setTotalMeditatorsCount] = useState(0);
    const [waitinglistcount, setWaitingListCount] = useState(0);

        //       // const response1 = await axios.get(
  //       //   `${import.meta.env.VITE_BASE_URL}/superadmin/classes`
  //       // );
  //       // console.log(response1, "response1");
  //       // setClassCount(response1.data.list);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(`${import.meta.env.VITE_BASE_URL}/superadmin/this-month`);
        console.log(response1 , "response1");
        setNewJoineesCount(response1.data.count);
      } catch (error) {
        console.log(error);
        
      }  
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await axios.get(`${import.meta.env.VITE_BASE_URL}/superadmin/beneficiaries`);
      console.log(response2, "response2");
      setBeneficiariesCount(response2.data.list);
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response3 = await axios.get(`${import.meta.env.VITE_BASE_URL}/superadmin/meditation`);
        console.log(response3, "response3");
        setTotalMeditatorsCount(response3.data.result);
      } catch (error) {
        console.log(error); 
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response4 = await axios.get(`${import.meta.env.VITE_BASE_URL}/superadmin/waiting-list`);
        console.log(response4.data.list, "response4");
        setWaitingListCount(response4.data.list);
      } catch (error) {
        console.log(error); 
      }
    }
    fetchData();
  }, []);
  

  return (
    
    <div className="w-full grid grid-cols-4 px-2 md:px-10 lg:px-20 py-6 gap-4 text-center">
    <div className="flex flex-col justify-center items-center">
      <img src="/total-meditators.svg" alt="Total" className='w-10' title='Total Meditators' />
      <p className='font-bold text-base' title='Total Meditators'>{ totalmeditatorscount }</p>
      {/* <p>Total</p> */}
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="/waiting-list.svg" alt="Total" className='w-10' title='Waiting List'/>
      <p className='font-bold text-base' title='Waiting List'>{ waitinglistcount }</p>
      {/* <p>Waiting</p> */}
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="/beneficiaries.svg" alt="Total" className='w-10' title='Beneficiaries' />
      <p className='font-bold text-base' title='Beneficiaries'>{ beneficiariescount }</p>
      {/* <p>Beneficiaries</p> */}
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="/new-joinees.svg" alt="Total" className='w-10' title='New Joinees' />
      <p className='font-bold text-base' title='New Joinees'>{ newjoineescount }</p>
      {/* <p>New</p> */}
    </div>
  </div>
  )
}

export default Footer