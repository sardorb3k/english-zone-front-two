import Link from "next/link";
import { useState, useEffect } from "react";
// Images
import ImageYellow from "../../static/images/shape/yellow-bg-2.png";
import ImageCourseTwo from "../../static/images/course/home-3/course-2.jpg";
import ImageCourseOne from "../../static/images/course/home-3/course-1.jpg";
import ImageCourseTeacher from "../../static/images/course/teacher/home-3/teacher-1.jpg";
const Course = () => {
  const [courses, setCourses] = useState([]);
  const [sendcunt, setSendcunt] = useState(0);
  const [message_alert, setMessage] = useState("");

  // Data fetching from server
  async function fetchCourses() {
    const request = await fetch("/api/courses");
    const data = await request.json();
    setCourses(data.data);
  }
  // Data is fetched only once
  useEffect(() => {
    // Swiper Slider
    var swiper = new Swiper(".courses__slider", {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    fetchCourses();
  }, []);
  // Data is fetched everytime the component is rendered
  function renderCourses() {
    return courses
      .map((course) => {
        return (
          <div className="col-xxl-5 english-zone-col-xl-3-5 col-lg-5 col-md-5 ml-10 course__item course__item-4 white-bg mb-40 transition-4">
            <div className="course__thumb fix w-img"></div>
            <div className="course__content-2">
              <h5 className="course__title">
                <a>{course.title}</a>
              </h5>
              <div className="course__teacher-info">
                {course.data.map((coursedata) => {
                  return (
                    <>
                      <i className="fa fa-check"></i>{" "}
                      <span>{coursedata.info}</span>
                      <br />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })
      .slice(0, 4);
  }

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

  // Main
  return (
    <>
      <section className="course__area grey-bg pt-115 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
              <div className="section__title-wrapper mb-60">
                <h2 className="section__title">
                  Barcha
                  <span className="yellow-bg">
                    {" "}
                    kurslar <img src={ImageYellow.src} alt="" />
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
              <div className="category__more mb-60 float-md-end fix">
                <Link href="/courses">
                  <a className="link-btn">
                    Barcha kurslarni ko`rish
                    <i className="far fa-arrow-right"></i>
                    <i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row ">{renderCourses()}</div>
          <div class="row">
            <div class="col-xxl-12">
              <div class="teacher__more text-center mt-30">
                <button
                  class="e-btn e-btn-border e-btn-5"
                  data-bs-toggle="modal"
                  data-bs-target="#sendMessage"
                >
                  Kursga yozilish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {SendModel()}
    </>
  );
};

export default Course;
