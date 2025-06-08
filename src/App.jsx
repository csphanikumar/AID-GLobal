import React from 'react';
import MyNavbar from './navbar';
import Footer from './footer';
// import { Routes, Route } from 'react-router-dom'; // Uncomment if using routes

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <MyNavbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Add your Routes or page content here */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          ...
        </Routes> */}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
