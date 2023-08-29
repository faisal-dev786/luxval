import React from "react";
import LuxvalBusiness from "./pages/LuxvalBusiness";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LuxvalUsers from "./pages/LuxvalUsers";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Announcement /> */}
      <Routes>
        <Route path="/" exact element={<LuxvalUsers />}></Route>
        <Route path="/business" element={<LuxvalBusiness />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
