const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server:", data)

  })
  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
    conn.write("Name: KKO");
  });
  conn.on("connect", () => {
    setInterval(()=>{
      conn.write("Move: up");
    }, 100)
    // setTimeout(()=>{
    //   conn.write("Move: left");
    // }, 1550)
    // setTimeout(()=>{
    //   conn.write("Move: up");
    // }, 1600)

  });

  return conn;
};

  module.exports = {connect};