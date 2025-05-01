import "./Popular.css";
import chicken_2 from "./Images/aaf5fa78eb76c711c2c1690530ef1d59e34a7bf7.png";
import pizza_2 from "./Images/837873ce8590045eb33a992f190073e4ad282082.png";
import best from "./Images/f6678b9d990cbedbb7d71ab432644764ee7cf316.png";
import Back_1 from "./Images/19aec504c60f92c206647cf37419207ce6dcd606.jpg";
import Container from "./Images/Container.png";
function Popular() {
  return (
    <>
      <section className="popular">
        <div>
          <h2>CRISPY, EVERY BITE TASTE</h2>
          <h1>
            Tending Food Combo Offer ess <span> 20%</span>
          </h1>
          <h3>
            A team of dreamers and doers building unique interactive music and
            art festivals.
          </h3>
          <div className="btns">
            <button className="btn-1">
              {" "}
              <img src={chicken_2} alt="" />
              30% off 4pcs hot crispy & 8 pcs wings
            </button>
            <button className="btn-2">
              {" "}
              <img src={pizza_2} alt="" />
              20% off tasty pizza with drink
            </button>
            <button className="btn-3">
              <img src={best} alt="" />
              2pcs humbergur with drinks & sauce
            </button>
          </div>
        </div>
        <img src={Back_1} alt="" />
      </section>
      <img className="container_2" src={Container} alt="" />
    </>
  );
}
export default Popular;
