import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  // This is how you declare a variable in the react way
  // setPeople([...people, 'sonny', 'qazi']) - react way. push to array
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url: "https://media.gettyimages.com/photos/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-april-8-in-picture-id98328574?s=2048x2048",
    },
    {
      name: "Steve Wozniak",
      url: "https://cdn.hipwallpaper.com/i/1/65/c6g1aH.jpg",
    },
  ]);

  return (
    <div>
      <h1>Tinder Cards</h1>
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
  );
};

export default TinderCards;
