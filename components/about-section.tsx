"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Target, Users, Award } from "lucide-react"

export function AboutSection() {
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
    <section id="about" className="py-20 bg-secondary/50 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side - Text */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <p className="text-sm font-semibold text-primary mb-2">About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold">Meet Your Business Partner</h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              FridahVA was founded with a simple mission: to help ambitious business owners reclaim their time and
              focus on what matters most. We believe that every entrepreneur deserves access to professional, reliable
              support.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Our carefully vetted virtual assistants are trained to understand your business, anticipate your needs,
              and execute tasks with precision. We don't just hire VAs—we partner with you for growth.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-4 border-2 bg-background">
                <p className="text-3xl font-bold text-primary mb-1">500+</p>
                <p className="text-sm text-foreground/60">Happy Clients</p>
              </Card>
              <Card className="p-4 border-2 bg-background">
                <p className="text-3xl font-bold text-primary mb-1">2K+</p>
                <p className="text-sm text-foreground/60">Hours Freed</p>
              </Card>
            </div>
          </motion.div>

          {/* Right Side - Values */}
          <motion.div className="space-y-6" variants={containerVariants}>
            {[
              {
                icon: Target,
                title: "Mission-Driven",
                description: "We focus on your growth and success. Your goals become our goals.",
              },
              {
                icon: Users,
                title: "Community First",
                description: "We build lasting relationships with both clients and team members.",
              },
              {
                icon: Award,
                title: "Excellence Always",
                description: "Quality is non-negotiable. Every task completed to the highest standard.",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{value.title}</h3>
                        <p className="text-sm text-foreground/60">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
