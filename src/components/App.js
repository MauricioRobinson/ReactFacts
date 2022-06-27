import React, { useState } from "react";
import Facts from "./Facts";
import Header from "./Header";

function App(props) {
  const [darkMode, setDarkMode] = useState(true);

  console.log(darkMode);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <main className={props.darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Facts darkMode={darkMode} />
    </main>
  );
}

export default App;
