"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export default function NavItem({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: ReactNode;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05, y: -1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="px-3 py-2 rounded-lg cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700 flex items-center gap-3"
      >
        {icon}

        <motion.span whileHover={{ x: 6 }} className="text-black dark:text-white">
          {label}
        </motion.span>
      </motion.div>
    </Link>
  );
}