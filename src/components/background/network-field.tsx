"use client";

import { motion } from "framer-motion";

const points = [
  [18, 62],
  [28, 42],
  [42, 54],
  [54, 34],
  [68, 46],
  [78, 27],
  [84, 64],
  [58, 70],
  [38, 76],
];

const lines = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [8, 0],
  [2, 7],
];

export function NetworkField() {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="network-line" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.12" />
          <stop offset="55%" stopColor="#F8FAFC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C89B3C" stopOpacity="0.25" />
        </linearGradient>
        <radialGradient id="node-glow">
          <stop offset="0%" stopColor="#F8FAFC" stopOpacity="1" />
          <stop offset="48%" stopColor="#60A5FA" stopOpacity="0.78" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>
      {lines.map(([from, to], index) => {
        const [x1, y1] = points[from];
        const [x2, y2] = points[to];

        return (
          <motion.line
            key={`${from}-${to}`}
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            stroke="url(#network-line)"
            strokeWidth="0.18"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.35, 0.75, 0.35] }}
            transition={{
              pathLength: { duration: 1.2, delay: index * 0.08, ease: "easeInOut" },
              opacity: { duration: 5, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" },
            }}
          />
        );
      })}
      {points.map(([cx, cy], index) => (
        <motion.g key={`${cx}-${cy}`}>
          <motion.circle
            cx={cx}
            cy={cy}
            r="3.8"
            fill="url(#node-glow)"
            opacity="0.34"
            animate={{ scale: [0.86, 1.2, 0.86], opacity: [0.2, 0.48, 0.2] }}
            transition={{ duration: 4.8, repeat: Infinity, delay: index * 0.22, ease: "easeInOut" }}
          />
          <circle cx={cx} cy={cy} r="0.74" fill="#F8FAFC" opacity="0.86" />
        </motion.g>
      ))}
      <motion.path
        d="M50 42 C47 46 46 52 48 57 C50 62 54 62 56 57 C58 52 57 46 54 42 C53 40 51 40 50 42Z"
        fill="rgba(248,250,252,0.045)"
        stroke="rgba(248,250,252,0.18)"
        strokeWidth="0.25"
        animate={{ opacity: [0.22, 0.42, 0.22] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
