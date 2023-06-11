import AOS from "aos";
import "aos/dist/aos.css";
import { createContext, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
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

  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
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

          {/* Admin Routes  */}
          

          {/* If not match, show error  */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </userContext.Provider>
    </>
  );
}

export default App;
