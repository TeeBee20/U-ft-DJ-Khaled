import Song from "./song";
import { useState } from "react";

const Vibe = (props) => {
  const [song, setSong] = useState("");
  const { djName, vibe, setVibe, setShowLyrics, showName, setShowName } = props;
  const tracks = {
    HYPE: [
      "All I do is win",
      "I'm On One",
      "WE GOING CRAZY",
      "Go Hard",
      "Fudge Up the Club",
    ],
    "2AM": [
      "Wild Thoughts",
      "Holla at Me",
      "For Free",
      "I Wanna Be With You",
      "Give It All To Me",
    ],
    GRIND: [
      "HOLY KEY",
      "POPSTAR",
      "I DID IT",
      "I Got the Keys",
      "Never Surrender",
    ],
    TRIPPIN: [
      "You Don't Want These Problems",
      "No New Friends",
      "Don't Ever Play Yourself",
      "I Did It For My Dawgz",
      "I Wish You Would",
    ],
  };

  const newSong = (tracks, vibe) => {
    setSong(tracks[vibe][Math.floor(Math.random() * 5)]);
  };

  const chooseVibe = (choice) => {
    setVibe(choice);
  };

  const showLyricsFunc = () => {
    setShowLyrics(true);
  };

  const showNameFunc = () => {
    setShowName(true);
  };

  return (
    <div>
      <h3>Choose yo vibe 🌊</h3>
      <button
        onClick={() => {
          newSong(tracks, "HYPE");
          chooseVibe("HYPE");
          showLyricsFunc();
          showNameFunc();
        }}
      >
        HYPE 🙌 🍾 🕺
      </button>
      <button
        onClick={() => {
          newSong(tracks, "2AM");
          chooseVibe("2AM");
          showLyricsFunc();
          showNameFunc();
        }}
      >
        2 AM u up? 🤔 😈 😏
      </button>
      <button
        onClick={() => {
          newSong(tracks, "GRIND");
          chooseVibe("GRIND");
          showLyricsFunc();
          showNameFunc();
        }}
      >
        ON DA GRIND 💯 🍞 💸
      </button>
      <button
        onClick={() => {
          newSong(tracks, "TRIPPIN");
          chooseVibe("TRIPPIN");
          showLyricsFunc();
        }}
      >
        U trippin? 👀 👊💥
      </button>
      {showName ? <Song djName={djName} song={song} /> : null}
    </div>
  );
};

export default Vibe;
