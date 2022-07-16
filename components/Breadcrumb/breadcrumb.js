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
        class="page__title-area page__title-height page__title-overlay d-flex align-items-center"
        data-background={Title_background.src}
      >
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="page__title-wrapper mt-110">
                <h3 class="page__title">{title}</h3>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link href="/">
                        <a>Bosh sahifa</a>
                      </Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
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
