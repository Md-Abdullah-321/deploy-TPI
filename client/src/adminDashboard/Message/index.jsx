import React, { useEffect, useState } from 'react';

const Messages = () => {
    const callProfilePage = async () => {
        try{
          const res = await fetch('/admin/messages', {
            method: "GET", 
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials:"include"
          });
    
          const data = await res.json();
          setMessage(data);
          if(data.error){
            throw new Error(res.error);
          }
        }catch(err){
            console.log(err);
        }
      }

      useEffect(() => {
      callProfilePage();
    }, []);
    
    const [message, setMessage] = useState([]);
    const UserMessage = ({fname, lname, email, phone, message}) => {
        return (
            <div className='w-full bg-blue-50 my-3 p-10 rounded-xl shadow-md'>
                <h3 className='text-2xl'>{fname} <span className='font-light'>{lname}</span></h3>
                <h4 className='font-light italic'>Email: {email}</h4>
                <h4 className='font-light'>Phone: {phone}</h4>
                <p>Message: {message}</p>
            </div>
        )
    }
    return (
        <div className='w-full md:w-5/6 mx-auto'>
            <h3 className='text-center text-3xl uppercase mb-10 text-blue-600 font-bold'>All Contact Messages</h3>
            {message.map((item) => <UserMessage fname={item.fname} lname={item.lname} email={item.email} phone={item.phone} message={item.message}/>)}
        </div>
    );
};

export default Messages;