import React, { useState } from "react";

import { apiLink, apiKey } from "../api/apiData";
import axios from "axios";

export default function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const url = `${apiLink}?apikey=${apiKey}&s=${query}`;

  const fetchData = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);
      setData(result.data.Search);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h2>Search:</h2>
      <form onSubmit={fetchData}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.imdbID}>
              <img src={item.Poster} alt="" />
              <h2>{item.Title}</h2>
              <p>{item.Year}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
