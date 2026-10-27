import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className, y = 18 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ index, label, title, children }: { index: string; label: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-14 grid gap-6 md:grid-cols-12">
      <Reveal className="md:col-span-4">
        <p className="eyebrow"><span className="text-primary">{index}</span> / {label}</p>
      </Reveal>
      <div className="md:col-span-8">
        <Reveal delay={0.05}>
          <h2 className="text-3xl font-semibold leading-[1.1] md:text-5xl">{title}</h2>
        </Reveal>
        {children && <Reveal delay={0.12}><div className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{children}</div></Reveal>}
      </div>
    </div>
  );
}
