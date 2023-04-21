import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.min.css";
import ProductLayout from "./Products/components/ProductLayout.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductLayout />
  </React.StrictMode>
);
