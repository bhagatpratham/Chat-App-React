import React, { useEffect, useState } from "react";
import "./Chat.css";

import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const ENPOINT = "localhost:5000";

  const location = useLocation(); // Locations represent where the app is now, where you want it to go, or even where it was. {react router >5.0}
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    // console.log(location.search); // ?name=Pratham&room=room1

    socket = io(ENPOINT);
    setName(name);
    setRoom(room);

    // this will send the data to the server
    socket.emit("join", { name, room });
    console.log(socket);
  }, [ENPOINT, location.search]); // Now the useEffect will only run if the value of ENDPOINT changes.

  return <div>Chat</div>;
};

export default Chat;
