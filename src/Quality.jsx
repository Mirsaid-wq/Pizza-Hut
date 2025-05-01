import "./Quality.css";
import quality from "./assets/Icon.png";
import hero from "./assets/e7f50c52d935883d5b269418ac9998669fd78485.png";

function Quality() {
  return (
    <>
      <section className="quality">
        <div className="quality_2">
          <div className="quality_1">
            <img src={quality} alt="" />
            <h2>Super Quality Food</h2>
            <p>
              A team of dreamers and doers building unique interactive music and
              art
            </p>
          </div>
          <div className="quality_1">
            <img src={quality} alt="" />
            <h2>ORIGINAL RECIPES</h2>
            <p>
              A team of dreamers and doers building unique interactive music and
              art
            </p>
          </div>
          <div className="quality_1">
            <img src={quality} alt="" />
            <h2>QUICK FAST DELIVERY</h2>
            <p>
              A team of dreamers and doers building unique interactive music and
              art
            </p>
          </div>
          <div className="quality_1">
            <img src={quality} alt="" />
            <h2>100% FRESH FOODS</h2>
            <p>
              A team of dreamers and doers building unique interactive music and
              art
            </p>
          </div>
        </div>
      </section>
      <section className="About">
        <img src={hero} alt="" />
        <div>
          <h3>About Our Food</h3>
          <h1>
            Where Quality Meet Excellent <span>Service.</span>
          </h1>
          <p>
            Its the perfect dining experience where every dish is crafted with
            fresh, high-quality Experience quick and efficient service that
            ensures your food is servead fresh Its the dining experience where
            every dish is crafted with fresh, high-quality ingredients
          </p>
          <button>More About Us</button>
          <h3>BRENDON GARREY</h3>
          <p>CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.</p>
        </div>
      </section>
    </>
  );
}
export default Quality;
