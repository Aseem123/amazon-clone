import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header.js";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./component/StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUSer) => {
      console.log("THE USER IS =>", authUSer);
      if (authUSer) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUSer,
        });
      } else {
        //  the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
