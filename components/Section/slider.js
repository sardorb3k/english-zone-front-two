import Image from "next/image";
import YellowBg from "../../static/images/shape/yellow-bg.png";
import Back_1 from "../../static/images/background/back-1.jpg";
import Back_2 from "../../static/images/background/back-2.jpg";
import Back_3 from "../../static/images/background/back-3.jpg";
import { useEffect, useState } from "react";
import $ from "jquery";
import Head from "next/head";

const Slider__height = () => {
  return (
    <div className="swiper-wrapper">
      <Head>
        <script src="static/js/swiper-bundle.js" async />
      </Head>
      <div
        className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center"
        data-background={Back_1.src}
      >
        <div className="container">
          <div className="english-zone-row row">
            <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
              <div className="slider__content">
                <span>ENGLISH ZONE</span>
                <h5 className="slider__title">
                  <span className="yellow-bg">
                    IELTS 7.0 <img src={YellowBg.src} alt="" />
                  </span>{" "}
                  va undan yuqori ballni birinchi imtihonning o&apos;zidayoq qo&apos;lga
                  kiriting
                </h5>
                <p>
                  2 yil davomida 1,000 dan ziyod inson ENGLISH ZONE markazida
                  tahsil olgan
                </p>
                <a href="about.html" className="e-btn slider__btn">
                  Birinchi darsga yozilish
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center"
        data-background={Back_2.src}
      >
        <div className="container">
          <div className="english-zone-row row">
            <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
              <div className="slider__content">
                <span>Learn & Achieve</span>
                <h3 className="slider__title">
                  Fundamentals of music{" "}
                  <span className="yellow-bg">
                    theory <img src={YellowBg.src} alt="" />{" "}
                  </span>{" "}
                  Learn
                </h3>
                <p>
                  Meet university,and cultural institutions, who`ll share their
                  experience.
                </p>
                <a href="about.html" className="e-btn slider__btn">
                  Ready to get Started?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center"
        data-background={Back_3.src}
      >
        <div className="container">
          <div className="english-zone-row row">
            <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
              <div className="slider__content">
                <span>Learn & Achieve</span>
                <h3 className="slider__title">
                  Become a product{" "}
                  <span className="yellow-bg">
                    Manager <img src={YellowBg.src} alt="" />{" "}
                  </span>{" "}
                  & learn.
                </h3>
                <p>
                  Meet university,and cultural institutions, who`ll share their
                  experience.
                </p>
                <a href="about.html" className="e-btn slider__btn">
                  Ready to get Started?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center"
        data-background={Back_3.src}
      >
        <div className="container">
          <div className="english-zone-row row">
            <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
              <div className="slider__content">
                <span>Learn & Achieve</span>
                <h3 className="slider__title">
                  Launch your{" "}
                  <span className="yellow-bg">
                    online <img src={YellowBg.src} alt="" />{" "}
                  </span>{" "}
                  learning Platform.
                </h3>
                <p>
                  Meet university,and cultural institutions, who`ll share their
                  experience.
                </p>
                <a href="about.html" className="e-btn slider__btn">
                  Ready to get Started?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slider_nav = () => {
  return (
    <div className="swiper-wrapper">
      <div
        className="slider__nav-item swiper-slide orange-bg"
        data-background=""
      >
        <div className="slider__nav-content">
          <span>6 Courses</span>
          <h4>Programming Languages</h4>
        </div>
      </div>
      <div className="slider__nav-item swiper-slide blue-bg" data-background="">
        <div className="slider__nav-content">
          <span>4 Courses</span>
          <h4>Idea Discussion</h4>
        </div>
      </div>
      <div className="slider__nav-item swiper-slide pink-bg" data-background="">
        <div className="slider__nav-content">
          <span>8 Courses</span>
          <h4>Web Development</h4>
        </div>
      </div>
      <div
        className="slider__nav-item swiper-slide green-bg"
        data-background=""
      >
        <div className="slider__nav-content">
          <span>8 Courses</span>
          <h4>System Administration</h4>
        </div>
      </div>
    </div>
  );
};

const SectionSlider = () => {
  const [featured, setFeatured] = useState(null);
  useEffect(() => {
    $("[data-background").each(function () {
      $(this).css(
        "background-image",
        "url( " + $(this).attr("data-background") + "  )"
      );
      $(this).css("background-size", "cover");
    });
    var galleryThumbs = new Swiper(".slider__nav", {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(".slider__wrapper", {
      spaceBetween: 0,
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }, [featured]);
  return (
    <section className="slider__area p-relative">
      <div className="slider__wrapper swiper-container">
        <Slider__height />
      </div>
      <div className="swiper-container slider__nav d-none d-md-block"></div>
    </section>
  );
};

export default SectionSlider;
