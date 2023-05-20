import React from "react";
import styles from "./SearchedWord.module.css";
import type { SearchedWordData } from "../../types/SearchedWordData";

const SearchedWord: React.FC<SearchedWordData> = ({
  meanings,
  phonetics,
  word,
}) => {
  console.log("phonetics ", phonetics);

  return (
    <div className={styles.container}>
      <h1>{word}</h1>

      <div className="phonetics">
        {/* <Phonetics {...phonetics}/> */}

        {phonetics.map((elem, idx) => (
          <React.Fragment key={idx}>
            <h3>{elem.text}</h3>
            <audio src={elem.audio} controls>
              Your browser does not support audio element
            </audio>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SearchedWord;
