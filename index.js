require("dotenv").config();

const defaults = require("./config/defaults");

const server = require("./api/server.js");

const port = process.env.PORT;
server.listen(port, () => {
  console.log(
    `\n*** Server Running on http://localhost:${defaults.port} ***\n`
  );
});
