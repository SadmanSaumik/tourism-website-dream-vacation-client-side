import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import AuthProvider from "./Context/AuthProvider";
import Booking from "./components/Booking/Booking";
import AddDestination from "./components/AddDestination/AddDestination";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/my-booking">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/add-destination">
              <AddDestination></AddDestination>
            </PrivateRoute>
            <PrivateRoute path="/manage-all-orders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
