import "./ChatScreen.css";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Mikasa Ackerman",
      image:
        "https://i.pinimg.com/originals/19/d8/6a/19d86a4b9bc27627248a80694da7d8b6.png",
      message: "What's up!!",
    },
    {
      name: "Mikasa Ackerman",
      image:
        "https://i.pinimg.com/originals/19/d8/6a/19d86a4b9bc27627248a80694da7d8b6.png",
      message: "Hows it going?",
    },
    {
      message: "Hows it going?",
    },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        {`YOU MATCHED WITH ${messages[0].name.toUpperCase()} ON 10 AUGUST 2020`}
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chat__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      {/* Input */}
      <form className="chatScreen__input">
        <input
          className="chatScreen__inputField"
          placeholder="Type a message"
          type="text"
        />
        <button className="input__button">SEND</button>
      </form>
    </div>
  );
};

export default ChatScreen;
