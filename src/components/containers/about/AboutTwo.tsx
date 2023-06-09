import React from "react";
import Image from "next/image";

import One from "public/img/shape/about-shape-1.png";
import Two from "public/img/shape/about-shape-2.png";
import Three from "public/img/shape/rectangle-3.png";
import Four from "public/img/shape/rectangle-4.png";
import Five from "public/img/about/about-thumb.png";

const AboutTwo = () => {
  return (
    <div className="about__area grey-bg z-index-11 p-relative pt-120 pb-60">
      <div className="about__shape-1">
        <Image src={One} alt="image not found" />
      </div>
      <div className="about__shape-2">
        <Image src={Two} alt="image not found" />
      </div>
      <div className="about__shape-3">
        <Image src={Three} alt="image not found" />
      </div>
      <div className="about__shape-4">
        <Image src={Four} alt="image not found" />
      </div>
      <div className="container">
        <div
          className="row align-items-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="about__thumb-wrapper mb-60">
              <div className="about__thumb w-img">
                <Image src={Five} alt="image not found" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about__content-wapper mb-60">
              <div className="section__title-wrapper mb-40">
                <span className="section__subtitle-2">
                  <span>What</span> we do
                </span>
                <h2 className="section__title-2">
                  Our Mission is to Provide you best Services
                </h2>
              </div>
              <p>
              We specialize in providing robust digital solutions to businesses
that are meant to set them apart
              </p>
              <div className="about__features-box">
                <div className="about__features-item">
                  <div className="about__features-icon">
                  </div>
                  <div className="about__features-content">
                    <p>
                    We specialize in providing robust digital solutions to businesses
that are meant to set them apart
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
