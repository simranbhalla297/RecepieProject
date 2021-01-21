import React from "react";
import { Link } from "react-router-dom";
function Receipecard(props) {
  return (
    <div className="receipe_container">
      <div className="receipe_box">
        {props.receipeData.map((receipeItem, _id) => {
          return (
            <div key={_id} className="box">
              <div>
                <img
                  width="350"
                  height="300"
                  alt={`The Receipe name: ${receipeItem.title}`}
                  src={receipeItem.image_url}
                />
              </div>
              <p className="title_heading">
                {receipeItem.title.length < 20
                  ? `${receipeItem.title}`
                  : `${receipeItem.title.substring(0, 25)}...`}
              </p>
              <p className="publish">PUBLISHER: {receipeItem.publisher}</p>
              <button className="btn">
                <Link
                  to={`/recipe?id=${receipeItem.recipe_id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  View receipe
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Receipecard;
