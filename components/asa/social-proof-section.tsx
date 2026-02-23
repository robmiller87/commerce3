"use client"

import { motion } from "framer-motion"

export function SocialProofSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <div className="inline-block rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">
          Social proof
        </div>

        <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
          No testimonials. No case studies. You{"'"}re early.
        </p>

        <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          This is the founding cohort. The thesis is playing out in real-time.
          We{"'"}re looking for 100 builders who want to be first{" "}
          — not people who need proof it works.
        </p>

        <p className="mt-6 text-base text-muted-foreground/80 italic">
          If you{"'"}re waiting for testimonials, you{"'"}re not who this is for.
        </p>
      </motion.div>
    </section>
  )
}
