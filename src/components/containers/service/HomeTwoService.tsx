import React from "react";
import Link from "next/link";

const HomeTwoService = () => {
  return (
    <div className="service__area service__bg z-index-1 pt-120 pb-90 service-bg-two">
      <div className="container">
        <div className="row tik">
          <div className="col-12">
            <div className="section__title-wrapper text-center mb-65">
              <span className="section__subtitle">
              OUR<span> AWESOME </span> SERVICES
              </span>
              <h2 className="section__title">
              We Are <span>Dedicated To Serve</span> You All Time.
                <span className="down__mark-middle"></span>
              </h2>
            </div>
          </div>
          <div className="row  tik" data-aos="fade-left" data-aos-delay="300">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
              


                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Web Development</Link>
                  </h3>
                  <p>
                  Web improvement is the work engaged with building up a site for the Internet (World Wide Web) or an intranet (a private network)
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
              

                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">App Development</Link>
                  </h3>
                  <p>
                  We provide specialist services you may need for Android and iOS developers, UI/UX designers, Testers, Project managers.
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
                  
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Graphic Designing</Link>
                  </h3>
                  <p>
                  UI/UX design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design.
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
        
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Devops</Link>
                  </h3>
                  <p>
                  DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous.
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
   
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Content Writing</Link>
                  </h3>
                  <p>
                  Globally transition proactive niches without progressive processes. Objectively syndicate enterprise-wide services through timely metrics.
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="service__item mb-30">
                <div className="service__thumb include__bg service-two-cmn"></div>
                <div className="service__icon transition-3">
  
                </div>
                <div className="service__content">
                  <h3>
                    <Link href="service">Digital Marketing</Link>
                  </h3>
                  <p>
                  Leverage the skills of our company&apos;s digital marketing services capable of delivering outstanding marketing strategies. We help our clients to engage, convert, and retain customers
                  </p>
                </div>
                <div className="service__link">
                  <Link href="service">
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwoService;
