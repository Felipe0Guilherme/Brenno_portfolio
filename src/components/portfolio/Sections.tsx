import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, Code2, Cpu, Github, Globe, GraduationCap, Layers, Mail, MapPin, MessageCircle, Phone, Linkedin, Award } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { education, experiences, languages, profile, projects, skillGroups, traits } from "@/data/profile";

export function About() {
  const path = [
    { tag: "2018", text: "Edição de vídeo" },
    { tag: "2021", text: "SENAI & Cisco" },
    { tag: "2022", text: "Manutenção eletroeletrônica" },
    { tag: "2024", text: "FATEC · ADS" },
  ];
  return (
    <section id="sobre" className="py-28 md:py-36">
      <div className="container-x">
        <SectionHead index="01" label="Sobre" title="Mais do que código, vontade de evoluir." />
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4 md:col-start-1">
            <ol className="relative space-y-7 border-l pl-6">
              {path.map((p) => (
                <li key={p.tag} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                  <p className="font-mono text-xs text-primary">{p.tag}</p>
                  <p className="mt-1 text-sm">{p.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground/85 md:text-xl">
                Minha trajetória reúne experiências em tecnologia, manutenção eletroeletrônica e edição de vídeo. Atualmente, curso Análise e Desenvolvimento de Sistemas e busco aprofundar meus conhecimentos em desenvolvimento de software, participando de projetos e aprendendo com desafios reais.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-3">
              {traits.map((t, i) => (
                <Reveal key={t} delay={i * 0.05} className="bg-background">
                  <div className="group h-full p-5 transition-colors hover:bg-surface">
                    <span className="font-mono text-[11px] text-muted-foreground group-hover:text-primary">0{i + 1}</span>
                    <p className="mt-3 text-sm font-medium">{t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const icons = { code: Code2, globe: Globe, cpu: Cpu, layers: Layers };

export function Skills() {
  return (
    <section id="habilidades" className="border-y bg-surface/40 py-28 md:py-36">
      <div className="container-x">
        <SectionHead index="02" label="Habilidades" title="Ferramentas que fazem parte da minha base.">
          Conhecimentos adquiridos na faculdade, em cursos técnicos e na prática profissional.
        </SectionHead>
        <div className="grid gap-4 md:grid-cols-6">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            const span = i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-3";
            return (
              <Reveal key={g.id} delay={i * 0.06} className={span}>
                <div className="card-hover h-full rounded-2xl border bg-background p-7">
                  <div className="flex items-start justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border text-primary"><Icon size={18} /></div>
                    <span className="font-mono text-xs text-muted-foreground">{g.id}</span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold">{g.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="cursor-default rounded-full border px-3.5 py-1.5 text-sm text-foreground/85 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary">{s}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section id="experiencia" className="py-28 md:py-36">
      <div className="container-x">
        <SectionHead index="03" label="Experiência" title="Trajetória construída na prática." />
        <div ref={ref} className="relative md:ml-[33.33%]">
          <div className="absolute left-0 top-0 h-full w-px bg-border" />
          <motion.div style={{ scaleY }} className="absolute left-0 top-0 h-full w-px origin-top bg-primary" />
          <div className="space-y-6">
            {experiences.map((e, i) => (
              <Reveal key={e.org + e.role} delay={i * 0.04} className="relative pl-8 md:pl-10">
                <span className={`absolute -left-[5px] top-8 h-[11px] w-[11px] rounded-full border-2 border-background ${e.featured ? "bg-primary" : "bg-muted-foreground"}`} />
                <article className={`card-hover rounded-2xl border p-6 md:p-8 ${e.featured ? "bg-surface" : "bg-background"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-xs text-primary">{e.period}</p>
                    {e.featured && <span className="rounded-full border border-primary/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">Narrativa visual</span>}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold md:text-2xl">{e.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const a = education.academic;
  return (
    <section id="formacao" className="border-y bg-surface/40 py-28 md:py-36">
      <div className="container-x">
        <SectionHead index="04" label="Formação" title="Formação acadêmica e cursos complementares." />
        <div className="grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="card-hover relative h-full overflow-hidden rounded-2xl border bg-background p-8 md:p-10">
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
              <div className="relative">
                <p className="eyebrow flex items-center gap-2"><GraduationCap size={14} className="text-primary" /> Graduação · Em andamento</p>
                <h3 className="mt-10 text-3xl font-semibold md:text-4xl">{a.course}</h3>
                <p className="mt-3 text-muted-foreground">{a.org}</p>
                <p className="mt-10 font-mono text-sm text-primary">{a.period}</p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 lg:col-span-2">
            {education.courses.map((c, i) => (
              <Reveal key={c.org} delay={0.08 + i * 0.06}>
                <div className="card-hover h-full rounded-2xl border bg-background p-6">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow flex items-center gap-2"><Award size={14} className="text-primary" /> Curso complementar</p>
                    <span className="font-mono text-xs text-muted-foreground">{c.period}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{c.org}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.items.map((it) => <li key={it} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const cats = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [filter, setFilter] = useState("Todos");
  const list = projects.filter((p) => filter === "Todos" || p.category === filter);
  return (
    <section id="projetos" className="py-28 md:py-36">
      <div className="container-x">
        <SectionHead index="05" label="Projetos" title="Portfólio de trabalhos.">
          Esta galeria está sendo preparada. Os cards abaixo são exemplos temporários de estrutura — projetos reais serão publicados aqui em breve.
        </SectionHead>
        <Reveal className="mb-8 flex flex-wrap gap-2" >
          <div role="tablist" aria-label="Filtrar projetos" className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} role="tab" aria-selected={filter === c} onClick={() => setFilter(c)} className={`relative rounded-full border px-4 py-2 text-sm transition-colors ${filter === c ? "border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>
        </Reveal>
        <motion.div layout className="grid gap-4 md:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.article
                layout
                key={p.category + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className={`group card-hover overflow-hidden rounded-2xl border bg-surface ${i === 0 && filter === "Todos" ? "md:col-span-6 lg:col-span-4 lg:row-span-2" : "md:col-span-3 lg:col-span-2"}`}
              >
                <div className="border-b bg-background/60">
                  <div className="flex items-center gap-1.5 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/30" /><span className="h-2 w-2 rounded-full bg-muted-foreground/30" /><span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    <span className="ml-3 flex-1 truncate rounded bg-secondary px-3 py-0.5 font-mono text-[10px] text-muted-foreground">em-breve.dev</span>
                  </div>
                  <div className={`grid-bg relative grid place-items-center ${i === 0 && filter === "Todos" ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
                    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">{"</ projeto em breve >"}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{p.category}</span>
                    {p.example && <span className="rounded-full border border-dashed px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">Exemplo temporário</span>}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <ul className="flex flex-wrap gap-1.5">{p.tags.map((t) => <li key={t} className="rounded bg-secondary px-2 py-0.5 font-mono text-[11px]">{t}</li>)}</ul>
                    <div className="flex gap-3 text-sm">
                      {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1">Demo <ArrowUpRight size={14} /></a>}
                      {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1"><Github size={14} /> Código</a>}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export function Languages() {
  return (
    <section aria-labelledby="idiomas" className="border-y py-14">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p id="idiomas" className="eyebrow"><span className="text-primary">06</span> / Idiomas</p>
        <ul className="flex flex-wrap gap-x-12 gap-y-4">
          {languages.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.06}>
              <li className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-semibold">{l.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{l.level}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: Mail, label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Telefone / WhatsApp", value: profile.phone, href: profile.whatsapp },
    { icon: Linkedin, label: "LinkedIn", value: "Brenno Augusto", href: profile.linkedin },
    { icon: MapPin, label: "Localização", value: profile.location },
  ];
  return (
    <section id="contato" className="relative overflow-hidden py-28 md:py-40">
      <div className="glow-soft pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <Reveal><p className="eyebrow"><span className="text-primary">07</span> / Contato</p></Reveal>
        <Reveal delay={0.05}><h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] md:text-7xl">Vamos conversar sobre <span className="text-primary">tecnologia?</span></h2></Reveal>
        <Reveal delay={0.1}><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Estou em busca de oportunidades para aprender, contribuir com projetos reais e crescer profissionalmente na área de TI. Se você procura alguém dedicado, proativo e disposto a evoluir, entre em contato.</p></Reveal>
        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-[0.97]"><Mail size={16} /> Enviar e-mail</a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full border px-6 text-sm font-medium transition-colors hover:border-primary hover:text-primary active:scale-[0.97]"><MessageCircle size={16} /> WhatsApp</a>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const inner = (
              <>
                <it.icon size={16} className="text-primary" />
                <p className="eyebrow mt-6">{it.label}</p>
                <p className="mt-1 break-all text-sm font-medium">{it.value}</p>
              </>
            );
            return (
              <Reveal key={it.label} delay={i * 0.05} className="bg-background">
                {it.href ? (
                  <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block h-full p-6 transition-colors hover:bg-surface">{inner}</a>
                ) : <div className="h-full p-6">{inner}</div>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container-x flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Brenno Augusto</p>
        <p className="font-mono text-xs">Bragança Paulista, SP · <a href="#inicio" className="link-underline hover:text-foreground">voltar ao topo ↑</a></p>
      </div>
    </footer>
  );
}
