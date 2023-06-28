var express = require("express");
var app = express();
app.use(express.static("build"));
var PORT = 3000;
app.listen(PORT, function (err) {
  if (err) {
    console.error("Server Error: " + err);
  }
  console.info("==> ✅ Server is running on port: " + PORT);
});
