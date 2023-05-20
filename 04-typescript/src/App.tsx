import { useState } from "react";
import axios from "axios";
import "./App.css";
import type { SearchedWordData } from "./types/SearchedWordData";
import SearchedWord from "./components/SearchedWord/SearchedWord";

const API = "https://api.dictionaryapi.dev/api/v2/entries/en";

function App() {
  const [searchedWordData, setSearchedWordData] = useState<
    Array<SearchedWordData>
  >([]);

  console.log("searchedWordData ", searchedWordData);

  const getData = async (searchedWord: string) => {
    try {
      const response = await axios.get(`${API}/${searchedWord}`);

      if (response?.data) setSearchedWordData(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchedWord: string = e.target.search_field.value;

    getData(searchedWord);

    e.target.reset();
  };

  return (
    <div className="container">
      <div className="search_section">
        <div className="form">
          <h1>English dictionary</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search_field"
              id="search_field"
              placeholder="I'm looking for the meaning of..."
              required
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="results_section">
        <div className="definition">
          {searchedWordData.length ? (
            // pojedyncza definicja
            <SearchedWord {...searchedWordData[0]} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
