import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
// import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);

  //methos to show alert with custom message and type
  // let showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("darkBlue");
  //   document.body.classList.remove("darkMaroon");
  //   document.body.classList.remove("darkGreen");
  //   document.body.classList.remove("default");
  // };

  // //toggle mode function
  // let toggleMode = (colorName) => {
  //   removeBodyClasses();
  //   console.log(colorName);
  //   document.body.classList.add(colorName);

  //   //switching in between light and dark mode
  //   if (
  //     colorName === "darkBlue" ||
  //     colorName === "darkMaroon" ||
  //     colorName === "darkGreen"
  //   ) {
  //     setMode("dark");
  //     document.title = "TextUtils - Dark Mode";
  //   } else if (colorName === "default") {
  //     setMode("light");
  //     document.title = "TextUtils - Light Mode";
  //   }
  // };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundImage = "linear-gradient(#1a2980,#26d0ce)";
      // showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundImage = "linear-gradient(#fff,#fff)";
      // showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextAnalyzer"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Alert alert={alert} /> */}
      {/* <div className="container my-4"> */}
      {/* <Routes> */}
      {/* <Route */}
      {/* exact path="/" element= */}
      {/* { */}
      {/* <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        /> */}
      {/* } */}
      {/* /> */}
      {/* <Route exact path="/about" element={<About />} /> */}
      {/* </Routes> */}
      {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
