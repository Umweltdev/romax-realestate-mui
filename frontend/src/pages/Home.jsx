import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Carousel from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import { resetState } from "../redux/filter";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);
  return (
    <div>
      <Announcement />
      <Navbar />
      <Hero />
      <Carousel />
      <Products />
      <Facilities />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
