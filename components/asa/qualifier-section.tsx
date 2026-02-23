"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export function QualifierSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="mx-auto max-w-2xl"
      >
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              This isn{"'"}t for everyone.
            </h2>
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Agent Store Academy is for self-directed builders who want to create
            their own stack — not follow someone else{"'"}s playbook.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-muted-foreground/60 text-sm shrink-0">
                {"//"}
              </span>
              <p className="text-muted-foreground">
                If you want someone to tell you exactly what to do, this isn
                {"'"}t it.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-primary text-sm shrink-0">
                {"//"}
              </span>
              <p className="text-foreground">
                If you want to learn how to figure it out yourself, let{"'"}s
                talk.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
