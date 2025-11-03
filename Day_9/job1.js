<<<<<<< HEAD
const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello React Learner (React)"
);

const outerDiv = React.createElement("div", { id: "outer" }, heading);

const root = ReactDOM.createRoot(document.getElementById("root2"));
=======
const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello React Learner (React)"
);

const outerDiv = React.createElement("div", { id: "outer" }, heading);

const root = ReactDOM.createRoot(document.getElementById("root2"));
>>>>>>> 3a0c5d9cf4d3a20642d6910d4a7c1c03c912d62d
root.render(outerDiv);