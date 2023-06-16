import AOS from "aos";
import "aos/dist/aos.css";
import { createContext, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./adminDashboard/Dashboard/index";
import Dashboard from './adminDashboard/Home/index';
import AdminLogout from "./adminDashboard/Logout/index";
import Messages from './adminDashboard/Message/index';
import StudentList from './adminDashboard/Students/StudentList';
import Teachers from './adminDashboard/Teachers/index';
import About from "./components/about/index";
import Contact from "./components/contact/index";
import Department from "./components/department/index";
import ErrorPage from "./components/error/index";
import Footer from "./components/footer/index";
import Gallery from "./components/gallery/index";
import Home from "./components/home/Home";
import Logout from "./components/logout/index";
import Navbar from "./components/navbar/index";
import SignIn from "./components/signIn/index";
import Signup from "./components/signUp/index";
import UserProfile from "./components/userProfile";
import "./index.css";

import { initialState, reducer } from "./components/reducer/useReducer";
// 1: Context API:
export const userContext = createContext();

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const StudentRender = () => {
      return (
        <>
          <Navbar />
        {/* Routing Path in React  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/department" element={<Department />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/logout" element={<Logout />} />

          {/* If not match, show error  */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer />
        </>
      )
  }

  const AdminRender = () => {
    return (
      <>
        <AdminDashboard/>
        <Routes>
            
              <Route path="/admin" element={<Dashboard/>}/>
              <Route path="/admin/messages" element={<Messages/>}/>
              <Route path="/admin/students" element={<StudentList/>}/>
              <Route path="/admin/teachers" element={<Teachers/>}/>
              <Route path="/admin/logout" element={<AdminLogout/>}/>
              {/* If not match, show error  */}
              <Route path="*" element={<ErrorPage />} />
            
        </Routes>
      </>
    )
  }
  
  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        {state == false ? <AdminRender/>: <StudentRender/>}
      </userContext.Provider>
    </>
  );
}

export default App;
