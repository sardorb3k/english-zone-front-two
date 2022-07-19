import $ from "jquery";
import Head from "next/head";
import { useEffect, useState } from "react";
// Images
import YellowBg from "../../static/images/shape/yellow-bg.png";
import Back from "../../static/images/back.jpg";
import Back_1 from "../../static/images/background/back-1.jpg";
import Back_2 from "../../static/images/background/back-2.jpg";
import Back_3 from "../../static/images/background/back-3.jpg";

const Slider__height = () => {
  return (
    <div className="swiper-wrapper">
      <Head>
        <script src="static/js/swiper-bundle.js" async />
      </Head>
      <div
        className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center"
        data-background={Back.src}
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
                  va undan yuqori ballni birinchi imtihonning o&apos;zidayoq
                  qo&apos;lga kiriting
                </h5>
                <p>
                  2 yil davomida 1,000 dan ziyod inson ENGLISH ZONE markazida
                  tahsil olgan
                </p>
                <button
                  className="e-btn slider__btn"
                  data-bs-toggle="modal"
                  data-bs-target="#sendMessage"
                >
                  Birinchi darsga yozilish
                </button>
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
  const [sendcunt, setSendcunt] = useState(0);
  const [message_alert, setMessage] = useState("");
  // Model component
  function SendModel() {
    return (
      <div
        class="modal fade "
        id="sendMessage"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <p class="modal-title">Kursga yozilish</p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={submitContact}>
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="contact__form-input">
                      <input
                        type="text"
                        placeholder="Ismingiz"
                        name="firstname"
                        id="firstname"
                        required
                        minLength={3}
                        maxLength={20}
                      />
                    </div>
                  </div>
                  <div className="col-xxl-12">
                    <div className="contact__form-input">
                      <input
                        type="text"
                        placeholder="Familiyangiz"
                        name="lastname"
                        id="lastname"
                        required
                        minLength="3"
                        maxLength="20"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-12">
                    <div className="contact__form-input">
                      <input
                        type="tel"
                        placeholder="Telefon raqamingiz"
                        name="phoneNumber"
                        id="phoneNumber"
                        required
                        minLength="12"
                        maxLength="13"
                      />
                    </div>
                  </div>
                  <hr />

                  <div className="col-xxl-12">
                    <div
                      dangerouslySetInnerHTML={{ __html: message_alert }}
                    ></div>
                  </div>
                  <div className="col-xxl-12">
                    <div className="contact__btn ">
                      <button type="submit" className="e-btn">
                        Xabaringizni yuboring
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Send message to backend
  const submitContact = async (event) => {
    event.preventDefault();
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    // Check if the fields are empty
    if (!firstname) {
      alertMessage("Ism kiritilmadi");
      return false;
    }
    if (!lastname) {
      alertMessage("Familiya kiritilmadi");
      return false;
    }
    if (!phoneNumber) {
      alertMessage("Telefon kiritilmadi");
      return false;
    }
    // Check if the user has sent more than 2 messages
    if (sendcunt != 2) {
      // Send the message to the backend.
      const res = await fetch("/api/send-cource", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: event.target.firstname.value,
          lastname: event.target.lastname.value,
          phoneNumber: event.target.phoneNumber.value,
        }),
      });
      // Send count of messages
      // setMessage("<div class='alert alert-success'>Xabar yuborildi</div>");
      setMessage("<div class='alert alert-success'>Xabar yuborildi</div>");
      // Send count of messages
      setSendcunt((prevValue) => prevValue + 1);
    } else {
      // Alert the user that he has sent more than 2 messages
      setMessage(
        "<div class='alert alert-danger'>Bir necha marta xabar yuborish taqiqlanadi</div>"
      );
    }
    // Message sent
    event.target.reset();
  };
  useEffect(() => {
    // background image
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
