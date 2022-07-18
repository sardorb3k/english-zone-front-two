import $ from "jquery";
import { useEffect, useState } from "react";
const Banner = () => {
  const [courses, setCourses] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [sendcunt, setSendcunt] = useState(0);
  const [message_alert, setMessage] = useState("");
  // Data fetching from server
  async function fetchCourses() {
    const request = await fetch("/api/courses");
    const data = await request.json();
    setCourses(data.data);
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
  useEffect(() => {
    // Get featured image
    $("[data-background").each(function () {
      $(this).css(
        "background-image",
        "url( " + $(this).attr("data-background") + "  )"
      );
      $(this).css("background-size", "cover");
    });

    fetchCourses();
  }, [featured]);

  const CourseBanner = () => {
    return courses
      .map((cource) => (
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div
            className="banner__item p-relative mb-40"
            data-background="static/images/banner/banner-bg-1.jpg"
          >
            <div className="banner__content">
              <span>Yangi</span>
              <h3 className="banner__title">{cource.title}</h3>
              <button
                className="e-btn e-btn-2"
                data-bs-toggle="modal"
                data-bs-target="#sendMessage"
              >
                Kursga yozilish
              </button>
            </div>
            <div className="banner__thumb d-none d-sm-block d-md-none d-lg-block">
              <img src={`static/images/banner/banner-img-2.png`} alt="" />
            </div>
          </div>
        </div>
      ))
      .slice(0, 2);
  };

  return (
    <>
      <section className="banner__area pb-110">
        <div className="container">
          <div className="row">{CourseBanner()}</div>
        </div>
      </section>
      {SendModel()}
    </>
  );
};

export default Banner;
