"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="apply" className="px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="mx-auto max-w-lg text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          Limited availability
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
          100 founding member spots.
        </h2>

        <div className="mt-10">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
