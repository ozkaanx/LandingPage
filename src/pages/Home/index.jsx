import About from "components/About/About";
import Homebanner from "components/Banner/Banner";
import Contact from "components/Contacts/Contact";
import Counter from "components/Counter/Counter";
import Footer from "components/Footer/Footer";
import Slick from "components/InnerSlick/Slick";
import Navbar from "components/Navbar/Navbar";
import Newsletter from "components/Newsletter/Newsletter";
import Projects from "components/Projects/Projects";
import React from "react";
import "./style.scss";
const Home = () => {
  return (
    <>
    <div className="navbar-content">
      <Navbar />
      </div>
      <Homebanner />
      <Slick />
      <Counter />
      <About />
      <Projects />
      <Newsletter />
      <Contact />
      <Footer/>
      </>
  );
};

export default Home;
