import { motion } from "framer-motion";

export default function TypingAnimation(props) {
  const textMotionProps = {
    initial: { opacity: 0 },
    animate: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.04 },
    }),
  };

  return (
    <div
      className={`about-typing-animation-container ${
        props.class ? props.class : ""
      }`}
    >
      <motion.div className="about-typing-animation">
        {props.text.split("").map((char, index) => (
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
