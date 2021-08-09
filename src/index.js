import React from "react";
import { render } from "react-dom";
import App from "./app";

if (process.env.NODE_ENV === "development") {
  console.log("only run in dev mode");
} else {
  console.log("only runs in production");
}

render(<App />, document.getElementById("root"));