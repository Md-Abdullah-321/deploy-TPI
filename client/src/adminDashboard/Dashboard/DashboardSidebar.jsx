// @flow 
import * as React from 'react';
import { NavLink } from 'react-router-dom';

 // Showing Hamburger 
 const showAndCloseHamburger = () =>{
	const Hamburger = document.querySelector('.navbar-menu');
	Hamburger.classList.toggle('hidden');
}
export const DashboardSidebar = () => {
    return (
		<div>
		<div className="">
          <button className="navbar-burger flex items-center text-blue-600 p-4" onClick={showAndCloseHamburger}>
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
			<div className="navbar-menu relative z-50 hidden" >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
          >
          <div className="flex items-center mb-8">
             {/* Logo for Hamburger Menu: mr-auto text-3xl font-bold leading-none  */}
            <button className="navbar-close" onClick={showAndCloseHamburger}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-100 hover:text-blue-600 rounded-xl"
                  onClick={showAndCloseHamburger}
                  to='/admin'
                  >Dashboard</NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-100 hover:text-blue-600 rounded-xl"
                  onClick={showAndCloseHamburger}
                  to='/admin/messages'
                  >Message</NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-100 hover:text-blue-600 rounded-xl"
                  onClick={showAndCloseHamburger}
                  to='/admin/students'
                  >Students</NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-100 hover:text-blue-600 rounded-xl"
                  onClick={showAndCloseHamburger}
                  to='/admin/teachers'
                  >Teachers</NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
			<NavLink
          className="hidden lg:inline-block w-full text-center lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-500 hover:bg-blue-600  text-sm text-white font-bold rounded-xl transition duration-200"
          to='/admin/logout'>Logout</NavLink>

            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © Md Abdullah</span>
            </p>
          </div>
        </nav>
      </div>
		</div>
    );
};
