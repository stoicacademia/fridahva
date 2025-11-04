"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle2, MessageSquare, Zap } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Needs",
    description:
      "Tell us about your business and what tasks you need help with. We listen and understand your unique requirements.",
  },
  {
    icon: CheckCircle2,
    title: "Meet Your VA",
    description:
      "Get matched with a professional VA who fits your needs. Interview and onboard seamlessly in one call.",
  },
  {
    icon: Zap,
    title: "Focus on Growth",
    description: "Your VA handles day-to-day tasks while you focus on what matters most—growing your business.",
  },
]

export function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="how-it-works" className="py-20 bg-background px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4" variants={itemVariants}>
            How It Works
          </motion.h2>
          <motion.p className="text-lg text-foreground/60 max-w-2xl mx-auto" variants={itemVariants}>
            Three simple steps to get your ideal virtual assistant
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 h-full border-2 hover:border-primary/50 transition-colors">
                  <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2 mb-4">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all ${i <= index ? "bg-primary" : "bg-border"}`}
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
