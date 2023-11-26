import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
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
              <FaMapMarkerAlt /> &nbsp; Osoite: foo
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Puhelinnumero: +358 40 6697097.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Sähköposti: hasisviltusmokesweed@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.hapopuu.fi
            </p>
          </div>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
