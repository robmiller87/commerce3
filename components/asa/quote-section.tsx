"use client"

import { motion } from "framer-motion"

export function QuoteSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <blockquote className="text-xl md:text-2xl font-medium text-foreground italic">
          "People who don't organize into tribes get wiped out by people who do."
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">
          — Naval{" "}
          <a
            href="https://x.com/naval"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @naval
          </a>
        </p>
      </motion.div>
    </section>
  )
}
