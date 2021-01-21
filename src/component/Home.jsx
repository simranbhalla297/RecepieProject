import React, { useState } from "react";
import Form from "./Form";
import Receipecard from "./Receipecard";
import axios from "axios";

function Home() {
  const [inputvalue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [receipe, setReceipe] = useState([]);

  const getreceipe = async (e) => {
    e.preventDefault();

    const url = `https://forkify-api.herokuapp.com/api/search?q=${inputvalue}`;
    const request = axios.get(url);
    const response = await request;
    console.log(response.data);

    setResult(response.data.recipes);
    setReceipe(response.data.recipes);
    console.log(inputvalue);
  };

  const inputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Receipe search</h2>
      </header>

      <Form
        inputValue={inputValue}
        fieldValue={inputvalue}
        getreceipe={getreceipe}
        result={result}
      />

      <Receipecard receipeData={receipe} />
    </div>
  );
}

export default Home;
