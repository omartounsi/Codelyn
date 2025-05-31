import { Hero } from "./components/Hero";
import { LessonPreview } from "./components/LessonPreview";
import { LessonsNav } from "./components/LessonsNav";
import { ProgressPreview } from "./components/ProgressPreview";
import { FAQ } from "./components/FAQ";
import { Call } from "./components/Call";
import { Footer } from "./components/Footer";
import { EditorPreview } from "./components/EditorPreview";

const Home = () => {
  return (
    <div className="h-auto w-full pb-10 bg-gradient-to-t from-slate-800 via-slate-700 to-slate-800 grid font-[Geist] grid-cols-12 text-neutral-300 pt-14 scrollbar-custom">
      {/* LEFT */}
      <div className="col-span-1 border-dashed border-neutral-600"></div>
      {/* MAIN */}
      <div className="col-span-10 border-l border-r border-slate-700">
        <div className="p-6 border-neutral-200/20">
          <Hero />
        </div>
        <div className="px-6">
          <LessonsNav />
        </div>
        <LessonPreview />
        <div className="p-6">{/* <EditorPreview /> */}</div>
        <div className="p-6">
          <ProgressPreview />
        </div>
        <div className="p-6 border-neutral-200/20">
          <FAQ />
        </div>

        <Call />
        <Footer />
      </div>
      {/* RIGHT */}
      <div className="col-span-1 border-l border-dashed border-neutral-800">
        {/* <div className="border-b border-dashed h-72 border-neutral-800"></div>
        <div className="border-b border-dashed h-14 border-neutral-800"></div>
        <div className="border-b border-dashed h-200 border-neutral-800"></div>
        <div className="border-b border-dashed h-50 border-neutral-800"></div>
        <div className="border-b border-dashed h-400 border-neutral-800"></div>
        <div className="h-screen border-b border-dashed border-neutral-800"></div>
        <div className="border-b border-dashed h-100 border-neutral-800"></div> */}
      </div>
    </div>
  );
};

export default Home;
