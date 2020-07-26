import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const useSocketIOClient = () => {
  const [socket, setSocket] = useState("");
  useEffect(() => {
    setSocket(io("http://localhost:8000"));
  }, []);

  return socket;
};
 export default useSocketIOClient;