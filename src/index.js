import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const WidgetDivs = document.querySelectorAll(".reddit_widget");

WidgetDivs.forEach((Div) => {
  const root = ReactDOM.createRoot(Div);
  root.render(
    <React.StrictMode>
      <App domElement={Div}/>
    </React.StrictMode>
  );
});




