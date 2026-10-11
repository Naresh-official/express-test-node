const express = require("express");

const app = express();
const PORT = 5000;

// Middleware logger to log request details on every route
app.use((req, res, next) => {
	const timestamp = new Date().toISOString();
	console.log(`[${timestamp}] ${req.method} ${req.originalUrl} - IP: ${req.ip || req.socket.remoteAddress}`);
	if (req.query && Object.keys(req.query).length > 0) {
		console.log("  Query:", req.query);
	}
	if (req.body && Object.keys(req.body).length > 0) {
		console.log("  Body:", req.body);
	}
	next();
});

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
