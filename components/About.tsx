"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* Image */}
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/dasha.jpg" // ← match your actual filename
            alt="Dasha portrait"
            width={520}
            height={640}
            priority={false}
          />
        </motion.div>

        {/* Card */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <span className={styles.label}>About</span>

          <h2 className={styles.heading}>Hi, I’m Dasha</h2>

          <p className={styles.body}>
            I’m a private, appointment-only tattoo artist working under Vrulik.
            I focus on calm, one-on-one sessions and custom designs built around
            your ideas. My process is slow, intentional, and collaborative.
          </p>

          <div className={styles.tags}>
            <span>Blackwork</span>
            <span>Fine Line</span>
            <span>Custom Concepts</span>
          </div>

          <div className={styles.meta}>
            <p>Private studio · By consultation only · Ottawa</p>
            <p>Instagram: @vrulik.ink</p>
            <p>Brand: Vrulik</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
