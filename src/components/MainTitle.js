import addsquare from "../images/addsquare.svg";
import "./MainTitle.css";

export default function MainTitle() {
  return (
    <div className="main-title">
      <h1>Internships</h1>
      <div className="main-title-btn">
        <img src={addsquare} alt="create new internship" />
        <p>create new internship</p>
      </div>
    </div>
  );
}
