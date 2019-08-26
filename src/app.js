const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");
const { matchUser, getRooms, removeUser } = require("./users");

const PORT = process.env.PORT || 3000;

io.on("connection", socket => {
  const { id } = socket;

  // Join is an event that happens when the
  // user sends his name and role form
  // the frontend and waits for a match
  // to happen

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

  // When someone disconnects we remove him from his room
  // If he's matched we send a disconnect event to his match

  socket.on("disconnect", () => {
    removeUser(socket.id).then(hisMatch => {
      if (hisMatch) io.to(hisMatch.id).emit("disconected");
    });
  });

  // When a message is sent to the server
  // It is sent to his match

  socket.on("message", (data, callback) => {
    const { to, msg, timestamp } = data;
    io.to(to).emit("message", { msg, timestamp });
    callback();
  });
});

// Serve frontend

const staticPath = path.join(__dirname, "..", "client", "dist");

app.use(express.static(staticPath));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(staticPath, "index.html"));
});

// Listen

server.listen(PORT, () => {
  console.log(`Server listening, port: ${PORT}`);
});
