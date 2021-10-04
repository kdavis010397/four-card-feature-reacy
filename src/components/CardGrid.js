import classes from "./CardGrid.module.css";
import teamBuilder from "../images/icon-team-builder.svg";
import supervisor from "../images/icon-supervisor.svg";
import karma from "../images/icon-karma.svg";
import calculator from "../images/icon-calculator.svg";

import Card from "./Card";

const CardGrid = () => {
  return (
    <div className={classes.cards}>
      <Card id="team-builder">
        <h2>Team Builder</h2>
        <p>
          Scans our talent network to create the optimal team for your project
        </p>
        <img src={teamBuilder} alt="Browser and Up Arrow" />
      </Card>
      <Card id="calculator">
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src={calculator} alt="Calculator" />
      </Card>
      <Card id="supervisor">
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
        <img src={supervisor} alt="Magnifying Glass" />
      </Card>
      <Card id="karma">
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src={karma} alt="Lightbulb" />
      </Card>
    </div>
  );
};

export default CardGrid;
