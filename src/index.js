import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithNavigate } from "./auth/auth0-provider-with-navigate";
import { ApolloProvider } from "@apollo/client"
import client from "./graphql/client"
import "./styles/styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);