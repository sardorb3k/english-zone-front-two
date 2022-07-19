import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
// Components
import Footer from "../../components/Footer/footer";
import SectionBanner from "../../components/Section/banner";
import Breadcrumb from "../../components/Breadcrumb/breadcrumb";
import SectionCourse from "../../components/Section/all-courses";
import Title_background from "../../static/images/background/back-2.jpg";
import ImageCtaOne from "../../static/images/cta/cta-shape-1.png";
import ImageCtaTwo from "../../static/images/cta/cta-shape-2.png";
const Courses = (props) => {
  const [quiz, setQuiz] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [counter, setCounter] = useState(0);
  const { query } = useRouter();
  // Data fetching from server
  async function fetchQuiz() {
    const id = query.id;
    console.log(id)
    const request = await fetch("/api/test/quiz?id=" + id);
    const data = await request.json();
    setQuiz(data.data);
  }

  useEffect(() => {
    // Get featured image
    $("[data-background").each(function () {
      $(this).css(
        "background-image",
        "url( " + $(this).attr("data-background") + "  )"
      );
      $(this).css("background-size", "cover");
    });
    setInterval(() => setCounter((prevValue) => prevValue + 1), 60000);
    fetchQuiz();
  }, [featured]);

  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <section
        className="page__title-area page__title-others-height page__title-overlay d-flex align-items-center"
        data-background={Title_background.src}
      ></section>
      <div className="row pt-115">
        <div className="col-xxl-6 offset-xxl-3">
          <div className="section__title-wrapper text-center mb-60">
            <h2 className="section__title">
              Test{" "}
              <span className="yellow-bg">
                boshlandi
                <img src="static/images/shape/yellow-bg-2.png" alt="" />
              </span>
              <br />
            </h2>
            <p>
              Savollar soni: <span>10</span>
              <br />
              Test boshlanganiga <span>{counter}</span> daqiqa bo'ldi
            </p>
          </div>
        </div>
      </div>
      <section className="cta__area pb-150" id="test">
        <div className="container">
          <div className="cta__inner-3 p-relative grey-bg-2 pt-75 pb-75 fix">
            <div className="cta__shape-3">
              <img className="cta-2" src={ImageCtaOne.src} alt="" />
              <img className="cta-3" src={ImageCtaTwo.src} alt="" />
            </div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="cta__content text-center p-relative">
                  <span>ENGLISH ZONE</span>
                  <h3 className="cta__title-2">
                    {quiz}
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="cta__form grey-bg-2">
                  <div className="cta__form-inner">111111</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Footer />
    </>
  );
};
export default Courses;
