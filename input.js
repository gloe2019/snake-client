const connect = require("./client");

//pass conn object from connect() to setupInput()
let connection;
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "w") connection.write("Move: up");
  if (key === "a") connection.write("Move: left");
  if (key === "s") connection.write("Move: down");
  if (key === "d") connection.write("Move: right");
  if (key === "r") connection.write("Say: Cool!");
  if (key === "m") connection.write("Say: Moar!!");
  if (key === "\u0003") process.exit();
};

// setupInput();

module.exports = {
  setupInput,
};
