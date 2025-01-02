import React from "react";
import Header from "../components/Header";
import { Route, Routes } from 'react-router-dom';
import AppDetails from './AppDetailsPage';
import AboutUs from   './AboutUsPage';
import AppList from '../components/AppList';
import RegisterUser from "./RegisterUserPage";
import LoginComponent from "./LoginPage";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<><Header/><AppList /></>} />
          <Route path="/details/:appId" element={<><Header/><AppDetails /></>} />
          <Route path="/about" element={<><Header/><AboutUs /></>} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
    </div>
  );
};

export default LandingPage;