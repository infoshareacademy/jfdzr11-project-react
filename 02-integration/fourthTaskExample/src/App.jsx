import {useEffect, useState } from "react";

import './App.css'
import styles from "./componentStyles.module.css"

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).catch((error) => console.error("An error occured ", error))

      setNotes(res);
    }

    getData();

  }, [])

  return (
    <div className={styles.container}>
      {notes.map((elem, idx) => (
          <div key={`${elem.id}+${idx}`} className={styles.card}>
            <div className={styles.top_part}>
              {}
            </div>
            <div className={styles.bottom_part}>
              <h1>{elem.name}</h1>
              <h3>tel: {elem.phone}</h3>
              <p>website: {elem.website}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default App
