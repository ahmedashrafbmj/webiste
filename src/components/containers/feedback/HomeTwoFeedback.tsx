import React from "react";
import Image from "next/image";
import One from "public/img/shape/rectangle-3.png";
import Two from "public/img/shape/feedback-shape.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const HomeTwoFeedback = () => {
  return (
    <section className="feedback__area feedback__overlay p-relative home-two-feed-bg">
      <div className="feedback-shape-2">
        <Image src={One} alt="image not found" />
      </div>
      <div className="feedback-shape-3">
        <Image src={One} alt="image not found" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-10">
            <div className="feedback__bg">
              <div className="feedback__inner">
                <div className="row">
                  <div className="col-xxl-11 col-xl-10 col-xl-8 col-lg-10 col-md-11">
                    <div className="testimonial__slider-2">
                      <div className="feedbacK__shape">
                        <Image src={Two} alt="image not found" />
                      </div>
                      <div className="testimonial__slider-active-2">
                        <Swiper
                          slidesPerView={1}
                          spaceBetween={30}
                          loop={true}
                          roundLengths={true}
                          modules={[Autoplay, Navigation]}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          navigation={{
                            nextEl: ".feedback__button-next",
                            prevEl: ".feedback__button-prev",
                          }}
                          className="testimonial__slider-active-two"
                        >
                          <SwiperSlide>
                            <div className="feedbacK__content-wrapper">
                              <div className="feedbacK__content">
                                <div className="feedback__review-icon">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                  Working with several word press themes and
                                  templates the last years, I only can say this
                                  is the best in every level. I use it for my
                                  company and the reviews that I have already
                                  are all excellent.
                                </p>
                                <div className="feedback__meta">
                                  <div className="feedback__meta-author">
                                    <h5>Alina Lora</h5>
                                    <span>Former Manager, Mgfoogies</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="feedbacK__content-wrapper">
                              <div className="feedbacK__content">
                                <div className="feedback__review-icon">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                  This is one of the BEST THEMES I have ever
                                  worked with. The extra bells and whistles
                                  added to it are amazing. Elementor features
                                  add extra flavor. The customer support is very
                                  responsive.
                                </p>
                                <div className="feedback__meta">
                                  <div className="feedback__meta-author">
                                    <h5>Rhon Jho</h5>
                                    <span>Former Manager, Sarealtv</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="feedbacK__content-wrapper">
                              <div className="feedbacK__content">
                                <div className="feedback__review-icon">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                  Great theme, one of the best I have worked
                                  with in a while. Full featured and great
                                  support for the minor issues I had which were
                                  really my not being skilled/experienced
                                  enough.
                                </p>
                                <div className="feedback__meta">
                                  <div className="feedback__meta-author">
                                    <h5>Donald Frew</h5>
                                    <span>Former Manager, FarmerSpot</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="feedbacK__content-wrapper">
                              <div className="feedbacK__content">
                                <div className="feedback__review-icon">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                  We increased our B2B SaaS client&apos;s
                                  website traffic by over 300% in just 3 months.
                                  We were able to do this by targeting their
                                  website visitors through the use of SEO
                                  optimized content
                                </p>
                                <div className="feedback__meta">
                                  <div className="feedback__meta-author">
                                    <h5>Neal Kapur</h5>
                                    <span>Head of Marketing at Glossy</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="feedbacK__content-wrapper">
                              <div className="feedbacK__content">
                                <div className="feedback__review-icon">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                  We increased our B2B SaaS client&apos;s
                                  website traffic by over 300% in just 3 months.
                                  We were able to do this by targeting their
                                  website visitors through the use of SEO
                                  optimized content
                                </p>
                                <div className="feedback__meta">
                                  <div className="feedback__meta-author">
                                    <h5>Adriano Savedra</h5>
                                    <span>Head of Marketing at Glossy</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="feedbacK__content-wrapper">
                              <div className="feedbacK__content">
                                <div className="feedback__review-icon">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                  We increased our B2B SaaS client&apos;s
                                  website traffic by over 300% in just 3 months.
                                  We were able to do this by targeting their
                                  website visitors through the use of SEO
                                  optimized content
                                </p>
                                <div className="feedback__meta">
                                  <div className="feedback__meta-author">
                                    <h5>Sagor Khan Omi</h5>
                                    <span>Head of Marketing at Glossy</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div className="feedback__slider-arrow-2">
                        <button className="feedback__button-prev">
                          <i className="fa-regular fa-arrow-left-long"></i>
                        </button>
                        <button className="feedback__button-next">
                          <i className="fa-regular fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-2">
            <div className="feedback__title">
              <h2>
                Our customers
                <br />
                feedback about us
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoFeedback;
