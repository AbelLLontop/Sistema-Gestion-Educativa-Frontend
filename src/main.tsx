import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);
