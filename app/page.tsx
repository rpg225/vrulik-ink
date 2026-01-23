"use client";

import { animate } from "framer-motion";
import{ motion } from "framer-motion";

export default function  Home () {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ minHeight: "100vh" }}
    >
      <h1>Vrulik Ink </h1>
    </motion.main>
  )
} 