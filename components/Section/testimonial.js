import $ from "jquery";
import Image from "next/image";
import { useEffect, useState } from "react";
// Images
import Icon from "../../static/images/svg-testimonial.svg";
import Background from "../../static/images/testimonial/home-3/testimonial-bg-3.jpg";
const Testimonial = () => {
  const [featured, setFeatured] = useState(null);
  useEffect(() => {
    // Get featured image
    $("[data-background").each(function () {
      $(this).css(
        "background-image",
        "url( " + $(this).attr("data-background") + "  )"
      );
      $(this).css("background-size", "cover");
    });
    var tesimonialThumb = new Swiper(".testimonial-nav", {
      spaceBetween: 20,
      slidesPerView: 3,
      loop: true,
      freeMode: true,
      loopedSlides: 3, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var testimonialText = new Swiper(".testimonial-text", {
      spaceBetween: 0,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: tesimonialThumb,
      },
    });
  }, [featured]);
  return (
    <>
      <section
        className="testimonial__area pt-145 pb-150"
        data-background={Background.src}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
              <div className="testimonial__slider-3">
                <h3 className="testimonial__title">
                  Student <br /> Community Feedback
                </h3>
                <div className="testimonial__slider-wrapper swiper-container testimonial-text mb-35">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial__item-3">
                        <p>
                          “After I started learning design with Quillow, I
                          realized that I had improved to very advanced levels.
                          While I am studying at my university, I design as an
                          additional income and I am sure that I will do this
                          professionally.”
                        </p>

                        <div className="testimonial__info-2">
                          <h4>James Lee,</h4>
                          <span>Student @Educal University</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__item-3">
                        <p>
                          “After I started learning design with Quillow, I
                          realized that I had improved to very advanced levels.
                          While I am studying at my university, I design as an
                          additional income and I am sure that I will do this
                          professionally.”
                        </p>

                        <div className="testimonial__info-2">
                          <h4>James Lee,</h4>
                          <span>Student @Educal University</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__item-3">
                        <p>
                          “After I started learning design with Quillow, I
                          realized that I had improved to very advanced levels.
                          While I am studying at my university, I design as an
                          additional income and I am sure that I will do this
                          professionally.”
                        </p>

                        <div className="testimonial__info-2">
                          <h4>James Lee,</h4>
                          <span>Student @Educal University</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-container testimonial-nav">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial__nav-thumb">
                        <img
                          src="static/images/testimonial/home-3/testi-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__nav-thumb">
                        <img
                          src="static/images/testimonial/home-3/testi-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__nav-thumb">
                        <img
                          src="static/images/testimonial/home-3/testi-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__nav-thumb">
                        <img
                          src="static/images/testimonial/home-3/testi-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
              <div className="testimonial__video ml-70 fix">
                <div className="testimonial__thumb-3">
                  <iframe
                    src="https://www.youtube.com/embed/Rr0uFzAOQus"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <div className="testimonial__video-content d-sm-flex">
                  <div className="testimonial__video-icon mr-20 mb-20">
                    <span>
                      <Image src={Icon} alt="Testimonial" />
                    </span>
                  </div>
                  <div className="testimonial__video-text">
                    <h4>Course Outcome</h4>
                    <p>
                      Faff about A bit of how&apos;s your father getmate cack
                      codswallop crikey argy-bargy cobblers lost his bottle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
