import http from "http";
// import WebSocket from "ws";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public")); //public 폴더를 유저에게 공개
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen);
const server = http.createServer(app); //http 서버
// const wss = new WebSocket.Server({ server }); //WebSocket 서버와 http서버 동시에
const io = SocketIO(server);

io.on("connection", (socket) => {
  socket.on("enter_room", (roomName, done) => {
    console.log(roomName);
    setTimeout(() => {
      done("hello from the back"); // 이 함수는 back에서 돌아가는게 아니다. 만약 back에서 돌아가면 보안 이슈 생김
    }, 1000);
  });
});

// WebSocket
// const sockets = [];
// wss.on("connection", (socket) => {
//   sockets.push(socket);
//   socket.nickname = "익명";
//   console.log("브라우저와 연결됐어요");
//   socket.on("close", () => console.log("브라우저로부터 연결이 끊겼어요."));
//   socket.on("message", (msg) => {
//     const message = JSON.parse(msg);
//     switch (message.type) {
//       case "new_message":
//         sockets.forEach((aSocket) =>
//           aSocket.send(`${socket.nickname}: ${message.payload}`)
//         );
//       case "nickname":
//         socket.nickname = message.payload;
//     }
//     // if (parsed.type === "new_message") {
//     //   sockets.forEach((aSocket) => aSocket.send(parsed.payload));
//     // } else if (parsed.type === "nickname") {
//     //   console.log(parsed.payload);
//     // }
//   });
// });
// socket은 연결된 브라우저 의미

server.listen(3000, handleListen);
