import React from "react";
import "./App.css";
import NasaGrid from "./components/NasaGrid";
import NasaCard from "./components/NasaCard";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <header>

        <h1>NASA Photo Of The Day</h1>
  
      </header>
      <NasaCard/>
      <NasaGrid/>
    </div>
  );
}

export default App;
