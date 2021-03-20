import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import ContactPage from "../../Pages/ContactPage";
import { UserProvider } from "../../UserProvider/User";
import Layout from "../../Layout";

import "./App.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </Layout>
      </UserProvider>
    </Router>
  );
}

export default App;
