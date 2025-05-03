import "./Special.css";
import hero from "./assets/e7f50c52d935883d5b269418ac9998669fd78485.png";
function Special() {
  return (
    <>
      <section className="Special">
        <div className="special_img">
          <div className="special_2">
            <h2>Today</h2>
            <h1 className="h1_1">Special</h1>
            <h2>
              Beef <span>Burger</span>
            </h2>
            <button>Order Now</button>
          </div>{" "}
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
        <div className="special_img_2">
          <div className="special_2">
            <h3>Crispy, Every Bite Taste</h3>
            <h2>FAST Foods Meal </h2>
            <p>The mouth-watering aroma of sizzling burgers</p>
            <button>Order Now</button>
          </div>{" "}
        </div>
      </section>
    </>
  );
}
export default Special;
