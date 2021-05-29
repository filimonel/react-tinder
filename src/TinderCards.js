import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

const TinderCards = () => {
  // This is how you declare a variable in the react way
  // setPeople([...people, 'sonny', 'qazi']) - react way. push to array
  const [people, setPeople] = useState([]);
  // This code runs based on a condtion
  useEffect(() => {
    // This returns data from firebase database
    // returns a detach function aswell that can be saved into variable
    const unsubscribe = database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      // this is a cleanup...
      // unsubscribe detaches previous listener and pulls new data
      unsubscribe();
    };
    // [] will run the code only once when the component loads
    // [people] this will run once when code loads and when people value changes.
  }, []);

  return (
    <div>
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
