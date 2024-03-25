import "./About.css";

import { motion } from "framer-motion";

export default function About() {
  const codeText = "About Me";
  const codeText2 = "Education";

  const textMotionProps = {
    initial: { opacity: 0 },
    animate: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.04 },
    }),
  };

  const sectionVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <div className="about">
      <div className="about-me">
        <div className="about-typing-animation-container">
          <motion.div className="about-typing-animation">
            {codeText.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={textMotionProps}
                initial="initial"
                animate="animate"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.section
          className="about-me-section animation-slow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="about-me-photo">
            <img src="/imgs/JunLee.webp" alt="Jeong Hyun Lee" />
            <h2>Jeong Hyun Lee</h2>
          </div>
          <div className="about-me-description">
            <p>
              As a dedicated Computer Science student at Texas A&M University, I
              have honed my full-stack development skills through a blend of
              academic rigor and extensive hands-on experience. My technical
              repertoire includes advanced proficiency in C++ and Python,
              alongside substantial project work in web development using React,
              Next.js, Node.js, Vue.js, TypeScript and MongoDB, as well as
              desktop application development with Electron.js.
            </p>
          </div>
        </motion.section>
      </div>

      <div className="about-typing-animation-container">
        <motion.div className="about-typing-animation">
          {codeText2.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={textMotionProps}
              initial="initial"
              animate="animate"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.section
        className="about-me-section animation-slow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="about-me-photo">
          <img src="/imgs/tam-logo.png" alt="Texas A&M University" />
          <h2>Texas A&M University</h2>
        </div>
        <div className="about-me-description">
          <p>
            As a dedicated Computer Science student at Texas A&M University, I
            have honed my full-stack development skills through a blend of
            academic rigor and extensive hands-on experience. My technical
            repertoire includes advanced proficiency in C++ and Python,
            alongside substantial project work in web development using React,
            Next.js, Node.js, Vue.js, TypeScript and MongoDB, as well as desktop
            application development with Electron.js.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
