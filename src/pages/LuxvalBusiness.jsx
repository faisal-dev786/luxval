import React from "react";
import Announcement from "../components/Announcement";
import HeroBanner from "../components/HeroBanner";
import Cookies from "../components/Cookies";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import TwoImages from "../components/TwoImages";
import { Link } from "react-router-dom";
import SignupBusiness from "../components/SignupBusiness";

const LuxvalBusiness = () => {
  return (
    <div>
      <Announcement>
        <Link to="/">Switch to user</Link>
      </Announcement>
      <HeroBanner />
      <Cookies />
      <HowItWorks />
      <Services />
      <SignupBusiness/>
      <TwoImages />
    </div>
  );
};

export default LuxvalBusiness;
