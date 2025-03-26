import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate <strong>Frontend Developer</strong> with expertise in
        <strong> HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and SQL. </strong> 
        I specialize in building
        <strong> scalable, high-performance, and user-centric web applications </strong>
        that blend seamless functionality with modern design. My focus is on
        <strong> clean architecture, optimized performance, and intuitive user experience. </strong>
        <br /><br />

        🚀 <strong>My Journey:</strong>  
        I started my journey with a deep dive into <strong>TypeScript</strong> and <strong>JavaScript</strong>, followed by hands-on <strong>DSA challenges</strong> to strengthen my problem-solving skills. I have built <strong>e-commerce platforms, dynamic dashboards, and interactive web apps</strong>, focusing on <strong>efficiency and seamless UX</strong>.
        <br /><br />

        🌟 <strong>Projects & Experience:</strong>  
        🔹 <strong>Full-Stack E-Commerce Store</strong> – Secure authentication, Stripe payments, and admin management.  
        🔹 <strong>Admin Dashboard</strong> – Integrated Google Analytics, order tracking, and customer management.  
        🔹 <strong>Dynamic Blog & Landing Pages</strong> – SEO-friendly, responsive, and optimized for performance.  
        <br /><br />

        🎯 <strong>Current Focus:</strong>  
        I’m currently exploring <strong>full-stack development with Next.js</strong>, focusing on <strong>state management, UI/UX optimization, and performance improvements</strong>. Additionally, I’m diving into <strong>Agentic AI & Generative AI</strong> using <strong>Python</strong>.
        <br /><br />

        🔍 <strong>Open to collaborations!</strong> Let’s connect and build something amazing together. 🚀
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
