import React from "react";
import LuxvalUserHero from "../components/LuxvalUserHero";
import Cookies2 from "../components/Cookies2";
import LiveSoon from "../components/LiveSoon";
import WhyLuxval from "../components/WhyLuxval";
import Wash from "../components/Wash";
import Signup from "../components/Signup";
import TwoImages from "../components/TwoImages";
import Announcement from "../components/Announcement";
import { Link } from "react-router-dom";

const LuxvalUsers = () => {
  return (
    <div>
      <Announcement>
        <Link to="/business">Switch to business</Link>
      </Announcement>
      <LuxvalUserHero />
      <Cookies2 />
      <LiveSoon />
      <WhyLuxval />
      <Wash />
      <Signup />
      <TwoImages />
    </div>
  );
};

export default LuxvalUsers;
