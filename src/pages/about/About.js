import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  // 여기에 코드 타이핑 애니메이션을 위한 텍스트를 정의합니다.
  const codeText = "Hello, I'm Jeong Hyun Lee";

  // 문자별로 나누어 각각에 대한 애니메이션을 적용합니다.
  const textMotionProps = {
    initial: { opacity: 0 },
    animate: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.02 }, // 각 글자마다 약간의 딜레이를 줍니다.
    }),
  };

  return (
    <div className="aboutContainer">
      <motion.div className="typingAnimation">
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
  );
}
