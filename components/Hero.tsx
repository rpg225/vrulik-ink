"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Button from "@/components/ui/Button";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1 variants={item}>
          Ink with intent
        </motion.h1>

        <motion.p variants={item}>
          Private, appointment-only tattooing in Ottawa.
          <br />
          Blackwork and fine line, designed one-on-one.
        </motion.p>

        <motion.div variants={item}>
          <Button >Book a Consultation</Button>
        </motion.div>

        <motion.span variants={item} className={styles.helper}>
          *Consultation required before booking
        </motion.span>
      </motion.div>
    </section>
  );
}
