// import { Redirect } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "../src/scss/global.scss";
import "./pages/BitcoinApp";

import { AppHeader } from "./components/AppHeader";
import { HomePage } from "./pages/HomePage";
import { BitcoinApp } from "./pages/BitcoinApp";
import { ContactDetailsPage } from "./pages/ContactDetailsPage";
import { ContactEdit } from "./pages/ContactEdit";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main className="container">
          <Switch>
            <Route path="/contacts/edit/:id?" component={ContactEdit} />
            <Route path="/contacts/:id" component={ContactDetailsPage} />
            <Route path="/contacts" component={BitcoinApp} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
