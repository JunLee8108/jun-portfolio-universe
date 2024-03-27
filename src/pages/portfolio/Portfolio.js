import "./Portfolio.css";
import { portfolioData } from "../../utils/data/data";
import TypingAnimation from "../../components/TypingAnimation";

import { motion } from "framer-motion";

export default function Portfolio() {
  // Framer motion animation variants
  const cardVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } },
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <div className="portfolio">
      <TypingAnimation text="My Portfolio" class="portfolio-typing-container" />

      <div className="portfolio-container">
        {portfolioData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <section className="project-img-container">
              <img src={project.img} alt="project"></img>
            </section>

            <section className="project-description-container">
              <h1>{project.title}</h1>
              <div className="project-content-container">
                {project.description.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
              <div className="project-button-container">
                <button>🚀 DEMO</button>
                <button>💻 GITHUB</button>
              </div>
            </section>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
