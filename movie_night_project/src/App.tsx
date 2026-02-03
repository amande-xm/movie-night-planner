import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GenreSelector from "./components/GenreSelector";
import GroupInfoSelector from "./components/GroupInfoSelector";
import EraSelector from "./components/EraSelector";

function App() {
  const [showForm, setShowForm] = useState(true);
  const switchVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div>
        <h1>Plan your perfect movie night here</h1>
        {showForm && <button onClick={switchVisibility}>Start now →</button>}
        {!showForm && <GenreSelector />}
        {!showForm && <GroupInfoSelector />}
        {!showForm && <EraSelector />}
      </div>
    </>
  );
}

export default App;
