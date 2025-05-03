import "./Deliver.css";
import curyer from "./Back/341b78e5f384b5b21538437c6ee98f24b5fed0cb.png";
import burgers from "./Back/Container (1).png";

function Deliver() {
  return (
    <>
      <div className="deliver_2">
        <section className="deliver">
          <div>
            <h2>Crispy, Every Bite Taste</h2>
            <h1>
              30 Minutes Fast <br /> <span>Delivery</span> Challenge
            </h1>
            <button>Order Now</button>
          </div>
          <img src={curyer} alt="" />
        </section>
      </div>
      <div className="deliver_img">
        <img src={burgers} alt="" />
      </div>
    </>
  );
}
export default Deliver;
