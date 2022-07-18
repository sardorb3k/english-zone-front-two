import Head from "next/head";
// Components 
import Footer from "../components/Footer/footer";
import Banner from "../components/Section/banner";
import SectionTest from "../components/Section/test";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import SectionTeachers from "../components/Section/all-teachers";

const Teachers = () => {
  return (
    <>
      <Head>
        <title>Bizning O&apos;qituvchilar</title>
      </Head>
      <Breadcrumb title="Bizning O&apos;qituvchilar" />
      <SectionTeachers />
      <SectionTest />
      <Banner />
      <Footer />
    </>
  );
};

export default Teachers;
//
