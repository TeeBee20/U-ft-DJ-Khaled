const Album = (props) => {
  const { trackList, updateAlbum, deleteTrack } = props;
  return (
    <div>
      <p>Lit or Trash? Add to da record or nah?</p>
      <button
        onClick={() => {
          updateAlbum();
        }}
      >
        😍
      </button>
      <button
        onClick={() => {
          deleteTrack();
        }}
      >
        🗑️
      </button>
      <ul>
        {trackList.map((track, index) => {
          return <li key={index}>{track}</li>;
        })}
      </ul>
    </div>
  );
};

export default Album;
