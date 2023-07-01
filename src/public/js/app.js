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

function backendDone(msg) {
  // console.log("마지막 argument는 함수여야해요!");
  console.log(`The backend says :${msg}`);
}

function handleRoomSubmit(e) {
  e.preventDefault();
  const input = form.querySelector("input");
  socket.emit(
    "enter_room",
    input.value,
    backendDone
    // 프론트에서 서버로 함수를 보내고 서버에서 다시 보낸다.
    // socket.io는 이벤트를 설정해주고 argument를 ws의 string 방식이 아닌 어떠한 모든 것이든 보낼 수 있을 뿐더러 여러개를 보낼 수 있다.
    // 콜백함수는 서버로부터 함수를 보내고 서버에서 그 함수를 다시 프론트한테 뿌려줄 수 있다.
  );
  input.value = "";
}
form.addEventListener("submit", handleRoomSubmit);
