import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  // This is how you declare a variable in the react way
  // setPeople([...people, 'sonny', 'qazi']) - react way. push to array
  const [people, setPeople] = useState([
    {
      name: "Satoru Gojo",
      url: "https://c4.wallpaperflare.com/wallpaper/787/854/424/jujutsu-kaisen-satoru-gojo-anime-boys-anime-girls-hd-wallpaper-preview.jpg",
    },
    {
      name: "Kakashi Hatake",
      url: "https://c4.wallpaperflare.com/wallpaper/404/527/706/naruto-kakashi-hatake-hd-wallpaper-preview.jpg",
    },
    {
      name: "Erza Scarlet",
      url: "https://images.alphacoders.com/744/thumb-1920-744311.png",
    },
  ]);

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
