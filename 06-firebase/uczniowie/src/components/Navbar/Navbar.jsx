import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/grades">Grades</Link>
      <Link to="/notes">Notes</Link>
    </div>
  )
}

export default Navbar