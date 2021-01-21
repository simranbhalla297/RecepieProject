import React from "react";

function Form(props) {
  return (
    <div>
      <form className="form" onSubmit={props.getreceipe}>
        <input type="text" placeholder="search" onChange={props.inputValue} />

        <button
          style={{
            padding: "10px",
            marginLeft: "5px",
            width: "90px",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
export default Form;
