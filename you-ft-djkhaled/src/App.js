import "./App.css";
import Header from "./components/header";
import Vibe from "./components/vibe";
import YourName from "./components/your_name";
import Lyric from "./components/lyrics";
import { useState } from "react";

function App() {
  const [djName, setdjName] = useState("");
  const [vibe, setVibe] = useState("HYPE");
  const [showLyrics, setShowLyrics] = useState(false);
  const [showName, setShowName] = useState(false);

  return (
    <div className="App">
      <Header className="Header" />
      <YourName djName={djName} setdjName={setdjName} />
      <Vibe
        className="Vibe"
        djName={djName}
        vibe={vibe}
        setVibe={setVibe}
        setShowLyrics={setShowLyrics}
        showName={showName}
        setShowName={setShowName}
      />
      {showLyrics ? <Lyric vibe={vibe} /> : null}
    </div>
  );
}

export default App;
