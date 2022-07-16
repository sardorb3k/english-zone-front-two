import { Html, Head, Main, NextScript } from "next/document";
import $ from "jquery";
import loader from "../styles/loader";

import Header from "../components/Header/header";

// import Logo from "../static/images/logo-black.png";
export default function Document() {
  return (
    <Html>
      <Head>
        <style>{loader}</style>
      </Head>
      <body>
        <Header />
        <div id={"globalLoader"}>
          <div className="loader">
            <img src="static/images/logo-black.png" alt="Logo" width={90} height={90}/>
          </div>
        </div>
        <div className="body-overlay"></div>
        <main>
          <Main />
        </main>
        <NextScript />
        <script src="static/js/vendor/jquery-3.5.1.min.js" async />
        <script src="static/js/swiper-bundle.js" async />
        {/* <script src="static/js/ajax-form.js" async /> */}
        <script src="static/js/bootstrap.bundle.min.js" async />
        <script src="static/js/imagesloaded.pkgd.min.js" async />
        <script src="static/js/isotope.pkgd.min.js" async />
        <script src="static/js/jquery.counterup.min.js" async />
        <script src="static/js/jquery.fancybox.min.js" async />
        <script src="static/js/jquery.meanmenu.js" async />
        <script src="static/js/owl.carousel.min.js" async />
        <script src="static/js/parallax.min.js" async />
        <script src="static/js/wow.min.js" async />
      </body>
    </Html>
  );
}
