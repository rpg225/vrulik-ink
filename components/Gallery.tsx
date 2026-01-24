"use client";

import { motion } from "framer-motion";
import styles from "./Gallery.module.css";
import Card from "./ui/Card";

const images = [
  "/card-files/card-size-arm-girl-dragon.png",
  "/card-files/card-size-tattoo-arm-eye.png",
  "/card-files/card-size-tattoo-arm-skull.png",
  "/card-files/card-size-tattoo-lips-forest.png",
];

export default function Gallery() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Gallery</span>
          <h2 className={styles.heading}>Selected Work</h2>
        </motion.div>

        <div className={styles.grid}>
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: "easeOut",
              }}
            >
              <Card image={src} />
            </motion.div>
          ))}
        </div>

        <p className={styles.footer}>
          More work available on Instagram @vrulik.ink
        </p>
      </div>
    </section>
  );
}
