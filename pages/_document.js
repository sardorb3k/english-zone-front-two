import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
// import $ from "jquery";
// import "swiper/css";
import Header from "../components/Header/header";
import { useEffect, useState } from "react";
export default function Document() {
  const [featured, setFeatured] = useState(null);

  return (
    <Html>
      <Head />
      <body>
        <Header />
        <div className="body-overlay"></div>
        <main>
          <Main />
        </main>
        <NextScript />
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script> */}
        <script src="static/js/vendor/jquery-3.5.1.min.js"></script>
        <script src="static/js/swiper-bundle.js"></script>
        <script src="static/js/ajax-form.js"></script>
        {/* <script src="static/js/backToTop.js"></script> */}
        <script src="static/js/bootstrap.bundle.min.js"></script>
        <script src="static/js/imagesloaded.pkgd.min.js"></script>
        <script src="static/js/isotope.pkgd.min.js"></script>
        <script src="static/js/jquery.counterup.min.js"></script>
        <script src="static/js/jquery.fancybox.min.js"></script>
        <script src="static/js/jquery.meanmenu.js"></script>
        <script src="static/js/owl.carousel.min.js"></script>
        <script src="static/js/parallax.min.js"></script>
        <script src="static/js/wow.min.js"></script>
      </body>
    </Html>
  );
}
