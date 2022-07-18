import Head from "next/head";
// Components
import Footer from "../components/Footer/footer";
import Banner from "../components/Section/banner";
import Counter from "../components/Section/counter";
import SectionTest from "../components/Section/test";
import Why_area from "../components/Section/why_area";
import Testimonial from "../components/Section/testimonial";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";

const About = () => {
  return (
    <>
      <Head>
        <title>Bizning haqimizda</title>
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
