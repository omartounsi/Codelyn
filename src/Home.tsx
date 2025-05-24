import { Hero } from "./components/Hero";
import { LessonPreview } from "./components/LessonPreview";
import { LessonsNav } from "./components/LessonsNav";
import { ProgressPreview } from "./components/ProgressPreview";
import { FAQ } from "./components/FAQ";
import { Call } from "./components/Call";
import { Footer } from "./components/Footer";
import { EditorPreview } from "./components/EditorPreview";
// import { useEffect, useRef } from "react";
// import Lenis from "lenis";
// import { useLocation } from "react-router";

const Home = () => {
  // const location = useLocation();
  // const lenisRef = useRef<Lenis | null>(null);

  // useEffect(() => {
  //   const isHome = location.pathname === "/";
  //   if (isHome && !lenisRef.current) {
  //     const lenis = new Lenis({ autoRaf: true });
  //     lenisRef.current = lenis;

  //     function raf(time: number) {
  //       lenis.raf(time);
  //       requestAnimationFrame(raf);
  //     }

  //     requestAnimationFrame(raf);
  //   }

  //   if (!isHome && lenisRef.current) {
  //     lenisRef.current.destroy();
  //     lenisRef.current = null;
  //   }
  // }, [location.pathname]);
  return (
    <div className="h-auto w-full bg-zinc-950 grid font-[Geist] grid-cols-12 text-neutral-300 pt-14 scrollbar-custom">
      {/* LEFT */}
      <div className="col-span-1 border-r border-neutral-800 border-dashed">
        <div className="h-72 border-b border-dashed border-neutral-800"></div>
        <div className="h-14 border-b border-dashed border-neutral-800"></div>
        <div className="h-200 border-b border-dashed border-neutral-800"></div>
        <div className="h-50 border-b border-dashed border-neutral-800"></div>
        <div className="h-400 border-b border-dashed border-neutral-800"></div>
        <div className="h-screen border-b border-dashed border-neutral-800"></div>
        <div className="h-100 border-b border-dashed border-neutral-800"></div>
      </div>
      {/* MAIN */}
      <div className="col-span-10">
        <Hero />
        <LessonsNav />
        <LessonPreview />
        <ProgressPreview />
        <FAQ />
        <EditorPreview />
        <Call />
        <Footer />
      </div>
      {/* RIGHT */}
      <div className="col-span-1 border-l border-dashed  border-neutral-800">
        <div className="h-72 border-b border-dashed border-neutral-800"></div>
        <div className="h-14 border-b border-dashed border-neutral-800"></div>
        <div className="h-200 border-b border-dashed border-neutral-800"></div>
        <div className="h-50 border-b border-dashed border-neutral-800"></div>
        <div className="h-400 border-b border-dashed border-neutral-800"></div>
        <div className="h-screen border-b border-dashed border-neutral-800"></div>
        <div className="h-100 border-b border-dashed border-neutral-800"></div>
      </div>
    </div>
  );
};

export default Home;
