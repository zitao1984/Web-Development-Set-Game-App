import Navigation from "../components/Navigation";
import Home from "../components/Home";
import Rules from "../components/Rules";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/styles.css";
import "../styles/CardStyles.css";
import "../styles/NavStyles.css";
import Easy from "../components/gameLevels/Easy";
import Medium from "../components/gameLevels/Medium";
import Hard from "../components/gameLevels/Hard";

const App = () => (
  <div className="main-layout">
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rules" component={Rules} />
        <Route path="/easy" component={Easy} />
        <Route path="/medium" component={Medium} />
        <Route path="/hard" component={Hard} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
