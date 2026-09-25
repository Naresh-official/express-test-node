const express = require("express");

const app = express();
const PORT = 5000;

app.get("/test1", (req, res) => {
	res.json({ route: "test1", message: "Test route 1 is working" });
});

app.get("/test2", (req, res) => {
	res.json({ route: "test2", message: "Test route 2 is working" });
});

app.get("/test3", (req, res) => {
	res.json({ route: "test3", message: "Test route 3 is working" });
});

app.get("/test4", (req, res) => {
	res.json({ route: "test4", message: "Test route 4 is working" });
});

app.listen(PORT, () => {
	console.log(`Express app running on port ${PORT}`);
});
