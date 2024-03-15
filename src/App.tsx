import React from "react";
import { ToastContainer } from "react-toastify";
import RoutersContainer from "./routers/RoutersContainer";
import "react-toastify/dist/ReactToastify.css";
import I18Provider from "./i18/i18";

function App() {
  return (
    <I18Provider>
      <RoutersContainer />
      <ToastContainer position="top-right" style={{ marginTop: "60px" }} />
    </I18Provider>
  );
}

export default App;
