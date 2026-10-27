import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Contact, Education, Experience, Footer, Languages, Projects, Skills } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brenno Augusto — Estudante de ADS e Desenvolvedor" },
      { name: "description", content: "Portfólio de Brenno Augusto, estudante de Análise e Desenvolvimento de Sistemas na FATEC Bragança Paulista, em busca de estágio em TI." },
      { property: "og:title", content: "Brenno Augusto — Portfólio" },
      { property: "og:description", content: "Estudante de ADS com conhecimentos em Python, Java, PHP, HTML e CSS. Aberto a oportunidades de estágio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#sobre" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Pular para o conteúdo</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
