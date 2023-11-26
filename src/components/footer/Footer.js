import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import smallLogo from "../../assets/smallLogo.png"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Yhteystiedot</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Osoite: Petäjävesi
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Puhelinnumero: +358 40 6697097
            </p>
            <p>
              <FaEnvelope /> &nbsp; Sähköposti: hassinenville02@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Nettisivut: www.hapopuu.fi
            </p>
          </div>
        </div>
        <picture>
          <source media="(min-width:600px)" srcset={logo} alt="Hapopuu"/>
          <img src={smallLogo} alt="HP"/>
        </picture>
      </div>
    </section>
  );
};

export default Footer;
