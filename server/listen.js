const app = require("./server");
const PORT = 9090;

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Listening on ${PORT}`);
});
