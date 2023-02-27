const heading1 = React.createElement(
  "h1",
  {
    id: "heading-1",
  },
  "Namaste World!"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "heading-2",
  },
  "Igniting our App"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
