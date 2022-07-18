import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
// Components
import Footer from "../components/Footer/footer";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
const Contact = () => {
  // Data fetching from server
  const [information, setInformation] = useState([]);
  const [sendcunt, setSendcunt] = useState(0);
  const [social, setSocial] = useState([]);
  const [message_alert, setMessage] = useState("");
  // Get information from the backend
  async function fetchInformation() {
    const request = await fetch("/api/center");
    const data = await request.json();
    setInformation(data.data);
    setSocial(data.data.social);
  }

  useEffect(() => {
    fetchInformation();
  }, []);

  // Alert message
  const alertMessage = (message) => {
    setMessage("<div class='alert alert-danger'>" + message + "</div>");
  };

  // Send message to backend
  const submitContact = async (event) => {
    event.preventDefault();
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const message = document.querySelector("#message").value;
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
    if (!message) {
      alertMessage("Xabar kiritilmadi");
      return false;
    }
    // Check if the user has sent more than 2 messages
    if (sendcunt != 2) {
      // Send the message to the backend.
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: event.target.firstname.value,
          lastname: event.target.lastname.value,
          phoneNumber: event.target.phoneNumber.value,
          message: event.target.message.value,
        }),
      });
      // Send count of messages
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
  return (
    <>
      <Head>
        <title>Biz bilan bog&apos;lanish</title>
      </Head>
      <Breadcrumb title="Biz bilan bog'lanish" />
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="section__title">
                    <span className="yellow-bg yellow-bg-big">
                      Xabar
                      <img src="static/images/shape/yellow-bg.png" alt="" />
                    </span>{" "}
                    qoldirish
                  </h2>
                  <p>
                    Savolingiz bormi yoki shunchaki salom aytmoqchimisiz? Biz
                    eshitishni istardik sizdan.
                  </p>
                </div>
                <div className="contact__form">
                  <form onSubmit={submitContact}>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-md-6">
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
                      <div className="col-xxl-6 col-xl-6 col-md-6">
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
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea
                            placeholder="Xabaringizni kiriting"
                            name="message"
                            id="message"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div
                          dangerouslySetInnerHTML={{ __html: message_alert }}
                        ></div>
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
                            <a href="https://goo.gl/maps/rur8SJ5PmJKAriKU6">
                              {information.address}
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
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
                          <h4>Elektron pochta</h4>
                          <p>
                            <Link href={`mailto:${information.email}`}>
                              <span
                                className="__cf_email__"
                                data-cfemail="17646267677865635772736274767b3974787a"
                              >
                                {information.email}
                              </span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
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
                      {social.map((item) =>
                        item.type === "instagram" ? (
                          <li>
                            <Link href={`https://instagram.com/${item.link}`}>
                              <a className="pin">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-instagram"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                              </a>
                            </Link>
                          </li>
                        ) : item.type === "telegram" ? (
                          <li>
                            <Link href={`https://t.me/${item.link}`}>
                              <a className="tw">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-telegram"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                                </svg>
                              </a>
                            </Link>
                          </li>
                        ) : item.type === "facebook" ? (
                          <li>
                            <a href={item.link} className="fb">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-facebook"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                              </svg>
                            </a>
                          </li>
                        ) : null
                      )}
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
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
