import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../lib/motion";
import { SectionWrapper } from "../hoc";
import React from "react";
import Icon from "./Icon";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{
        max: 10,
        scale: 1.05,
        speed: 450,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)"
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card es"
      >
        <div
          options={{
            max: 1,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-10 min-h-[240px] flex justify-evenly items-center flex-col"
        >
          <Icon icon={icon} className='text-white w-16 h-16' />
          <h3 className="text-white text=[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am currently studying Applied Computer Sciences at the University of
        Applied Sciences and Arts (Hogeschool Gent). I am a passionate developer who is
        always looking for new challenges. I love to learn new things and adapt
        these to my projects.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
