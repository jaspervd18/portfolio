import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <Marquee fade={true}>
      {technologies.map((technology) => (
        <img key={technology.name} src={technology.icon} className="w-28 h-28 rounded-full"></img>
      ))}
    </Marquee>
  );
};

export default SectionWrapper(Tech, "");
