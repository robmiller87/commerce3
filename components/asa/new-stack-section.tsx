"use client"

import { motion } from "framer-motion"
import { User, Bot, Plus } from "lucide-react"

export function NewStackSection() {
  return (
    <section className="px-6 pb-20 md:pb-28">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="rounded-2xl border border-primary/20 bg-card p-8 md:p-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary">
              <User className="h-6 w-6 text-foreground" />
            </div>
            <Plus className="h-5 w-5 text-muted-foreground" />
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
              <Bot className="h-6 w-6 text-primary" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            Human + AI Agents
          </h2>

          <p className="mt-3 text-muted-foreground text-lg">
            The only stack that matters.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
