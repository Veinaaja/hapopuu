import React, { useEffect } from "react";
import "./Features.css";
import { BsInfoCircle } from "react-icons/bs";
import featurePic from "../../assets/feature.png";
import Feature from "./Feature";
import { FeatureList } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <BsInfoCircle color="#9e5700" size={30} />
          <h2>Ominaisuudet</h2>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={featurePic} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
