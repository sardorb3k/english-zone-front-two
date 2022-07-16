import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import Footer from "../components/Footer/footer";
import Head from "next/head";

const Contact = () => {
  const [information, setInformation] = useState([]);

  async function fetchInformation() {
    const request = await fetch("/api/center");
    const data = await request.json();
    setInformation(data);
  }

  useEffect(() => {
    fetchInformation();
  }, []);
  return (
    <>
      <Head>
        <title>Biz bilan bog'lanish</title>
      </Head>
      <Breadcrumb title="Biz bilan bog`lanish" />
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="section__title">
                    <span className="yellow-bg yellow-bg-big">
                      Aloqa
                      <img src="static/images/shape/yellow-bg.png" alt="" />
                    </span>{" "}
                    oling
                  </h2>
                  <p>
                    Savolingiz bormi yoki shunchaki salom aytmoqchimisiz? Biz
                    eshitishni istardik sizdan.
                  </p>
                </div>
                <div className="contact__form">
                  <form action="https://themepure.net/template/educal/educal/assets/mail.php">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            type="text"
                            placeholder="To'liq ismingiz"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            type="tel"
                            placeholder="Telefoningiz"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input
                            type="text"
                            placeholder="Mavzu"
                            name="subject"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea
                            placeholder="Xabaringizni kiriting"
                            name="message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn">
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
            <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="contact__info white-bg p-relative z-index-1">
                <div className="contact__shape">
                  <img
                    className="contact-shape-1"
                    src="static/images/contact/contact-shape-1.png"
                    alt=""
                  />
                  <img
                    className="contact-shape-2"
                    src="static/images/contact/contact-shape-2.png"
                    alt=""
                  />
                  <img
                    className="contact-shape-3"
                    src="static/images/contact/contact-shape-3.png"
                    alt=""
                  />
                </div>
                <div className="contact__info-inner white-bg">
                  <ul>
                    <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          <svg className="map" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"
                            />
                            <circle className="st0" cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>ENGLISH ZONE Idorasi</h4>
                          <p>
                            <a
                              target="_blank"
                              href="https://goo.gl/maps/rur8SJ5PmJKAriKU6"
                            >
                              Navoiy shoh ko`chasi, Buxoro, O`zbekiston
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    {/* <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          <svg className="mail" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"
                            />
                            <polyline
                              className="st0"
                              points="22,6 12,13 2,6 "
                            />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>Email us directly</h4>
                          <p>
                            <a href="https://themepure.net/cdn-cgi/l/email-protection#d0a3a5a0a0bfa2a490b5b4a5b3b1bcfeb3bfbd">
                              <span
                                className="__cf_email__"
                                data-cfemail="17646267677865635772736274767b3974787a"
                              >
                                [email&#160;protected]
                              </span>
                            </a>
                          </p>
                          <p>
                            <a href="https://themepure.net/cdn-cgi/l/email-protection#ea83848c85aa8f8e9f898b86c4898587">
                              {" "}
                              <span
                                className="__cf_email__"
                                data-cfemail="771e1911183712130214161b5914181a"
                              >
                                [email&#160;protected]
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </li> */}
                    <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          <svg className="call" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z"
                            />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>Telefon</h4>
                          <p>
                            <a href={`tel:${information.phoneNumber}`}>
                              {information.phoneNumber}
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="contact__social pl-30">
                    <h4>Bizni kuzatib boring</h4>
                    <ul>
                      <li>
                        <a href="#" className="fb">
                          <i className="social_facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw">
                          <i className="social_twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="pin">
                          <i className="social_pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1533.560713870213!2d64.42304754784651!3d39.75938199856671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50076685c6a62d%3A0x28acbba34f0d5f33!2sENGLISH%20ZONE!5e0!3m2!1suz!2s!4v1657729263772!5m2!1suz!2s"
          width="100%"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
