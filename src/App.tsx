import { Navbar } from "./components/Navbar";
import "/src/style.css";

import { Outlet, Route, Routes } from "react-router";
import { Dashboard } from "./components/Routes/dashboard/dashboard";
import { Sandbox } from "./components/Routes/sandbox";
import { Lessons } from "./components/Routes/lessons";
import { Curriculum } from "./components/Routes/Curriculum";
import { MainHTML } from "./components/Routes/HTML Lessons/mainHTML";
import { HTMLLesson } from "./components/Routes/HTML Lessons/HTMLLesson";
import Home from "./Home";
import { Register } from "./Register";
import { Login } from "./Login";
import { useAuth } from "./context/AuthContext";
import { ProtectedRoute } from "./components/tools/protectedroute";
import { LoadingModal } from "./components/tools/loadingmodal";
import { Contact } from "./components/Routes/Contact";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  const { loading } = useAuth();

  if (loading) return <LoadingModal />;
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="sandbox"
            element={
              <ProtectedRoute>
                <Sandbox />
              </ProtectedRoute>
            }
          />
          <Route
            path="lessons"
            element={
              <ProtectedRoute>
                <Lessons />
              </ProtectedRoute>
            }
          />
          {/* HTML */}
          <Route
            path="/lessons/html"
            element={
              <ProtectedRoute>
                <MainHTML />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lessons/html/:lessonId"
            element={
              <ProtectedRoute>
                <HTMLLesson />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* NO NAV */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
