"use client";

import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import { useApiData } from "../hooks/useApiData";

export default function FeatureSection() {
  const { data, isLoading, error } = useApiData();

  if (isLoading) {
    return (
      <section className="py-32 text-center">
        <p className="text-gray-500">Loading data...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-32 text-center">
        <p className="text-red-500">Error loading data</p>
      </section>
    );
  }

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-gray-900">
            Cloud Optimization Insights
          </h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Discover performance insights and optimization features that help
            improve infrastructure efficiency.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {data?.products?.map((item: any) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedCard title={item.title} description={item.description} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
