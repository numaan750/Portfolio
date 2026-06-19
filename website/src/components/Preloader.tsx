"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND_NAME = "NextCode";
const BRAND_SUB = "MERN STACK";
const BOOT_LINES = [
  "CODENEXT OS BOOTING...",
  "UIUX + MERN STACK DEVELOPMENT + MARKETING + PRODUCTION",
  "SYNCING ALL SERVICES...",
];
const STATUS_LINES = [
  "MERN STACK: ONLINE",
  "DEVELOPMENT STACK: ONLINE",
  "FUSION: 100%",
];
const TAGLINE =
  "ALL SERVICES ORBIT INTO ONE BRAND · DEVELOPMENT + MARKETING + PRODUCTION";
const RINGS: {
  scale: number;
  duration: number;
  direction: 1 | -1;
  services: string[];
}[] = [
    {
      scale: 1,
      duration: 60,
      direction: 1,
      services: ["Graphic Design", "Motion Graphics", "Video Editing", "Website Redesign"],
    },
    {
      scale: 0.7,
      duration: 45,
      direction: -1,
      services: ["Production", "API Integration", "SMM", "Social Mgmt"],
    },
    {
      scale: 0.42,
      duration: 30,
      direction: 1,
      services: ["E-commerce", "App Dev", "Website Development"],
    },
  ];

export default function Preloader() {
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    document.body.style.overflow = "hidden";

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1500);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] bg-[#0a0a0f] overflow-hidden font-mono select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 z-[10] pointer-events-none overflow-hidden"
          >
            <motion.div
              className="absolute left-[-20%] right-[-20%] h-[0.5px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(80,160,255,0.8), transparent)",
                boxShadow:
                  "0 0 2px 0.5px rgba(80,160,255,0.5), 0 0 8px 1.5px rgba(80,160,255,0.15)",
                filter: "blur(0.1px)",
                transform: "rotate(8deg)",
              }}
              initial={{ top: "-5%", opacity: 0 }}
              animate={{ top: "110%", opacity: [0, 1, 1, 0] }}
              transition={{
                top: { duration: 1, ease: "easeInOut" },
                opacity: { duration: 1, times: [0, 0.08, 0.85, 1], ease: "easeInOut" },
              }}
            />
            <motion.div
              className="absolute left-[-20%] right-[-20%] h-[0.5px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(80,160,255,0.8), transparent)",
                boxShadow:
                  "0 0 2px 0.5px rgba(80,160,255,0.5), 0 0 8px 1.5px rgba(80,160,255,0.15)",
                filter: "blur(0.1px)",
                transform: "rotate(-8deg)",
              }}
              initial={{ top: "110%", opacity: 0 }}
              animate={{ top: "-5%", opacity: [0, 1, 1, 0] }}
              transition={{
                top: { duration: 1, ease: "easeInOut" },
                opacity: { duration: 1, times: [0, 0.08, 0.85, 1], ease: "easeInOut" },
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}