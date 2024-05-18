import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

const RemoteButton = React.lazy(() => import("Remote/Clock"));
const RemoteCalendarApp = React.lazy(() => import("RemoteCalendar/App"));

const RemoteWrapper = ({ children }) => (
  <div className="remote-wrapper">
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div className="app-container">
    <h1 className="app-title">This is the Host!</h1>
    <div className="remote-components">
      <RemoteWrapper>
        <div style={{ width: "400px", height: "300px" }}>
          {" "}
          {/* Adjust dimensions as needed */}
          <RemoteButton />
        </div>
      </RemoteWrapper>
      <RemoteWrapper>
        <div style={{ width: "400px", height: "300px" }}>
          {" "}
          {/* Adjust dimensions as needed */}
          <RemoteCalendarApp />
        </div>
      </RemoteWrapper>
    </div>

    <br />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <a
        className="app-link"
        href="http://localhost:4000"
        style={{
          marginRight: "20px",
        }}
      >
        Link to Clock App
      </a>
      <a className="app-link" href="http://localhost:4001">
        Link to Calendar App
      </a>
    </div>
  </div>
);

export default App;
