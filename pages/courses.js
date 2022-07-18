import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import Footer from "../components/Footer/footer";
import Head from "next/head";
import SectionCourse from "../components/Section/all-courses";
import SectionBanner from "../components/Section/banner";
const Courses = () => {
  return (
    <>
      <Head>
        <title>Kurslar</title>
      </Head>
      <Breadcrumb title="Bizning kurslar" />
      <SectionCourse />
      <SectionBanner />
      <Footer />
    </>
  );
};
export default Courses;
