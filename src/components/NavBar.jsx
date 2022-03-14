import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import classes from "./css/NavBar.module.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <a href="/">
            <img className={classes.image} src={logo} alt="My logo" />
          </a>
        </div>
        <div className={classes.center}>
          <h1 className={classes.logo}>Red Apple Inc.</h1>
        </div>
        <div className={classes.right}>
          <div className={classes.menuItem}>
            <Link to="/register" style={{ textDecoration: 'none', color: "black" }}>Register</Link>
          </div>
          <div className={classes.menuItem}>
            <Link to="/login"  style={{ textDecoration: 'none', color: "black" }}>Sign In</Link>
          </div>
          <div className={classes.menuItem}>
            <Badge badgeContent={4} color="primary">
            <Link to="/cart"><ShoppingCartOutlined/></Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
