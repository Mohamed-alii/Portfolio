import reactDom from "react-dom";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ColorsContextProvider } from "./store/colors-store";

reactDom.render(
  <BrowserRouter>
    <ColorsContextProvider>
      <App />
    </ColorsContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
