import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const heading = (
    <h1 id="heading">
       Hello from JSX React!
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
