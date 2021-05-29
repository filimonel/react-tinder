import "./ChatScreen.css";
import { useState } from "react";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "...",
      message: "What's up!!",
    },
    {
      name: "Ellen",
      image: "...",
      message: "Hows it going?",
    },
  ]);

  return (
    <div className="chatScreen">
      <h2>Chat Screen</h2>
    </div>
  );
};

export default ChatScreen;
