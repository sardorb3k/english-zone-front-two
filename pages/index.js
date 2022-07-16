import Head from "next/head";
import Image from "next/image";
// Components
import SectionSlider from "../components/Section/slider";
import SectionAbout from "../components/Section/about";
import Footer from "../components/Footer/footer";
import SectionCourses from "../components/Section/course";
import SectionTeachers from "../components/Section/teachers";
import SectionTest from "../components/Section/test";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bosh sahifa</title>
      </Head>
      <SectionSlider />
      {/* <SectionAbout /> */}
      <SectionCourses />
      <SectionTeachers />
      <SectionTest />
      <Footer />
    </>
  );
}
