import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import Footer from "../components/Footer/footer";
import Banner from "../components/Section/banner";
import SectionTest from "../components/Section/test";
import SectionTeachers from "../components/Section/all-teachers";
import Head from "next/head";

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
