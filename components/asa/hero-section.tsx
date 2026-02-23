"use client"

import { ArrowRight, Bot } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-32 pb-24 md:pt-44 md:pb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="flex items-center gap-2 mb-8"
      >
        <Bot className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Agent Store Academy
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl text-balance leading-[1.1]"
      >
        The Shopify Era Tech Stack is Dead
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
      >
        Open source tools + AI Agents. Own everything. Pay almost nothing.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
        className="mt-10"
      >
        <a
          href="#apply"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          See If You Qualify
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  )
}
