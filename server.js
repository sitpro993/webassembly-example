const express = require("express");
const app = express();

app.use(
  express.static("public", {
    setHeaders: (res, path, stat) => {
      if (path.endsWith("./wasm")) {
        res.set("Content-Type", "application/wasm");
      }
    },
  })
);

app.listen(3001, () => {
  console.log("server is running in http://localhost:3001/");
});
