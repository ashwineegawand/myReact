import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const heading = (
    <h1 id="heading">
       Hello from JSX React!
    </h1>
);

const Title = () => (
    <h1>Title Functional Compenent(composition inside Heading compenent)</h1>
);

const HeadingComponent = () => (
    <div>
        <Title />
        <h1>React Functional Component</h1>
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
