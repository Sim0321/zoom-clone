// WS
// const msgList = document.querySelector("ul");
// const nickForm = document.querySelector("#nick");
// const msgForm = document.querySelector("#message");

// const socket = new WebSocket(`ws://${window.location.host}`); //socket은 서버로 부터의 연결

// function makeMessage(type, payload) {
//   const msg = { type, payload };
//   return JSON.stringify(msg);
//   //원하는 양식 {
//   //   type: "nickname",
//   //   payload: input.value,
//   // }
// }

// // socket의 open 메서드 connection이 됐을 때
// socket.addEventListener("open", () => {
//   console.log("서버와 연결됐어요");
// });

// socket.addEventListener("message", (message) => {
//   const li = document.createElement("li");
//   li.innerText = message.data;
//   msgList.append(li);
// });

// socket.addEventListener("close", () => {
//   console.log("서버와 연결이 끊어졌어요");
// });

// function handleSubmit(event) {
//   event.preventDefault();
//   const input = msgForm.querySelector("input");
//   socket.send(makeMessage("new_message", input.value));
//   const li = document.createElement("li");
//   li.innerText = `You: ${input.value}`;
//   msgList.append(li);
//   // console.log(input.value);
//   input.value = "";
// }

// function handleNickSubmit(event) {
//   event.preventDefault();
//   const input = nickForm.querySelector("input");
//   socket.send(makeMessage("nickname", input.value));
//   input.value = "";
// }

// msgForm.addEventListener("submit", handleSubmit);
// nickForm.addEventListener("submit", handleNickSubmit);

const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function handleRoomSubmit(e) {
  e.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", { payload: input.value }, () => {
    console.log("server is done!");
  });
  input.value = "";
}
form.addEventListener("submit", handleRoomSubmit);
