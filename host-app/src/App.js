// host-app/src/App.js
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({ children }) => (
  <div className="remote-wrapper">
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div className="app-container">
    <h1 className="app-title">This is the Host!</h1>
    <RemoteWrapper>
      <RemoteButton />
    </RemoteWrapper>

    <br />
    <a className="app-link" href="http://localhost:4000">
      Link to Remote App
    </a>
  </div>
);

export default App;
