import { motion } from "framer-motion";
import "./Portfolio.css";

export default function Portfolio() {
  // 이 배열은 당신의 프로젝트를 나타냅니다. 실제 데이터로 바꿔주세요.
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a description for Project 1.",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a description for Project 2.",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a description for Project 3.",
    },
    // 추가 프로젝트
  ];

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3, // 호버 애니메이션의 지속 시간
        ease: "easeInOut",
      },
    },
  };

  // Framer motion animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <h1 className="portfolio-title">My Portfolio</h1>
      <div className="portfolio-container">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
            whileHover={{
              translateY: -30,
              transition: { ease: "linear", duration: 2 },
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
