import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats/:person" exact>
            {/* Header */}
            <Header backButton="/chats" />
            {/* Chat screen */}
            <ChatScreen />
          </Route>
          <Route path="/chats" exact>
            {/* Header */}
            <Header backButton="/" />
            {/* Display all active chats */}
            <Chats />
          </Route>
          {/* individual Chat Screen */}
          <Route path="/" exact>
            {/* Header */}
            <Header />
            {/* Tinder Cards */}
            <TinderCards />
            {/* Buttons below tinder cards */}
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
