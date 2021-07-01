import "./App.css";
import Header from "./components/header";
import Vibe from "./components/vibe";
import YourName from "./components/your_name";
import Lyric from "./components/lyrics";
import { useState } from "react";

function App() {
  const [djName, setdjName] = useState("");

  return (
    <div className="App">
      <Header />
      <YourName djName={djName} setdjName={setdjName} />
      <Vibe djName={djName} />
      <Lyric />
    </div>
  );
}

export default App;
