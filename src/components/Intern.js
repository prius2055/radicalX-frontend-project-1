import calendar from "../images/calendar.svg";
import funnel from "../images/funnel.svg";

import "./Intern.css";

export default function Intern() {
  return (
    <div className="intern-container">
      <div className="intern-note">
        <h3>Internship insights</h3>
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic
        </p>
      </div>
      <div className="intern-detail">
        <div className="intern-action">
          <div className="intern-period">
            <button className="btn-week">This week</button>
            <button className="btn-month">This month</button>
          </div>
          <div className="btn-dates">
            <img src={calendar} alt="calendar" />
            <button>Select dates</button>
          </div>
        </div>
        <div className="intern-graph">
          <img src={funnel} alt="graph" />
        </div>
      </div>
    </div>
  );
}
