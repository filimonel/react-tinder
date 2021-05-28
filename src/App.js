import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          {/* Header */}
          <Route path="/" exact>
            <h1>Homepage</h1>
          </Route>
          <Route path="/chat" exact>
            {/* Chat screen */}
            <h1>Chat</h1>
          </Route>
          {/* Tinder Cards */}
          {/* Buttons below tinder cards */}

          {/* individual Chat Screen */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
