import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./register"; // Register bileşenini içe aktarın
import Payment from "./Payment";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Onerilen from "./Onerilen";
import Indirim from "./Indirim";
import OrdersPage from './OrdersPage';
import ProductReviewForm from './ProductReviewForm';


const promise = loadStripe("pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/ProductReviewForm">
            <Header />
            <ProductReviewForm/>
          </Route>
        <Route path="/OrdersPage">
            <Header />
            <OrdersPage/>
          </Route>
        <Route path="/Indirim">
            <Header />
            <Indirim/>
          </Route>
        <Route path="/Onerilen">
            <Header />
            <Onerilen />
          </Route>
          
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register"> {/* Register rotasını ekleyin */}
            <Register />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
