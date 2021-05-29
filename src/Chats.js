import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Law"
        message="Yo!! What are you up to?"
        timestamp="40 seconds ago"
        profilePic="https://i.pinimg.com/736x/4f/49/0d/4f490d6d46fcb2fe232398e0544c5516.jpg"
      />
      <Chat
        name="Mikasa"
        message="Hi!! Come down!"
        timestamp="5 seconds ago"
        profilePic="https://i.pinimg.com/originals/19/d8/6a/19d86a4b9bc27627248a80694da7d8b6.png"
      />
      <Chat
        name="Tanjiro"
        message="Let's go out?"
        timestamp="3 hours ago"
        profilePic="https://i.pinimg.com/originals/d0/3f/f1/d03ff100dfa99fee46fa38ddcbad7252.jpg"
      />
      <Chat
        name="Mai"
        message="Everyone's coming over"
        timestamp="2 days ago"
        profilePic="https://i.pinimg.com/originals/5b/2a/56/5b2a56cf031ff441d9032d9a2e278834.jpg"
      />
    </div>
  );
};

export default Chats;
