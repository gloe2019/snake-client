const net = require("net");

//establish connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  //print message once connection occurs
  conn.on("connect", () => {
    console.log("Connection Established!👏👏👏");
    //Send the string "Name: GLO" to the server upon connection
    conn.write("Name: GLO");
    // conn.write("Move: right");
    // conn.write("Move: down");
    //sending successive conn.write msgs to server, server just executes that last one.
    //Playing with setTimeout
    // setTimeout(() => {
    //   conn.write("Move: down");
    //   setTimeout(() => {
    //     conn.write("Move: right");
    //     setTimeout(() => {
    //       conn.write("Move: down");
    //       setTimeout(() => {
    //         conn.write("Move: down");
    //       }, 50);
    //     }, 50);
    //   }, 50);
    // }, 50);
    // setInterval(() => {
    //   conn.write("Move: right");
    //   conn.write("Move: down");
    //   conn.write("Move: left");
    // }, 50);
  });

  // handle incoming data and console log it.
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

// console.log("Connecting...");
// connect();

module.exports = { connect };
