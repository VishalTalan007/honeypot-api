const express = require("express");
const app = express();

app.use(express.json());

const API_KEY = "mysecret123";

app.post("/honeypot", (req, res) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({
      status: "blocked",
      message: "Unauthorized access attempt logged"
    });
  }

  return res.status(200).json({
    status: "ok",
    honeypot: true,
    message: "Request accepted and monitored"
  });
});

app.listen(3000, () => {
  console.log("Honeypot server is running on port 3000");
});
