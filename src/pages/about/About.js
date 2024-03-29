import "./About.css";
import { techStackData } from "../../utils/data/data";
import TypingAnimation from "../../components/TypingAnimation";

import { useState, useEffect, Fragment, useRef } from "react";

import { motion } from "framer-motion";

export default function About() {
  const [isTechStackModal, setTechStackModal] = useState(false);
  const [controlTechStackModal, setControlTechStackModal] = useState(false);
  const [techStack, setTechStack] = useState("");
  const techStackModalData = techStackData.filter(
    (item) => item.name === techStack
  );

  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const techStackRef = useRef(null);

  const scrollToSection = (ref) => () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const sectionVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
    hidden: { opacity: 0, y: 30 },
  };

  const handleTechStackModal = (name) => () => {
    setControlTechStackModal(true);
    setTechStack(name);
  };

  const closeModalWhenYouClickBG = (e) => {
    const target = document.querySelector(".tech-stack-modal-bg");
    if (e.target === target) {
      setControlTechStackModal(false);
    }
  };

  useEffect(() => {
    let timer;

    if (controlTechStackModal) {
      setTechStackModal(true);
    } else {
      timer = setTimeout(() => {
        setTechStackModal(false);
      }, 395);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [controlTechStackModal]);

  return (
    <div className="about">
      <div className="sidebar">
        <p>Sidebar</p>
        <button onClick={scrollToSection(aboutMeRef)}>About Me</button>
        <button onClick={scrollToSection(educationRef)}>Education</button>
        <button onClick={scrollToSection(techStackRef)}>Tech Stack</button>
      </div>

      {/* About Me */}
      <div className="about-me" ref={aboutMeRef}>
        <TypingAnimation text="About Me" />

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
      <div className="about-education" ref={educationRef}>
        <TypingAnimation text="Education" />

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
      <div className="about-tech-stack" ref={techStackRef}>
        <TypingAnimation
          text="Tech Stack"
          class="tech-stack-animation-container"
        />

        <motion.section
          className="about-tech-stack-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {techStackData.map((item, index) => {
            return (
              <div
                className="tech-stack-container"
                key={index}
                onClick={handleTechStackModal(item.name)}
              >
                <img src={item.img} alt="tech stack"></img>
                <h3>{item.name}</h3>
                <div className="tech-stack-border"></div>
              </div>
            );
          })}
        </motion.section>
      </div>

      {isTechStackModal ? (
        <div
          className={`tech-stack-modal-bg ${
            controlTechStackModal ? "animated-show-bg" : "animated-hide-bg"
          }`}
          onClick={closeModalWhenYouClickBG}
        >
          <div
            className={`tech-stack-modal ${
              controlTechStackModal
                ? "animated-tech-stack"
                : "animated-hide-tech-stack"
            }`}
          >
            <h1>{techStackModalData[0].name}</h1>
            <div className="tech-stack-description">
              {techStackModalData[0].description.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <h3>{item.main}</h3>
                    <p>{item.support}</p>
                  </Fragment>
                );
              })}
            </div>
            <button
              className="tech-stack-close"
              onClick={() => setControlTechStackModal(false)}
            >
              CLOSE
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
