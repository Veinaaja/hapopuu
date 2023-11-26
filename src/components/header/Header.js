import React, { useEffect } from "react";
import "./Header.css";
import "../UI/Button/Button.css";
import headerPic from "../../assets/kupit.jpg";
import headerPic2 from "../../assets/image2.jpg";
import headerPic3 from "../../assets/image3.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowCircleDown } from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const imageStyle = {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
    borderRadius: '8px', 
  };

  return (
    <section id="header">
      <div className="container header">
        <div className="header-right" data-aos="fade-left">
          <img src={headerPic} alt="image" style={imageStyle}/>
          <img src={headerPic2} alt="image" style={imageStyle}/>
        </div>
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Tyylikkyyttä ja taituruutta jokaiseen kotiin.</span>
            <span>Taidolla tehtyjä huonekaluja, jotka kuvastavat persoonallisuuttasi.</span>
          </h1>
          <p className="u-text-small">
          Hapopuun nuoret perustajat eivät ainoastaan valmista pöytiä, vaan myös puhaltavat uutta henkeä perinteiseen käsityöhön. Heidän energiansa ja innovatiivinen otteensa tekevät Hapopuusta enemmän kuin huonekaluyrityksen – se on brändi, joka tuo modernin taituruuden perinteisen puusepäntyön maailmaan
          </p>
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <FaArrowCircleDown color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
