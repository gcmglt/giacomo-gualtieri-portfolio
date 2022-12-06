import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";
import Timeline from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <div className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 h-screen overflow-scroll scrollbar scrollbar-track-stone-400/40 scrollbar-thumb-orange-400/70 cursor-crosshair">
      <Head>
        <title>Giacomo Gualtieri</title>
      </Head>
      <div className="-max-w-5xl w-11/12 mx-auto">
        <Header />
        <section>
          <Intro />
        </section>
        <section>
          <Portfolio />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Timeline />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}
