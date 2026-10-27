import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const navItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "habilidades", label: "Habilidades" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export function Navbar() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b bg-background/80 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Principal">
        <a href="#inicio" className="font-display text-sm font-bold tracking-tight">
          brenno<span className="text-primary">.</span>augusto
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id} className="relative">
              <a href={`#${n.id}`} className={`relative block px-3 py-2 text-sm transition-colors ${active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {active === n.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-secondary" transition={{ type: "spring", stiffness: 400, damping: 35 }} />
                )}
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contato" className="hidden rounded-full border px-4 py-2 font-mono text-xs transition-colors hover:border-primary hover:text-primary lg:inline-flex">
          Disponível para estágio
        </a>
        <button className="grid h-11 w-11 place-items-center rounded-full border lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t bg-background lg:hidden">
            <ul className="container-x flex flex-col py-4">
              {navItems.map((n, i) => (
                <motion.li key={n.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)} className={`flex items-center justify-between py-3 font-display text-2xl ${active === n.id ? "text-primary" : ""}`}>
                    {n.label}<span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
