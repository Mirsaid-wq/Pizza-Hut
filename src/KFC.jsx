import "./KFC.css";
import kfc from "./Back/209cdf957effd9c8010c5918240e2056d6974dd6.png";
function KFC() {
  return (
    <>
      <section className="kfc">
        <img src={kfc} alt="" />
        <div className="kfc_2">
          <div className="kfc-text">
            <h2>Crispy, Every Bite Taste</h2>
            <h1>Kfc Chiken Hot Wing & French Fries</h1>
            <p>
              Wheat tortilla with spicy chicken bites, cheese sauce <br />{" "}
              tomatoes and soft cheese
            </p>
          </div>
          <div className="kfc-l">
            <div className="kfc-price">
              <h1>30</h1>
              <h2>DAY</h2>
            </div>
            <div className="kfc-price">
              <h1>22</h1>
              <h2>HOURS</h2>
            </div>
            <div className="kfc-price">
              <h1>48</h1>
              <h2>MIN</h2>
            </div>
            <div className="kfc-price">
              <h1>22</h1>
              <h2>SEC</h2>
            </div>
          </div>
          <button className="btn_2">Order Now</button>
        </div>
      </section>
    </>
  );
}
export default KFC;
