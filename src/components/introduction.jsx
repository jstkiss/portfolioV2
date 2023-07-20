"use client";
import styles from "../styles/index";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../utils/motion";

// let styles = {};

const Introduction = () => (
  <section className={`${styles.yPaddings} text-sm grid grid-rows-4 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className="lg:text-7xl text-3xl text-white"
        >
          Bonjour, mon nom est
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Michel</h1>
        </motion.div>
        <motion.h1
          variants={textVariant(1.1)}
          className="lg:text-7xl text-3xl text-white"
        >
          Développeur web front-end
        </motion.h1>
      </div>
    </motion.div>
  </section>
);

export default Introduction;
