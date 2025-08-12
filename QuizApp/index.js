import React from "react";
import { createRoot } from "react-dom/client"; // new import for React 18
import App from "./App";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports"; // created by `amplify init`

Amplify.configure(awsExports);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
