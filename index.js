const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
