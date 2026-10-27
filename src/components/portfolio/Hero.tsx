import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yVisual = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -50]);
  const item = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease },
  });

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow-soft pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p {...item(0.05)} className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-primary" /> Estudante de ADS · Desenvolvimento de software
          </motion.p>
          <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1">
              <motion.span className="block" initial={reduce ? false : { y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.12, ease }}>Olá, sou</motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span className="block text-primary" initial={reduce ? false : { y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.22, ease }}>Brenno Augusto.</motion.span>
            </span>
          </h1>
          <motion.p {...item(0.4)} className="mt-6 max-w-xl font-display text-xl font-medium text-foreground/90 md:text-2xl">
            Transformando curiosidade em soluções através da tecnologia.
          </motion.p>
          <motion.p {...item(0.5)} className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Estudante de Análise e Desenvolvimento de Sistemas, com conhecimentos em Python, Java, PHP, HTML e CSS. Tenho experiência em diferentes áreas técnicas e busco uma oportunidade para aplicar meus conhecimentos, enfrentar novos desafios e evoluir como desenvolvedor.
          </motion.p>
          <motion.div {...item(0.6)} className="mt-9 flex flex-wrap gap-3">
            <a href="#projetos" className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-[0.97]">
              Explorar portfólio <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#contato" className="inline-flex h-12 items-center gap-2 rounded-full border px-6 text-sm font-medium transition-colors hover:border-foreground/40 active:scale-[0.97]">
              <Mail size={16} /> Entrar em contato
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center rounded-full border transition-colors hover:border-primary hover:text-primary active:scale-[0.97]">
              <Linkedin size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div style={{ y: yVisual }} initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3, ease }} className="relative lg:col-span-5" aria-hidden>
          <CodePanel />
        </motion.div>
      </div>

      <motion.a href="#sobre" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex" aria-label="Rolar para a seção Sobre">
        <span className="eyebrow">scroll</span>
        <motion.span animate={reduce ? {} : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: 3 }}><ArrowDown size={16} /></motion.span>
      </motion.a>
    </section>
  );
}

function CodePanel() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -right-4 -top-6 h-24 w-24 rounded-2xl border bg-surface-2/60 backdrop-blur" />
      <div className="relative overflow-hidden rounded-2xl border bg-surface shadow-panel">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 font-mono text-[11px] text-muted-foreground">brenno.py</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 text-muted-foreground">
<span className="text-primary">class</span> <span className="text-foreground">Brenno</span>:{"\n"}
{"    "}curso = <span className="text-foreground/80">"ADS · FATEC"</span>{"\n"}
{"    "}semestre = <span className="text-primary">5</span>{"\n"}
{"    "}stack = [<span className="text-foreground/80">"Python"</span>, <span className="text-foreground/80">"Java"</span>,{"\n"}
{"             "}<span className="text-foreground/80">"PHP"</span>, <span className="text-foreground/80">"HTML"</span>, <span className="text-foreground/80">"CSS"</span>]{"\n"}
{"\n"}
{"    "}<span className="text-primary">def</span> <span className="text-foreground">objetivo</span>(self):{"\n"}
{"        "}<span className="text-primary">return</span> <span className="text-foreground/80">"estágio em TI"</span><motion.span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] bg-primary" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.1, repeat: 6 }} />
        </pre>
      </div>
      <div className="absolute -bottom-8 -left-6 rounded-xl border bg-surface-2/90 px-4 py-3 shadow-panel backdrop-blur">
        <p className="eyebrow">status</p>
        <p className="mt-1 flex items-center gap-2 text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-primary" /> Aberto a oportunidades
        </p>
      </div>
    </div>
  );
}
