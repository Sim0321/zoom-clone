import http from "http";
import WebSocket from "ws";
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
const wss = new WebSocket.Server({ server }); //WebSocket 서버와 http서버 동시에

const sockets = [];
console.log(sockets);

wss.on("connection", (socket) => {
  sockets.push(socket);
  console.log("브라우저와 연결됐어요");
  socket.on("close", () => console.log("브라우저로부터 연결이 끊겼어요."));
  socket.on("message", (message) => {
    sockets.forEach((aSocket) => aSocket.send(message.toString("utf8")));
    console.log(message.toString("utf8"));
  });
});
// socket은 연결된 브라우저 의미

server.listen(3000, handleListen);
