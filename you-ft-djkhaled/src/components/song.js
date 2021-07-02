import { useState } from "react";
import Album from "./album";

const Song = (props) => {
  const [trackList, setTrackList] = useState([]);
  const { djName, song } = props;

  const updateAlbum = () => {
    setTrackList((currTrackList) => {
      if (currTrackList.includes(song)) {
        alert("You just played yo self - and this song too");
        return currTrackList;
      }
      const newList = [...currTrackList, song];
      return newList;
    });
  };

  const deleteTrack = () => {
    setTrackList((currTrackList) => {
      const copy = [...currTrackList];
      copy.pop();
      return copy;
    });
  };

  return (
    <div className="track">
      <h3>Your New Track</h3>
      <p className="ftdjkhaled">
        <span>{song}</span> - {djName} ft. DJ KHALED
      </p>
      <Album
        trackList={trackList}
        updateAlbum={updateAlbum}
        deleteTrack={deleteTrack}
      />
    </div>
  );
};

export default Song;
