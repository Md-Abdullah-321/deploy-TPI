
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from '../../app';


const SignIn = () => {
    const {state, dispatch} = useContext(userContext);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        
        const res = await fetch('/signin', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,password
            })
        });


        const data = await res.json();

        if(data.error){
            window.alert("Invalid Credentials");
        }else{
            dispatch({type:"STUDENT", payload: true});
            window.alert("SignIn Successfull");
            navigate('/');
        }
    }
    return (
        <div className="my-32 md:my-0">
            <div className="flex justify-center items-center w-screen md:h-screen bg-white" data-aos="fade-down" data-aos-delay="200">
	{/* <!-- COMPONENT CODE --> */}
	<div className="container mx-auto my-4 px-4 lg:px-20">

		<div className="w-full p-5 my-4 lg:w-2/5   mx-auto rounded-2xl shadow-2xl border">
			<div className="text-center">
				<h1 className="font-bold uppercase text-xl">Sign in to your account</h1>
			</div>
            <form method="POST">
            <div className="mt-5">
				<input 
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" 
                placeholder="Enter Email*" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>

				<input 
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="password" 
                placeholder="Enter Password*" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>


            {/* Dont Have any Account  */}
            <p 
                className="text-sm font-light text-gray-500 mt-5">
                    Don’t have an account yet? 
                <NavLink to="/signup" 
                className=" text-blue-900 font-bold hover:underline">Sign up</NavLink>
                </p>

				<div className="my-2 w-1/2 mx-auto">
					<button 
                    className="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-blue-700"
                    onClick={handleSubmit}
                    disabled={!validateForm()}
                    >
                    Sign In
                    </button>
				</div>
            </form>
			</div>
    </div>
    {/* <!-- COMPONENT CODE --> */}
</div>
</div>
    )
}

export default SignIn;