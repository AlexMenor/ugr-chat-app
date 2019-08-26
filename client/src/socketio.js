import io from "socket.io-client";

const socketUrl = process.env.VUE_APP_SOCKETIO_URL || "";
const socket = io(socketUrl);

export default socket;
