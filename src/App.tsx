import { Navbar } from "./components/Navbar";
import "/src/style.css";

import { Outlet, Route, Routes } from "react-router";
import { Dashboard } from "./components/Routes/dashboard";
import { Sandbox } from "./components/Routes/sandbox";
import { Lessons } from "./components/Routes/lessons";
import { MainHTML } from "./components/Routes/HTML Lessons/mainHTML";
import { HTMLLesson } from "./components/Routes/HTML Lessons/HTMLLesson";
import Home from "./Home";
import { Register } from "./Register";
import { Login } from "./Login";
import { useAuth } from "./context/AuthContext";
import { ProtectedRoute } from "./components/tools/protectedroute";

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

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="sandbox" element={<Sandbox />} />
          <Route path="lessons" element={<Lessons />} />
          {/* HTML */}
          <Route path="/lessons/html" element={<MainHTML />} />
          <Route path="/lessons/html/:lessonId" element={<HTMLLesson />} />
        </Route>
        {/* NO NAV */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
