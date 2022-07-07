import ImageTeacherOne from '../../static/images/teacher/teacher-1.jpg';
import ImageTeacherTwo from '../../static/images/teacher/teacher-2.jpg';
import ImageTeacherFo from '../../static/images/teacher/teacher-3.jpg';
import ImageYellow from "../../static/images/shape/yellow-bg-2.png";

const Teacher = () => {
  return (
    <section className="teacher__area pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3">
            <div className="section__title-wrapper text-center mb-60">
              <h2 className="section__title">
                Barcha{" "}
                <span className="yellow-bg">
                  {" "}
                  O'qituvchilar <img
                    src={ImageYellow.src}
                    alt=""
                  />{" "}
                </span>{" "}
                <br />
              </h2>
              <p>
                You don't have to struggle alone, you've got our assistance and
                help.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
              <div className="teacher__thumb w-img fix">
                <a href="#">
                  <img src={ImageTeacherOne.src} alt="" />
                </a>
              </div>
              <div className="teacher__content">
                <h3 className="teacher__title">
                  <a href="instructor-details.html">Lillian Walsh,</a>
                </h3>
                <span> CO Founder</span>

                <div className="teacher__social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="social_facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="social_twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="social_vimeo"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
              <div className="teacher__thumb w-img fix">
                <a href="#">
                  <img src={ImageTeacherTwo.src} alt="" />
                </a>
              </div>
              <div className="teacher__content">
                <h3 className="teacher__title">
                  <a href="instructor-details.html">Kelly Franklin,</a>
                </h3>
                <span>Desginer</span>

                <div className="teacher__social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="social_facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="social_twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="social_vimeo"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
              <div className="teacher__thumb w-img fix">
                <a href="#">
                  <img src={ImageTeacherFo.src} alt="" />
                </a>
              </div>
              <div className="teacher__content">
                <h3 className="teacher__title">
                  <a href="instructor-details.html">Hilary Ouse,</a>
                </h3>
                <span>Markater</span>

                <div className="teacher__social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="social_facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="social_twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="social_vimeo"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="teacher__more text-center mt-30">
              <a href="contact.html" className="e-btn e-btn-border e-btn-5">
                Become an Instructor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Teacher;
