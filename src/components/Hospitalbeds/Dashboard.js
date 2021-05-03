import { motion } from "framer-motion";
import React from "react";
import HospitalDetails from "./HospitalDetails";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HospitalDetails />
    </motion.div>
  );
}
