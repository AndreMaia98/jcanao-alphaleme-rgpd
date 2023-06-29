import React, { useEffect, useState } from "react";
import "./assets/css/App.css";
import Routes from "./routes/routes.js";
import Header from "./layouts/Header";
import Cookies from "./components/cookies";


function App() {
  const [cookies, setCookies] = useState(true);

  const handleClose = () => {
    setCookies(false);
    localStorage.setItem("cookies", false);
  };
  return (
    <>
      <Header />
      <Routes />
      { localStorage.getItem("cookies") !== "false" ?
      <Cookies handleClose={handleClose} /> :
       null }
    </>
  );
}

export default App;
