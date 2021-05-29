import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Switch>
          <Route path="/chat" exact>
            {/* Chat screen */}
            <h1>Chat</h1>
          </Route>
          {/* individual Chat Screen */}
          <Route path="/" exact>
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
