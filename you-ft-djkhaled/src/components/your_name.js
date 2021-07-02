const YourName = (props) => {
  const { djName, setdjName } = props;

  return (
    <div>
      <h3 className="enterName">Sup playa?! Enter a fire DJ name 🎧</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="djName"></label>
        <input
          id="djName"
          placeholder="🔥 DJ Name Here Dawg 🔥"
          value={djName}
          onChange={(event) => {
            setdjName(event.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default YourName;
