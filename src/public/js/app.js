const socket = new WebSocket(`ws://${window.location.host}`); //socket은 서버로 부터의 연결

// socket의 open 메서드 connection이 됐을 때
socket.addEventListener("open", () => {
  console.log("서버와 연결됐어요");
});

socket.addEventListener("message", (message) => {
  console.log("방금 막 이", message, "를 서버로 부터 받아왔어요.");
  console.log("메세지 내용은", message.data, " 에요.");
});

socket.addEventListener("close", () => {
  console.log("서버와 연결이 끊어졌어요");
});
