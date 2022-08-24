// import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "./ThemeContext";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
 <ThemeProvider>
  {/* <StrictMode> */}
    <App />
  {/* </StrictMode> */}
 </ThemeProvider>
);
