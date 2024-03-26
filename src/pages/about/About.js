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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
    hidden: { opacity: 0, y: 30 },
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
              Hello and welcome to my portfolio! I am an aspiring front-end
              developer currently enriching my skills through diverse
              educational and personal project experiences. My journey in web
              development started with the basics: HTML, CSS, and JavaScript.
              However, I didn't stop there; I've extended my expertise to more
              advanced technologies such as TypeScript, React, Vue.js, and
              Next.js, deepening my understanding of front-end development.
            </p>
            <p>
              Collaboration and teamwork are as crucial to me as technical
              skills. Through various school and group projects, I've honed my
              ability to work effectively with classmates and colleagues,
              contributing to our shared goals with my technical insights and
              problem-solving skills.
            </p>
            <p>
              Beyond front-end technologies, I have a good grasp of back-end
              concepts, with practical knowledge in Node.js, Electron.js, and
              database management using MongoDB and PostgreSQL. Additionally, I
              am familiar with hosting services like AWS Amplify and Vercel,
              which complements my full-stack development approach.
            </p>
            <p>
              I am passionate about learning and constantly seek new challenges
              to enhance my skills and knowledge. I am committed to growing as a
              front-end developer and exploring all aspects of web development.
              Thank you for visiting my portfolio. I look forward to the
              opportunity to bring my dedication and skills to your projects.
            </p>
          </div>
        </motion.section>
      </div>

      <div className="about-education">
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
            <img src="/imgs/TAM-Stack.webp" alt="Texas A&M University" />
          </div>
          <div className="about-me-description">
            <h2>Texas A&M University</h2>
            <span>• Bachelor of Arts in Computing</span>
            <p style={{ marginBottom: "30px" }}>
              • Expected Graduation: May 2024
            </p>
            <p>
              At Texas A&M University, I am advancing my education in Computing,
              focusing on harnessing my skills in web development and teamwork.
              Throughout my academic journey, I've been actively involved in
              various web development team projects, which have significantly
              contributed to my proficiency in front-end development and
              collaborative skills.
            </p>
            <p>
              These hands-on experiences have allowed me to apply theoretical
              knowledge in practical settings, enhancing my understanding of web
              technologies and project management. I have been continuously
              developing my abilities to work effectively in team environments,
              addressing challenges, and delivering solutions that meet our
              project goals.
            </p>
            <p>
              My education has not only been about gaining technical skills but
              also about growing as a collaborative team member and a
              problem-solver. As I approach my graduation, I remain committed to
              learning and developing my abilities, preparing myself for a
              successful career in web development.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
