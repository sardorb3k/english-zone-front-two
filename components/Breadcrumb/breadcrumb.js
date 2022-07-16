import Link from "next/link";
import Title_background from "../../static/images/background/back-2.jpg";
import { useEffect, useState } from "react";
import $ from "jquery";
const Breadcrumb = ({ title }) => {
  const [featured, setFeatured] = useState(null);
  useEffect(() => {
    $("[data-background").each(function () {
      $(this).css(
        "background-image",
        "url( " + $(this).attr("data-background") + "  )"
      );
      $(this).css("background-size", "cover");
    });
  }, [featured]);
  return (
    <>
      <section
        className="page__title-area page__title-height page__title-overlay d-flex align-items-center"
        data-background={Title_background.src}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page__title-wrapper mt-110">
                <h3 className="page__title">{title}</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <a>Bosh sahifa</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
//
