import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const SectionReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
}: SectionRevealProps) => {
  const offset = 40;
  const initial =
    direction === "up"
      ? { opacity: 0, y: offset }
      : direction === "left"
      ? { opacity: 0, x: -offset }
      : direction === "right"
      ? { opacity: 0, x: offset }
      : { opacity: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
