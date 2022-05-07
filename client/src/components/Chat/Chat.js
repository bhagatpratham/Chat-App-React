import React, { useEffect } from "react";
import "./Chat.css";

import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router";

// Locations represent where the app is now, where you want it to go, or even where it was
const Chat = () => {
  const location = useLocation();
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    // console.log(location.search); // ?name=Pratham&room=room1
    console.log(name, room);
  });

  return <div>Chat</div>;
};

export default Chat;
