import { useState } from "react";
import Album from "./album";

const Song = (props) => {
  const [trackList, setTrackList] = useState([]);
  const { djName, song } = props;

  const updateAlbum = () => {
    setTrackList((currTrackList) => {
      console.log(trackList);
      const newList = [...currTrackList, song];
      return newList;
    });
  };

  return (
    <div>
      <h3>Your New Track</h3>
      <p>
        {song} - {djName} ft. DJ KHALED
      </p>
      <p>Lit or Trash? Add to da record or nah?</p>
      <button
        onClick={() => {
          updateAlbum();
        }}
      >
        😍
      </button>
      <button>🗑️</button>
      <Album trackList={trackList} />
    </div>
  );
};

export default Song;
