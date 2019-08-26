const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { matchUser, getRooms, removeUser } = require("./users");

const PORT = process.env.PORT || 3000;

io.on("connection", socket => {
  const { id } = socket;
  socket.on("join", (data, callback) => {
    callback();
    matchUser({ ...data, id }).then(match => {
      if (match) {
        socket.emit("match", match);
        const matchFromOtherPov = {
          me: match.him,
          him: match.me
        };
        io.to(match.him.id).emit("match", matchFromOtherPov);
      }
    });
  });
  socket.on("disconnect", () => {
    removeUser(socket.id).then(hisMatch => {
      if (hisMatch) io.to(hisMatch.id).emit("disconected");
    });
  });
  socket.on("message", (data, callback) => {
    const { to, msg, timestamp } = data;
    io.to(to).emit("message", { msg, timestamp });
    callback();
  });
});

//DEBUGGING

setInterval(() => {
  console.log(getRooms());
}, 2000);

server.listen(PORT, () => {
  console.log(`Server listening, port: ${PORT}`);
});
