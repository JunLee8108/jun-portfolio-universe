import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  const codeText = "About Me";

  const textMotionProps = {
    initial: { opacity: 0 },
    animate: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.08 },
    }),
  };

  return (
    <>
      <div className="about">
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

      <div className="about-section animation-slow">
        <div className="about-photo">
          <img src="/imgs/JunLee.webp" alt="Jeong Hyun Lee" />
          <h2>Jeong Hyun Lee</h2>
          {/* Replace 'path-to-your-photo.jpg' with the actual path to your photo */}
        </div>
        <div className="about-description">
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
      </div>
    </>
  );
}
