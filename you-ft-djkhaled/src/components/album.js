const Album = (props) => {
  console.log(props);
  const { trackList } = props;
  return (
    <div>
      <ul>
        {trackList.map((track, index) => {
          return <li key={index}>{track}</li>;
        })}
      </ul>
    </div>
  );
};

export default Album;
