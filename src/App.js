import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header.js";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import Login from "./component/Login";
import Payment from "./component/Payment";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./component/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./component/Orders";
function App() {
  const promise = loadStripe(
    "pk_test_51JJx48Az14nCV5jqNDt1bqzNDVQHAzT0OQaEnfuUTowG0OySZm42coXpyKbHSIpGoOZjEBOl221TqBjXIDuUBLuv00MinRlVUX"
  );
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
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
