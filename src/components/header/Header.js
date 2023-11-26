import React, { useEffect } from "react";
import "./Header.css";
import "../UI/Button/Button.css";
import headerPic from "../../assets/kupit.jpg";
import headerPic2 from "../../assets/image2.jpg";
import { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowCircleDown } from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 768px)').matches);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageStyle = {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
    borderRadius: '8px', 
  };
  return (
    <section id="header">
      <div className="container header">
        <div className="header-right" data-aos="fade-left">
          {isDesktop && <img src={headerPic} alt="Desktop image" style={imageStyle}/>}
          {isDesktop && <img src={headerPic2} alt="Mobile image" style={imageStyle}/>}
        </div>
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Tyylikkyyttä ja laatua jokaiseen kotiin.</span>
            <span>Huolellisesti valmistettuja huonekaluja, jotka kuvastavat persoonallisuuttasi.</span>
          </h1>
          <p className="u-text-small">
          Ville ja Antti, Petäjävedeltä kotoisin olevat puusepät, ovat perustaneet Hapopuun. Kaksikko jakaa yhteisen intohimon puutyöhön ja halun luoda käytännöllisiä, kotimaisia huonekaluja. Hapopuu on heidän tapansa tarjota asiakkaille kotimaista käsityötä ja ainutlaatuisia pöytiä, jotka heijastavat paikallista osaamista ja käytännöllistä muotoilua.
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
