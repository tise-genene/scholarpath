"use client";

import { motion } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
}

interface DynamicFaqItemProps {
  faq: FaqItem;
  index: number;
}

export default function DynamicFaqItem({ faq, index }: DynamicFaqItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
    >
      <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2 text-lg">{faq.q}</h4>
      <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
    </motion.div>
  );
}
