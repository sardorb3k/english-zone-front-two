import Image from "next/image";
import ImageStudentFa from "../../static/images/about/student-4.jpg";
import ImageStudentFo from "../../static/images/about/student-3.jpg";
import ImageStudentTwo from "../../static/images/about/student-2.jpg";
import ImageStudentOne from "../../static/images/about/student-1.jpg";
import ImageAbout from "../../static/images/about/about.jpg";
import ImageAboutBanner from "../../static/images/about/about-banner.jpg";
import ImageYellow from "../../static/images/shape/yellow-bg-2.png";
const SectionAbout = () => {
  return (
    <section className="about__area pt-120 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
            <div className="about__thumb-wrapper">
              <div className="about__review">
                <h5>
                  <span>8,200+</span> five ster reviews
                </h5>
              </div>
              <div className="about__thumb ml-100">
                <img src={ImageAbout.src} alt="thumb" />
              </div>
              <div className="about__banner mt--210">
                <img src={ImageAboutBanner.src} />
              </div>
              <div className="about__student ml-270 mt--80">
                <a href="#">
                  <img src={ImageStudentFa.src} alt="" />
                  <img src={ImageStudentFo.src} alt="" />
                  <img src={ImageStudentTwo.src} alt="" />
                  <img src={ImageStudentOne.src} alt="" />
                </a>
                <p>
                  Join over <span>4,000+</span> students
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content pl-70 pr-60 pt-25">
              <div className="section__title-wrapper mb-25">
                <h2 className="section__title">
                  Achieve your <br />
                  <span className="yellow-bg-big">
                    Goals <img src={ImageYellow.src} alt="" />
                  </span>{" "}
                  with Educal{" "}
                </h2>
                <p>
                  Lost the plot bobby such a fibber bleeding bits and bobs don't
                  get shirty with me bugger all mate chinwag super pukka william
                  barney, horse play buggered.
                </p>
              </div>
              <div className="about__list mb-35">
                <ul>
                  <li className="d-flex align-items-center">
                    {" "}
                    <i className="icon_check"></i> Upskill your organization.
                  </li>
                  <li className="d-flex align-items-center">
                    {" "}
                    <i className="icon_check"></i> Access more then 100K online
                    courses
                  </li>
                  <li className="d-flex align-items-center">
                    {" "}
                    <i className="icon_check"></i> Learn the latest skills
                  </li>
                </ul>
              </div>
              <a href="contact.html" className="e-btn e-btn-border">
                apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
