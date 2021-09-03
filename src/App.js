import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [btcolor, setbtcolor] = useState("white");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const redc = () => {
    setbtcolor("red");
  };
  const greenc = () => {
    setbtcolor("green");
  };

  let changemode = () => {
    if (mode === "light") {
      setmode("dark");
      setbtcolor("grey");
      document.body.style.backgroundColor = "#000112";
      showalert("dark mode enabled", "success");
    } else {
      setmode("light");
      setbtcolor("white");
      document.body.style.backgroundColor = "white";
      showalert("light mode enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        about="about"
        mode={mode}
        redc={redc}
        greenc={greenc}
        change={changemode}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter text here"
          mode={mode}
          btcolor={btcolor}
          showalert={showalert}
        />
      </div>
    </>
  );
}

export default App;
