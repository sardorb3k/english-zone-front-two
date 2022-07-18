import { useState, useEffect } from "react";
// Images
import ImageYellow from "../../static/images/shape/yellow-bg-2.png";
const Courses = () => {
  const [course, setCourses] = useState([]);
  // Data fetching from server
  async function fetchCourse() {
    const request = await fetch("/api/courses");
    const data = await request.json();
    setCourses(data.data);
  }
  useEffect(() => {
    fetchCourse();
  }, []);
  return (
    <section className="teacher__area pt-115 pb-100">
      <div className="container">
        <div className="row">
          {/* Teachers map */}
          {course.map((course) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
export default Courses;
