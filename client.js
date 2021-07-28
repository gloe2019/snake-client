const net = require("net");
const { IP, PORT } = require("./constants");
//establish connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  //print message once connection occurs
  conn.on("connect", () => {
    console.log("Connection Established!👏👏👏");
    //Send the string "Name: GLO" to the server upon connection
    conn.write("Name: GLO");
  });

  // handle incoming data and console log it.
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
