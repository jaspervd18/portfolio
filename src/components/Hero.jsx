import { motion } from "framer-motion";

import { styles } from "../styles";
import { profielfoto } from "../assets";
import { contacts } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4790FC]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-gray-700`}>
            Hi, I'm <span className="text-[#4790FC]">Jasper</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-500`}>
            I develop web-, mobile- and software applications
          </p>
          <div className="flex flex-row gap-1 mt-4">
            {contacts.map(
              ({ name, icon, social_media_link: link }) =>
                link && (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    <img src={icon} className="h-8 w-8 hover:scale-105 transition-transform duration-300 ease-in-out"/>
                  </a>
                )
            )}
          </div>
        </div>

        <img
          src={profielfoto}
          alt="Profile picture"
          className="hidden md:block w-40 h-40 lg:w-64 lg:h-64 rounded-full mx-auto shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-fit h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
