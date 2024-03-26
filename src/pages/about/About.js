import "./About.css";
import { techStackData } from "../../utils/data/data";

import { motion } from "framer-motion";

export default function About() {
  const codeText = "About Me";
  const codeText2 = "Education";
  const codeText3 = "Tech Stack";

  const textMotionProps = {
    initial: { opacity: 0 },
    animate: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.04 },
    }),
  };

  const sectionVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <div className="about">
      {/* About Me */}
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
              Welcome to my portfolio! I am an aspiring front-end developer
              currently enriching my skills through diverse educational and
              personal project experiences. My journey in web development
              started with the basics: HTML, CSS, and JavaScript. However, I
              didn't stop there; I've extended my expertise to more advanced
              technologies such as TypeScript, React, Vue.js, and Next.js,
              deepening my understanding of front-end development.
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

      {/* Education */}
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
              My education has not only been about gaining technical skills but
              also about growing as a collaborative team member and a
              problem-solver. As I approach my graduation, I remain committed to
              learning and developing my abilities, preparing myself for a
              successful career in web development.
            </p>
          </div>
        </motion.section>
      </div>

      {/* Tech-Stack */}
      <div className="about-tech-stack">
        <div className="about-typing-animation-container tech-stack-animation-container">
          <motion.div className="about-typing-animation">
            {codeText3.split("").map((char, index) => (
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
          className="about-tech-tack-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {techStackData.map((item, index) => {
            return (
              <div className="tech-stack-container" key={index}>
                <img src={item.img} alt="tech stack"></img>
                <h3>{item.name}</h3>
                <div className="tech-stack-border"></div>
              </div>
            );
          })}
        </motion.section>
      </div>
    </div>
  );
}
