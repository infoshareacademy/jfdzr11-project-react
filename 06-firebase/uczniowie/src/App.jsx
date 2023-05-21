import styles from "./App.module.css";
import { Navbar, Footer, Notes, Grades, Students, Home } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.page_content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/grades" element={<Grades />} />
        </Routes>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default App
