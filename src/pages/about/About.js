import { motion, useAnimation } from "framer-motion";
import "./About.css";
import { useEffect } from "react";

export default function About() {
  const controls = useAnimation(); // 추가 컨텐츠에 대한 애니메이션 컨트롤
  const codeText = "About Me";
  const codeText2 = "Education";

  const textMotionProps = {
    initial: { opacity: 0 },
    animate: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.04 },
    }),
    complete: () => controls.start({ opacity: 1 }),
  };

  const sectionVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.55 } },
    hidden: { opacity: 0, y: 20 },
  };

  useEffect(() => {
    controls.start({ opacity: 0 }); // 초기에는 다른 컨텐츠를 숨깁니다.
  }, [controls]);

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
                onAnimationComplete={
                  index === codeText.length - 1
                    ? textMotionProps.complete
                    : null
                }
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.section
          className="about-me-section"
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
        className="about-me-section"
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
