import { useState, useEffect } from "react";
// Images
import ImageYellow from "../../static/images/shape/yellow-bg-2.png";
const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  // Data fetching from server
  async function fetchTeachers() {
    const request = await fetch("/api/teachers");
    const data = await request.json();
    setTeachers(data.data);
  }
  useEffect(() => {
    fetchTeachers();
  }, []);
  return (
    <section className="teacher__area pt-115 pb-100">
      <div className="container">
        <div className="row">
          {teachers.map((item, index) => (
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={index}>
              <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                <div className="teacher__thumb w-img fix">
                  <a href="#">
                    <img src={`/api/images/${item.imagePath}`} alt="" />
                  </a>
                </div>
                <div className="teacher__content">
                  <h3 className="teacher__title">
                    <a href="instructor-details.html">{item.fullName}</a>
                  </h3>
                  <br />
                  <span> IELTS: {item.IELTS}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Teacher;
