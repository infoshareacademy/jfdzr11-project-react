import styles from "./App.module.css";
import { Notes, Grades, Students, Home, Layout, Login, Register } from "./components";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Publiczne ściezki */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Ściezki prywatne */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/grades" element={<Grades />} />
            </Route>
          </Route>
        </Routes>
  )
}

export default App
