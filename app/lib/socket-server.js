import { Server } from "socket.io";

let io;

export function initSocketServer(server) {
    if (!io) {
        io = new Server(server, {
            cors: {
                origin: "*",  // Replace with your front-end URL if needed
                methods: ["GET", "POST"],
            },
        });
        io.on("connection", (socket) => {
            console.log("A user connected");
            socket.on("disconnect", () => {
                console.log("User disconnected");
            });
        });
    }
    return io;
  }

  export function getSocketInstance() {
    return io;
  }