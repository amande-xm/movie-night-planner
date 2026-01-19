import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GenreSelector from "./components/GenreSelector";
import MoodSelector from "./components/MoodSelector";
import GroupInfoSelector from "./components/GroupInfoSelector";

function App() {
  return (
    <>
      <div>
        <h1>Plan your perfect movie night here</h1>
        <button> Start now → </button>
      </div>
      <div>
        <GenreSelector />
      </div>
      <div>
        <MoodSelector />
      </div>
      <div>
        <GroupInfoSelector />
      </div>
    </>
  );
}

export default App;
