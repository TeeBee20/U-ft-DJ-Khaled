import "./App.css";
import Header from "./components/header";
import Vibe from "./components/vibe";
import YourName from "./components/your_name";
import Lyric from "./components/lyrics";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const code = new URLSearchParams(window.location.search).get("code");

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
				code={code}
			/>
			{showLyrics ? <Lyric vibe={vibe} /> : null}
		</div>
	);
}

export default App;
