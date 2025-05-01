import "./Special.css";
import hero from "./assets/e7f50c52d935883d5b269418ac9998669fd78485.png";
function Special() {
  return (
    <>
      <section className="Special">
        <div className="special_img">
          <h2>Today</h2>
          <h1 className="h1_1">Special</h1>
          <h2>
            Beef <span>Burger</span>
          </h2>
          <button>Order Now</button>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Special;
