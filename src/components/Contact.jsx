import { useState, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../lib/motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../lib/motion";
import { contacts } from "../constants";

const ContactCard = ({ index, name, icon, social_media_link }) => {
  return (
    <Tilt
      options={{
        max: 10,
        scale: 1.05,
        speed: 450,
      }}
      className="w-16 xs:w-20"
    >
      <motion.div
        variants={fadeIn("top", "spring", 0.5 * index, 0.75)}
        className="p-[1px] rounded-[20px]"
      >
        <div
          options={{
            max: 1,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] items-center px-2 py-2"
        >
          <a href={social_media_link} target="_blank">
            <img
              src={icon}
              alt={name}
              className="w-12 h-12 xs:w-16 xs:h-16 object-contain"
            />
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_bclo603",
        "template_z8d1mwj",
        {
          from_name: form.name,
          to_name: "Jasper",
          from_email: form.email,
          to_email: "jasper.vandyck@hotmail.be",
          message: form.message,
        },
        "9lD_v8G0JYAEg2zfK"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className=" xl:flex-row flex-col flex gap-5 overflow-hidden">
        <div
          className="flex-[0.75]"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-secondary font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[#F1F1F1] py-3 px-6 placeholder:text-secondary text-black rounded-full border border-primary font-medium shadow-lg"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-secondary font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-[#F1F1F1] py-3 px-6 placeholder:text-secondary text-black rounded-full border border-primary font-medium shadow-lg"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-secondary font-medium mb-2">Your message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-[#F1F1F1] py-3 px-6 placeholder:text-secondary text-black rounded-2xl border border-primary font-medium shadow-lg"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-[#F1F1F1] hover:bg-gray-300 py-3 px-8 w-fit text-black hover:text-white font-bold shadow-lg border border-primary hover:border-gray-300 rounded-xl transition-transform duration-150 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
