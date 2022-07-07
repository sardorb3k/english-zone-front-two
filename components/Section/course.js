import ImageYellow from "../../static/images/shape/yellow-bg-2.png";
import ImageCourseOne from "../../static/images/course/home-3/course-1.jpg";
import ImageCourseTeacher from "../../static/images/course/teacher/home-3/teacher-1.jpg";
import ImageCourseTwo from "../../static/images/course/home-3/course-2.jpg";
const Course = () => {
  return (
    <section className="course__area grey-bg pt-115 pb-120">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
            <div className="section__title-wrapper mb-60">
              <h2 className="section__title">
               Barcha 
                <span className="yellow-bg">
                  {" "}
                  kurslar <img
                    src={ImageYellow.src}
                    alt=""
                  />
                </span>
              </h2>
              <p>
                kurslarim barcha jahon sifatlariga kuri keladi......
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
            <div className="category__more mb-60 float-md-end fix">
              <a href="course-grid.html" className="link-btn">
              Barcha kurslarni ko'rish
                <i className="far fa-arrow-right"></i>
                <i className="far fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="course__item course__item-2 white-bg mb-30 transition-3">
              <div className="course__thumb fix w-img">
                <a href="course-details.html">
                  <img src={ImageCourseOne.src} alt="" />
                </a>
              </div>
              <div className="course__content-2">
                <h3 className="course__title-2">
                  <a href="course-details.html">
                    Product Manager Learn the Skills & job.
                  </a>
                </h3>
                <p>
                  Top instructors from around the world teach millions of
                  students on Quillow. Get unlimited.
                </p>
                <div className="course__bottom d-sm-flex justify-content-between align-items-center">
                  <div className="course__teacher-2 d-flex align-items-center">
                    <div className="course__teacher-thumb-2 mr-20">
                      <img
                        src={ImageCourseTeacher.src}
                        alt=""
                      />
                      <div className="course__teacher-rating">
                        <i className="icon_star"></i>
                      </div>
                    </div>
                    <div className="course__teacher-info">
                      <h6>
                        <a href="instructor-details.html">Jim Séchen</a>
                      </h6>
                      <span>Product Designer</span>
                    </div>
                  </div>
                  <div className="course__meta">
                    <div className="course__lesson">
                      <span>
                        <i className="far fa-book-alt"></i>43 Lesson
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="course__item course__item-2 white-bg mb-30 transition-3">
              <div className="course__thumb fix w-img">
                <a href="course-details.html">
                  <img src={ImageCourseTwo.src} alt="" />
                </a>
              </div>
              <div className="course__content-2">
                <h3 className="course__title-2">
                  <a href="course-details.html">
                    The Importance Of Intrinsic for Students.
                  </a>
                </h3>
                <p>
                  Top instructors from around the world teach millions of
                  students on Quillow. Get unlimited.
                </p>
                <div className="course__bottom d-sm-flex justify-content-between align-items-center">
                  <div className="course__teacher-2 d-flex align-items-center">
                    <div className="course__teacher-thumb-2 mr-20">
                      <img
                        src={ImageCourseTeacher.src}
                        alt=""
                      />
                      <div className="course__teacher-rating">
                        <i className="icon_star"></i>
                      </div>
                    </div>
                    <div className="course__teacher-info">
                      <h6>
                        <a href="instructor-details.html">Craig Weber</a>
                      </h6>
                      <span>UX Designer</span>
                    </div>
                  </div>
                  <div className="course__meta">
                    <div className="course__lesson">
                      <span>
                        <i className="far fa-book-alt"></i>30 Lesson
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
