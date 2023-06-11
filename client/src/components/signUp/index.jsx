import React, { useReducer } from "react";
import { NavLink, useNavigate } from 'react-router-dom';


const initialState = {
    name: "",
    session: "",
    department: "",
    semester: "",
    shift: "",
    roll: "",
    registration: "",
    email: "",
    password:""
};
const reducer = (state, action) => {
    if (action.type === "reset") {
        return initialState;
    }

    const result = { ...state };
    result[action.type] = action.value;
    return result;
};

const Signup = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, session, department, semester, shift, roll, registration, email, password } = state;

    const handleSubmit = async(e) => {
        e.preventDefault();

        /* fetch api */
        const res = await fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body:JSON.stringify({
                name, session, department, semester, shift, roll, registration, email, password 
            })
        });
        const data = await res.json();
        if(data.error){
            window.alert(data.error);
        }else{
            window.alert("SignUp Successfull");
            //navigate to login Page:
            navigate('/signin')
        }
        /* clear state */
        // dispatch({ type: "reset" });
    };

    const onChange = e => {
        const { name, value } = e.target;
        dispatch({ type: name, value });
    };

    return (
        <div className="my-5 md:my-0" data-aos="fade-down" data-aos-delay="200">
        <div className="flex justify-center items-center w-screen md:h-screen bg-white">
{/* <!-- COMPONENT CODE --> */}
        <div className="container mx-auto my-4 px-4 lg:px-20">

        <div className="w-full p-5 my-4 lg:w-2/5   mx-auto rounded-2xl shadow-2xl border">
        <div className="text-center">
            <h1 className="font-bold uppercase text-xl">Create an Account</h1>
        </div>

            <form method="POST">
            <div className="mt-5">
            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="Enter Name*" 
            required='true'
            name='name'
            value={name}
            onChange={onChange}/>

            <div className="flex justify-between">

                <div className="w-2/5 bg-gray-100 text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline mr-1 py-1">
                    <select id="session" 
                    className="option w-11/12 focus:outline-none focus:shadow-outline" 
                    name="session"
                    value={session}
                    onChange={onChange}>
                        <option value="select"> <span className="option text-gray-100">
                        Select Session    
                        </span></option>
                        <option value="19 -20">19 - 20</option>
                        <option value="20 - 21">20 - 21</option>
                        <option value="21 - 22">21 - 22</option>
                        <option value="22 - 23">22 - 23</option>
                        <option value="23 - 24">23 - 24</option>
                    </select>
                </div>

                <div className="w-3/5 bg-gray-100 text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline ml-1 py-1">
                    <select 
                    id="department" 
                    className="w-11/12 option focus:outline-none focus:shadow-outline" 
                    name="department"
                    value={department}
                    onChange={onChange}>
                        <option value="select"> <span className="option text-gray-100">
                        Select Department    
                        </span></option>
                        <option value="CMT">Computer Technology</option>
                        <option value="ET">Electrical Technology</option>
                        <option value="CT">Civil Technology</option>
                        <option value="ELT">Electronics Technology</option>
                        <option value="ConsT">Construction Technology</option>
                        <option value="MT">Mechanical Technology</option>
                        <option value="TC">Telecommunication Technology</option>
                    </select>
                </div>

                
            </div>

            <div className="flex justify-between"> 
            <div className="w-2/5 bg-gray-100 text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline mr-1 py-1">
                    <select 
                    id="session" 
                    className="option w-11/12 focus:outline-none focus:shadow-outline" 
                    name="semester"
                    value={semester}
                    onChange={onChange}>
                        <option value="select"> <span className="option text-gray-100">
                        Select Semester    
                        </span></option>
                        <option value="1st">1st Semester</option>
                        <option value="2nd">2nd Semester</option>
                        <option value="3rd">3rd Semester</option>
                        <option value="4th">4th Semester</option>
                        <option value="5th">5th Semester</option>
                        <option value="6th">6th Semester</option>
                        <option value="7th">7th Semester</option>
                        <option value="8th">8th Semester</option>
                    </select>
                </div>
                <div 
                className="w-3/5 bg-gray-100 text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline ml-1 py-1">
                    <select 
                    id="department" 
                    className="w-11/12 option focus:outline-none focus:shadow-outline" 
                    name="shift"
                    value={shift}
                    onChange={onChange}>
                        <option value="select"> <span className="option text-gray-100">
                        Select Shift    
                        </span></option>
                        <option value="1st">1st Shift</option>
                        <option value="2nd">2nd Shift</option>
                    </select>
                </div>
            </div>


            <input 
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" 
            placeholder="Enter Roll Number*" 
            name="roll"
            value={roll}
            onChange={onChange}/>

            <input 
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" 
            placeholder="Enter Registration Number*" 
            name="registration"
            value={registration}
            onChange={onChange}/>

            <input 
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" 
            placeholder="Enter Email*" 
            name="email"
            value={email}
            onChange={onChange}/>

            <input 
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="password" 
            placeholder="Enter Password*" 
            name="password"
            value={password}
            onChange={onChange}/>
            </div>
    {/* Dont Have any Account  */}
            <p 
            className="text-sm font-light text-gray-500 mt-5">
                  Have an account? 
            <NavLink 
            to="/signin" 
            className=" text-blue-900 font-bold hover:underline">Sign In
            </NavLink>
            </p>

            <div className="my-2 w-1/2 mx-auto">
                <button 
                className="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline
               hover:bg-blue-700"
               onClick={handleSubmit}>
                 Sign Up
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

export default Signup;