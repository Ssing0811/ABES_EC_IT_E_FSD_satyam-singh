const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello React Learner (React)"
);

const outerDiv = React.createElement("div", { id: "outer" }, heading);

const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(outerDiv);