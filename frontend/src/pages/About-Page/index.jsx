import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import AboutUs from "../../components/About-us";

const AboutPage = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <AboutUs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default AboutPage;
