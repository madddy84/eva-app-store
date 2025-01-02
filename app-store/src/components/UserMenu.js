import React, { use, useState, useEffect } from 'react';
import { FaUserCircle, FaSignInAlt, FaList, FaCog, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getUser } from '../services/loginService';


const UserMenu = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
      const getLoggedInUser = async () => {
        const user = await getUser();
        setLoggedInUser(user);
      }
  
      getLoggedInUser();
    }, [isLoggedIn]);

    useEffect(() => {
      localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false); 
    });
  
  return (
    <div className="relative">
      <div
        className="cursor-pointer flex items-center"
        onClick={() => setShowUserMenu(!showUserMenu)}
      >
        <FaUserCircle className="text-2xl text-gray-600 hover:text-gray-800 flex" /> <span className="ml-2 text-gray-600">{loggedInUser ? loggedInUser.username : ""}</span>
      </div>
      {showUserMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
          {!isLoggedIn ? (<>
            <Link to="/login" onClick={()=> setShowUserMenu(false)} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
              <FaSignInAlt className="mr-2" />
              Login
            </Link>
            
            <Link to="/register" onClick={()=> setShowUserMenu(false)} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
              <FaUserAlt className="mr-2" />
              Register    
            </Link>
          </>
          ) : (
            <>
              <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                <FaList className="mr-2" />
                Subscriptions
              </button>
              <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                <FaCog className="mr-2" />
                Settings
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token")
                  setShowUserMenu(false)
                }}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;