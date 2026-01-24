"use client";

import { animate } from "framer-motion";
import{ motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function  Home () {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ minHeight: "100vh" }}
    >
      <Navbar />

      <h1>Vrulik Ink </h1>

    </motion.main>
  )
} 