import { StarIcon } from "lucide-react";
import "./Piter.css";
import icon_1 from "./Back/d81fe94033689aff0af32c3543feb5c1fe356897.jpg";
import pitre_img from "./Back/ac1fe9eae69759b411513e0aff41f581b08eec61.jpg";
import icon_2 from "./Back/195c68aa00c4eb94ee3542e370b713655d26a1b9.jpg";

function Piter() {
  return (
    <>
      <section className="piter">
        <h2>Piter Bowman</h2>
        <h3>Business CEO & co founder</h3>
        <h1>
          “Thank you for dinner last night. It was amazing!! I have say it’s{" "}
          <br /> the best meal I have had in quite some time. will definitely be{" "}
          <br /> seeing more eating next year.”
        </h1>
        <div className="star">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="icons">
          <img src={icon_1} alt="" />
          <img src={pitre_img} alt="" />
          <img src={icon_2} alt="" />
        </div>
      </section>
    </>
  );
}
export default Piter;
