import Head from "next/head";
// Components
import Footer from "../components/Footer/footer";
import SectionTest from "../components/Section/test";
import SectionSlider from "../components/Section/slider";
import SectionCourses from "../components/Section/course";
import SectionTeachers from "../components/Section/teachers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bosh sahifa</title>
      </Head>
      <SectionSlider />
      <SectionCourses />
      <SectionTeachers />
      <SectionTest />
      <Footer />
    </>
  );
}
