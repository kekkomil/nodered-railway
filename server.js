const express = require("express");
const http = require("http");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/",
  httpNodeRoot: "/api",
  userDir: "./.nodered/",
  functionGlobalContext: {},
};

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server listening on port", port);
});
RED.start();
