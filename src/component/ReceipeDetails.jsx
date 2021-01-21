import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
function ReceipeDetails(props) {
  console.log(props);
  const [activereceipe, setActivereceipe] = useState();

  const getRecipedetails = async () => {
    console.log("working");
    if (activereceipe) {
      return;
    }
    const search = props.location.search;
    const substringSearch = search.substring(4);
    const url = `https://forkify-api.herokuapp.com/api/get?rId=${substringSearch}`;
    const req = axios.get(url);
    const res = await req;
    console.log(res);
    setActivereceipe(res.data.recipe);
  };
  useEffect(() => {
    getRecipedetails();
    console.log("render");
  });

  let html;
  if (activereceipe) {
    html = (
      <div className="main">
        {activereceipe.length !== 0 && (
          <div className="box_container">
            <div className="center">
              <div>
                <img
                  alt={`The Receipe name: ${activereceipe.title}`}
                  src={activereceipe.image_url}
                  className="foodImage"
                />
              </div>
            </div>
            <div className="right">
              <h3>{activereceipe.title} </h3>
              <p>
                Website:
                <span>
                  <a href={activereceipe.publisher_url}>
                    {activereceipe.publisher_url}
                  </a>
                </span>
              </p>

              <p>{activereceipe.publisher}</p>
              <h4>Ingredients Required:</h4>
              <ul>
                {activereceipe.ingredients.map((item) => {
                  return (
                    <div className="list_continer">
                      <li>{item}</li>
                    </div>
                  );
                })}
              </ul>

              <button className="btn">
                <Link to="/" style={{ textDecoration: "none" }}>
                  Go Home
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    html = null;
  }
  return html;
}
export default ReceipeDetails;
