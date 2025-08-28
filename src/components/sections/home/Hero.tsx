// src/components/sections/home/Hero.tsx
import { motion } from "framer-motion";
import SectionCTA from "@/components/sectionCTA";
import logo from "@/assets/images/flux-logo.png"; // <-- if using import path

import { Variants } from 'framer-motion';

const textParent: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.12,
      ease: [0.16, 1, 0.3, 1],
      duration: 0.6,
    },
  },
};

const textChild: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const logoEnter: Variants = {
  hidden: { opacity: 0, y: -40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 160, 
      damping: 18, 
      mass: 0.8 
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
            <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-500" />
          </div>

          {/* LEFT: Enhanced Text */}
          <motion.div
            variants={textParent}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 relative"
          >
            {/* Glowing accent line */}
            <motion.div 
              variants={textChild}
              className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mb-6 rounded-full"
            />

            <motion.div variants={textChild} className="relative">
              <motion.h1
                className="text-[clamp(2.2rem,6vw,4rem)] font-black leading-[0.9] tracking-tight mb-2"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                INNOVATE
                <br />
                INTERACT{" "}
                <span 
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.8) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  IMPACT
                  {/* Subtle glow effect */}
                  <motion.div 
                    className="absolute inset-0 blur-sm opacity-30"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.8) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
              </motion.h1>
            </motion.div>

            <motion.div variants={textChild} className="relative mb-6">
              <motion.h2
                className="text-[clamp(1.8rem,5vw,3.2rem)] font-bold leading-tight tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                <motion.span
                  animate={{ 
                    textShadow: ["0 0 0px transparent", "0 0 8px hsl(var(--primary)/0.3)", "0 0 0px transparent"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Igniting Ideas,
                </motion.span>{" "}
                <span 
                  className="relative"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.7) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Shaping Futures
                </span>
              </motion.h2>
            </motion.div>

            {/* Enhanced description with better typography */}
            <motion.div variants={textChild} className="space-y-4 mb-8">
              <div className="relative">
                <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-xl">
                  🚀 <strong>Unleashing Innovation</strong> in Computer Science & Engineering
                </p>
                <p className="text-base text-muted-foreground/80 leading-relaxed max-w-xl mt-3">
                  Join <strong className="text-primary font-semibold">FLUX</strong> – where brilliant minds 
                  converge to push the boundaries of technology, foster groundbreaking research, 
                  and build the future of computing.
                </p>
              </div>
              
              <motion.div 
                className="flex items-center space-x-4 text-sm text-muted-foreground/70 pt-2"
                variants={textChild}
              >
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
                  <span>Innovation Hub</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-300" />
                  <span>Research Excellence</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-600" />
                  <span>Future Tech</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced CTA buttons */}
            <motion.div
              variants={textChild}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SectionCTA
                  to="about"
                  label="🔥 Explore FLUX"
                  variant="primary"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SectionCTA
                  to="/events"
                  label="⚡ Upcoming Events"
                  variant="outline"
                />
              </motion.div>
            </motion.div>

            {/* Achievement badges */}
            <motion.div 
              variants={textChild}
              className="flex items-center space-x-6 mt-8 pt-6 border-t border-muted/20"
            >
             
            </motion.div>
          </motion.div>

          {/* RIGHT: Enhanced Logo with green glowing rings */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Multiple layered glows with green tints */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center lg:justify-end">
              <motion.div
                className="h-72 w-72 sm:h-96 sm:w-96 rounded-full blur-3xl opacity-40"
                style={{
                  background: "radial-gradient(ellipse at center, #10b981, #22c55e, transparent 70%)",
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute h-48 w-48 sm:h-64 sm:w-64 rounded-full blur-2xl opacity-30"
                style={{
                  background: "radial-gradient(ellipse at center, #22c55e, #16a34a, transparent 60%)",
                }}
                animate={{ 
                  scale: [1.1, 0.9, 1.1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
              />
            </div>

            <motion.div
              variants={logoEnter}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.img
                src={logo}
                alt="Flux Society Logo"
                width={320}
                height={320}
                decoding="async"
                fetchPriority="high"
                className="w-72 sm:w-80 h-auto object-contain drop-shadow-2xl will-change-transform relative z-10"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.4))"
                }}
                // Enhanced floating animation
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{
                  delay: 0.9,
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Enhanced glowing rotating accent rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: "#10b981",
                  boxShadow: `
                    0 0 20px rgba(16, 185, 129, 0.5),
                    0 0 40px rgba(16, 185, 129, 0.3),
                    inset 0 0 20px rgba(16, 185, 129, 0.1)
                  `,
                  width: "120%", 
                  height: "120%", 
                  top: "-10%", 
                  left: "-10%" 
                }}
                animate={{ 
                  rotate: 360,
                  boxShadow: [
                    `0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3), inset 0 0 20px rgba(16, 185, 129, 0.1)`,
                    `0 0 30px rgba(16, 185, 129, 0.7), 0 0 60px rgba(16, 185, 129, 0.4), inset 0 0 30px rgba(16, 185, 129, 0.2)`,
                    `0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3), inset 0 0 20px rgba(16, 185, 129, 0.1)`
                  ]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border"
                style={{
                  borderColor: "#22c55e",
                  boxShadow: `
                    0 0 15px rgba(34, 197, 94, 0.4),
                    0 0 30px rgba(34, 197, 94, 0.2),
                    inset 0 0 15px rgba(34, 197, 94, 0.1)
                  `,
                  width: "140%", 
                  height: "140%", 
                  top: "-20%", 
                  left: "-20%" 
                }}
                animate={{ 
                  rotate: -360,
                  boxShadow: [
                    `0 0 15px rgba(34, 197, 94, 0.4), 0 0 30px rgba(34, 197, 94, 0.2), inset 0 0 15px rgba(34, 197, 94, 0.1)`,
                    `0 0 25px rgba(34, 197, 94, 0.6), 0 0 50px rgba(34, 197, 94, 0.3), inset 0 0 25px rgba(34, 197, 94, 0.2)`,
                    `0 0 15px rgba(34, 197, 94, 0.4), 0 0 30px rgba(34, 197, 94, 0.2), inset 0 0 15px rgba(34, 197, 94, 0.1)`
                  ]
                }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }
                }}
              />

              {/* Additional particle effects around the logo */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-green-400 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: [0, Math.cos(i * Math.PI / 4) * 100],
                      y: [0, Math.sin(i * Math.PI / 4) * 100],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}