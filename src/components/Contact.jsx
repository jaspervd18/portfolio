import { useState, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { contacts } from "../constants";

const ContactCard = ({ index, name, icon }) => {
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
          <img
            src={icon}
            alt={name}
            className="w-12 h-12 xs:w-16 xs:h-16 object-contain"
          />
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
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-5 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-white-100`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <div className="grid grid-cols-4 xl:grid-cols-1 gap-10 lg:content-start">
        {contacts.map((contact, index) => (
          <ContactCard key={contact.name} index={index} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
