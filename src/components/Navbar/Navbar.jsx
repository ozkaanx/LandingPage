import { useState, useEffect } from "react";
import logo from "assets/logo.png";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import "./style.scss";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [navBack, setNavBack] = useState("nav");

  const mobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    document.addEventListener("scroll" , ()=>{
      const navbarChange = window.scrollY < 80  ? "nav" : "nav active";
      setNavBack(navbarChange)
    })
  }, []);

  return (
    <nav className={`${navBack}`}>
      <div className="container navbar-container">
        <div className="navbar-left">
          <div className="nav-logo">
            <a href="/">
            <img src={logo} alt=""></img>
            </a>
          </div>
        </div>
        <div className="navbar-right">
          <ul className= {openMenu ? "navbar-menu" : "navbar-menu-active"}>
            <li className="menu-item">
              <a href="/">Home</a>
            </li>
            <li className="menu-item">
              <a href="/">Pages</a>
            </li>
            <li className="menu-item">
              <a href="/">Services</a>
            </li>
            <li className="menu-item">
              <a href="/">Blog</a>
            </li>
            <li className="menu-item">
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <div className="navbar-menu-mobile">
            <a onClick={mobileMenu}>
              {openMenu ? <RiBarChartHorizontalFill /> : <MdClose />}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
