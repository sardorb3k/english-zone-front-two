// Components
import $ from "jquery";
import Link from "next/link";
import { useEffect, useState } from "react";
// Images
import LogoWhite from "../../static/images/logo-white.png";

const Header = () => {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    // Get featured image
    var windowOn = $(window);
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="fal fa-plus"></i>'],
    });
    $("#sidebar-toggle").on("click", function () {
      $(".sidebar__area").addClass("sidebar-opened");
      $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function () {
      $(".sidebar__area").removeClass("sidebar-opened");
      $(".body-overlay").removeClass("opened");
    });
    windowOn.on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $("#header-sticky").removeClass("sticky");
      } else {
        $("#header-sticky").addClass("sticky");
      }
    });
  }, [featured]);
  return (
    <>
      <header>
        <style jsx>{`
          .english-zone-nav {
            margin-left: 15px;
          }
        `}</style>
        <div
          id="header-sticky"
          className="header__area header__transparent header__padding-2"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img
                          src={LogoWhite.src}
                          width={80}
                          height={80}
                          alt="logo"
                          className="logo-white"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 d-none d-xl-block">
                <div className="main-menu main-menu-3">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href="/courses">Kurslar</Link>
                      </li>
                      <li>
                        <Link href="/about">Biz haqimizda</Link>
                      </li>
                      <li className="english-zone-nav">
                        <Link href="/contact">Biz bilan bog`lanish</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="header__btn header__btn-2 ml-30 d-none d-sm-block">
                    <Link href="/#test">
                      <a className="e-btn">TEST TOPSHIRISH</a>
                    </Link>
                  </div>
                  <div className="sidebar__menu d-xl-none">
                    <div
                      className="sidebar-toggle-btn sidebar-toggle-btn-white ml-30"
                      id="sidebar-toggle"
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="sidebar__area">
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button className="sidebar__close-btn" id="sidebar__close-btn">
              <span>
                <i className="fal fa-times"></i>
              </span>
              <span>close</span>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="logo mb-40">
              <Link href="/">
                <a>
                  <img src={LogoWhite.src} alt="logo" />
                </a>
              </Link>
            </div>
            <div className="mobile-menu fix"></div>

            <div className="sidebar__cart mt-30">
              <a href="#">
                <div className="header__cart-icon">
                  <svg viewBox="0 0 24 24">
                    <circle className="st0" cx="9" cy="21" r="1" />
                    <circle className="st0" cx="20" cy="21" r="1" />
                    <path
                      className="st0"
                      d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"
                    />
                  </svg>
                </div>
                <span className="cart-item">2</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
