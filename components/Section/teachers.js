import Image from "next/image";
import { useState, useEffect } from "react";
// Image
import ImageYellow from "../../static/images/shape/yellow-bg-2.png";
const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [visible, setVisible] = useState(3);
  // UseState for pagination
  const [isLoading, setLoading] = useState(true);
  // Show more teachers on click
  const showMoreItems = () => {
    if (visible != teachers.length && teachers.length - visible > 3) {
      setVisible((prevValue) => prevValue + 3);
    } else {
      setVisible((prevValue) => prevValue + teachers.length - visible);
      setLoading(false);
    }
  };
  // Data fetching from server
  async function fetchTeachers() {
    const request = await fetch("/api/teachers");
    const data = await request.json();
    setTeachers(data.data);
  }
  // Data is fetched only once
  useEffect(() => {
    fetchTeachers();
  }, []);

  // Image Loader for Teachers
  const myLoader = ({ src }) => {
    return `api/images/${src}`;
  };
  return (
    <section className="teacher__area pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3">
            <div className="section__title-wrapper text-center mb-60">
              <h2 className="section__title">
                Bizning{" "}
                <span className="yellow-bg">
                  {" "}
                  O&apos;qituvchilar <img src={ImageYellow.src} alt="" />{" "}
                </span>{" "}
                <br />
              </h2>
              <p>Har bir o&apos;quvchimiz IELTS 7+ dan bahoga ega</p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Teachers map */}
          {teachers.slice(0, visible).map((item, index) => (
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={index}>
              <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                <div className="teacher__thumb w-img fix">
                  <Image
                    loader={myLoader}
                    src={item.imagePath}
                    width={500}
                    height={500}
                    alt={item.fullName}
                  />
                </div>
                <div className="teacher__content">
                  <h3 className="teacher__title">{item.fullName}</h3>
                  <br />
                  <span> Tajriba: {item.experience || 1} yil</span>
                  <br />
                  <span> IELTS: {item.IELTS}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isLoading && (
          <div className="row">
            <div className="col-xxl-12">
              <div className="teacher__more text-center mt-30">
                <button
                  onClick={showMoreItems}
                  className="e-btn e-btn-border e-btn-5"
                >
                  Boshqa o&apos;qituvchilar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Teacher;
