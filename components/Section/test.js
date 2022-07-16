import ImageCtaOne from "../../static/images/cta/cta-shape-1.png";
import ImageCtaTwo from "../../static/images/cta/cta-shape-2.png";
const Test = () => {
  return (
    <section className="cta__area pb-150" id="test">
      <div className="container">
        <div className="cta__inner-3 p-relative grey-bg-2 pt-75 pb-75 fix">
          <div className="cta__shape-3">
            <img className="cta-2" src={ImageCtaOne.src} alt="" />
            <img className="cta-3" src={ImageCtaTwo.src} alt="" />
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content text-center p-relative">
                <span>ENGLISH ZONE</span>
                <h3 className="cta__title-2">
                  Ingliz tilini bilish darajasini aniqlang.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__form grey-bg-2">
                <div className="cta__form-inner">
                  <form action="#">
                    <input type="text" placeholder="Tuliq ismingiz" />
                    <input type="tel" pattern="[7-9]{1}[0-9]{9}" placeholder="Telefon raqamingiz"  />
                    <button type="submit" className="e-btn e-btn-6">
                      Testni boshlash
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Test;
