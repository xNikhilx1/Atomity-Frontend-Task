"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
}

export default function AnimatedCard({ title, description }: CardProps) {
  return (
    <motion.div
      className="group bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all"
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {/* Icon */}

      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 text-xl">
        ⚡
      </div>

      {/* Title */}

      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
        {title}
      </h3>

      {/* Description */}

      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
