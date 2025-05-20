import Lenis from "lenis";

import { Navbar } from "./components/Navbar";
import "/src/style.css";

import { Outlet, Route, Routes, useLocation } from "react-router";
import { Dashboard } from "./components/Routes/dashboard";
import { Sandbox } from "./components/Routes/sandbox";
import { Lessons } from "./components/Routes/lessons";
import { MainHTML } from "./components/Routes/HTML Lessons/mainHTML";
import { HTMLLesson } from "./components/Routes/HTML Lessons/HTMLLesson";
import { useEffect, useRef } from "react";
import Home from "./Home";
import { Register } from "./Register";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const isHome = location.pathname === "/";
    if (isHome && !lenisRef.current) {
      const lenis = new Lenis({ autoRaf: true });
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    if (!isHome && lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sandbox" element={<Sandbox />} />
          <Route path="lessons" element={<Lessons />} />
          {/* HTML */}
          <Route path="/lessons/html" element={<MainHTML />} />
          <Route path="/lessons/html/:lessonId" element={<HTMLLesson />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
