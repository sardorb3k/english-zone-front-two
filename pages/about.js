import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import Footer from "../components/Footer/footer";
import Banner from "../components/Section/banner";
import Counter from "../components/Section/counter";
import Testimonial from "../components/Section/testimonial";
import Why_area from "../components/Section/why_area";
import SectionTest from "../components/Section/test";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Bizning O'qituvchilar</title>
      </Head>
      <Breadcrumb title="Biz haqimizda" />
      <Testimonial />
      <Why_area />
      <Counter />
      <SectionTest />
      <Banner />
      <Footer />
    </>
  );
};

export default About;
//
