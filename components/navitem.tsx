"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

export default function NavItem({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon?: ReactNode;
}) {

  const path = usePathname();

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05, y: -1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700 flex items-center gap-3 ${path === href && "bg-gradient-to-t from-green-500 to-lime-400"}`}
      >
        {icon}

        <motion.span whileHover={{ x: 6 }}>
          {label}
        </motion.span>
      </motion.div>
    </Link>
  );
}