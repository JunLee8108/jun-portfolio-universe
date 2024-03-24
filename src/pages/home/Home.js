import "./Home.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const createStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      const x = Math.random() * 100; // Screen x position
      const y = Math.random() * 100; // Screen y position
      const duration = Math.random() * 5 + 2; // Animation duration
      stars.push(
        <motion.div
          key={i}
          className="star"
          initial={{ x: `${x}vw`, y: `${y}vh`, opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [`${x}vw`, `${x + 10}vw`, `${x}vw`],
            y: [`${y}vh`, `${y + 10}vh`, `${y}vh`],
          }}
          transition={{ repeat: Infinity, duration: duration }}
        ></motion.div>
      );
    }
    return stars;
  };

  return (
    <div className="universe">
      {createStars(100)} {/* Create 100 stars */}
      <div className="content animation">
        <h1>Welcome to My Portfolio Universe</h1>
        <h2>Jeong Hyun Lee</h2>
        <button onClick={() => navigate("about")}>About Me</button>
      </div>
    </div>
  );
}
