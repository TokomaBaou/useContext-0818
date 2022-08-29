import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
// import { createRoot } from "react-dom/client";


import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import {CounterProvider} from './CounterContext'

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
 <CounterProvider>
    <App />
 </CounterProvider>
</StrictMode>
);
