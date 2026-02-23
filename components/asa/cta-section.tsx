"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export function CTASection() {
  useEffect(() => {
    const d = document
    const w = "https://tally.so/widgets/embed.js"
    const v = function() {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds()
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc
        })
      }
    }
    if (typeof (window as any).Tally !== "undefined") {
      v()
    } else if (d.querySelector('script[src="' + w + '"]') == null) {
      const s = d.createElement("script")
      s.src = w
      s.onload = v
      s.onerror = v
      d.body.appendChild(s)
    }
  }, [])

  return (
    <section id="apply" className="px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          Limited availability
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance mb-10">
          100 founding member spots.
        </h2>

        <iframe
          data-tally-src="https://tally.so/embed/7RW5KZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="692"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Agent Store Academy - Founding Member Application"
        ></iframe>
      </motion.div>
    </section>
  )
}
