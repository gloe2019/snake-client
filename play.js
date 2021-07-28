const net = require("net");

//establish connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console log it.
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting...");
connect();
