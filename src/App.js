import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Onerilen from "./Onerilen";
import Indirim from "./Indirim";
import OrdersPage from './OrdersPage';
import ProductReviewForm from './ProductReviewForm';
import CaterpiePrime from './CaterpiePrime'; // CaterpiePrime bileşenini dahil edin
import Footer from './Footer'; // Footer bileşenini dahil edin
import SupportPage from './SupportPage'; // Destek sayfasını dahil edin

const promise = loadStripe("pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Uygulama bileşeni yüklendiğinde sadece bir kez çalışacak...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // Kullanıcı yeni giriş yaptı / kullanıcı zaten giriş yapılmış

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // Kullanıcı çıkış yaptı
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
        <Header />
        <Switch>
          <Route path="/ProductReviewForm">
            <ProductReviewForm />
          </Route>
          <Route path="/OrdersPage">
            <OrdersPage />
          </Route>
          <Route path="/Indirim">
            <Indirim />
          </Route>
          <Route path="/Onerilen">
            <Onerilen />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* Caterpie Prime için Route ekleme */}
          <Route path="/caterpieprime">
            <CaterpiePrime />
          </Route>
          {/* Destek sayfası için Route */}
          <Route path="/destek">
            <SupportPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer /> {/* Footer bileşenini buraya ekleyin */}
      </div>
    </Router>
  );
}

export default App;
