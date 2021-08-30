import React from "react";
import "./Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/HomePage/Home";
import UserList from "./Pages/UserList/UserList";
import ProductList from "./Pages/ProductsList/ProductList";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";

const Main = () => {
  return (
    <Router>
      <TopBar />
      <div className="mainContainer">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newuser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:userId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
