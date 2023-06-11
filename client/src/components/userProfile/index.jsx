import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileComponent from './profileComponent';


export default function UserProfile() {
  const navigate = useNavigate();

  const callProfilePage = async () => {
    try{
      const res = await fetch('/userProfile', {
        method: "GET", 
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials:"include"
      });

      const data = await res.json();
      setUserData(data);
      if(data.error){
        throw new Error(res.error);
      }
    }catch(err){
      navigate('/signIn');
    }
  }


  const [userData, setUserData] = useState({});
  useEffect(() => {
      callProfilePage();
  }, []);

  const {name, email, session, department, semester, shift, roll, registration} = userData;
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='h-5/6 w-full md:w-5/6 bg-blue-50 opacity-80 rounded-lg' data-aos="fade-down">
            <h3 className='underline underline-offset-1 text-center my-10 text-3xl font-bold uppercase'>{name}</h3>


            <ProfileComponent name='email' value={email}/>

            <ProfileComponent name='session' value={session}/>

            <ProfileComponent name='department' value={department}/>

            <ProfileComponent name='semester' value={semester}/>

            <ProfileComponent name='shift' value={shift}/>

            <ProfileComponent name='roll' value={roll}/>

            <ProfileComponent name='registration' value={registration}/>
        </div>
    </div>
  )
}
