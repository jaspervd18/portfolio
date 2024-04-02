import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Marquee from "./Marquee";

const Tech = () => {
  return (
    <Marquee fade={true}>
      {technologies.map((technology) => (
        <img key={technology.name} src={technology.icon} className="w-28 h-28" />
      ))}
    </Marquee>
  );
};

export default SectionWrapper(Tech, "");
