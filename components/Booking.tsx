"use client";

import { motion } from "framer-motion";
import styles from "./Booking.module.css";
import Button from "./ui/Button";

export default function Booking() {
  return (
    <section className={styles.section} id="booking">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>Book a consultation</h2>

        <p className={styles.body}>
          All sessions are private and by consultation only.
          <br />
          We’ll discuss your ideas, placement, and availability before booking.
        </p>

        <Button>Request a Consultation</Button>
      </motion.div>
    </section>
  );
}
