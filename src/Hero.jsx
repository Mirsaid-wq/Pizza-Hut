import "./Hero.css";
import hero from "./assets/e7f50c52d935883d5b269418ac9998669fd78485.png";
function Hero() {
  return (
    <>
      <section>
        <div>
          <h3>crispy, every bite taste</h3>
          <h1>hot spicy chiken burger</h1>
          <h2>Limited offer/ 5$</h2>
          <button>Order Now</button>
        </div>
        <img src={hero} alt="" />
      </section>
    </>
  );
}
export default Hero;
