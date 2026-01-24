"use client";

import { motion } from "framer-motion";
import styles from "./Gallery.module.css";
import Card from "./ui/Card";

const images = [
  "/card-files/card-size-arm-girl-dragon.png",
  "/card-files/card-size-tattoo-arm-eye.png",
  "/card-files/card-size-tattoo-arm-skull.png",
  "/card-files/card-size-tattoo-lips-forest.png",
  "/card-files/card-size-tattoo-flowers-arm.png",
  "/card-files/card-size-girl-flowers.png",

];

export default function Gallery() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <span className={styles.label}>Gallery</span>
        <h2 className={styles.heading}>Selected Work</h2>
        <div className={styles.grid}>
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {/* IMPORTANT: src prop */}
              <Card src={src} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
