import "./Home.css";

import { motion } from "framer-motion";

export default function Home() {
  const createStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      const x = Math.random() * 100; // 화면의 x 위치
      const y = Math.random() * 100; // 화면의 y 위치
      const duration = Math.random() * 5 + 2; // 애니메이션 지속 시간
      stars.push(
        <motion.div
          key={i}
          initial={{ x: `${x}vw`, y: `${y}vh`, opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [`${x}vw`, `${x + 10}vw`, `${x}vw`],
            y: [`${y}vh`, `${y + 10}vh`, `${y}vh`],
          }}
          transition={{ repeat: Infinity, duration: duration }}
          style={{
            position: "absolute",
            width: "8px",
            height: "8px",
            backgroundColor: "white",
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        ></motion.div>
      );
    }
    return stars;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "black",
      }}
    >
      {createStars(100)} {/* 100개의 별을 생성 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          textAlign: "center", // This will center the button and h1 text
        }}
        className="animation"
      >
        <h1 style={{ color: "white", marginBottom: "40px" }}>
          Welcome to My Portfolio Universe
        </h1>
        <button
          style={{
            padding: "15px 20px",
            fontSize: "16px",
            color: "white",
            background: "transparent",
            borderColor: "white",
            borderRadius: "20px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          About Me
        </button>
      </div>
    </div>
  );
}
