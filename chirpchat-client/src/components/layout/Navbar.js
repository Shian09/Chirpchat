import React, { Component, Fragment } from "react";
import MyButton from "../../util/MyButton";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostScream from "../scream/PostScream";
import Notifications from "./Notifications";
import ChatIconNavbar from "./ChatIconNavbar";

//Material UI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import { Typography } from "@material-ui/core";

const styles = {
  titleName: {
    fontWeight: "bold",
    fontFamily: "Comic Sans MS, cursive, sans-serif",
    color: "white",
    "&:hover": {
      color: "white",
    },
  },
};

class Navbar extends Component {
  render() {
    const { classes, authenticated } = this.props;

    return (
      <AppBar>
        <Toolbar>
          {authenticated ? (
            <Typography
              variant="h5"
              className={classes.titleName}
              component={Link}
              to="/home"
            >
              ChirpChat
            </Typography>
          ) : (
            <Typography
              variant="h5"
              className={classes.titleName}
              component={Link}
              to="/"
            >
              ChirpChat
            </Typography>
          )}

          <Toolbar className="nav-container">
            {authenticated ? (
              <Fragment>
                <PostScream />
                <NavLink exact to="/home">
                  <MyButton tip="Home">
                    <HomeIcon />
                  </MyButton>
                </NavLink>
                <ChatIconNavbar />
                <Notifications />
              </Fragment>
            ) : (
              <Fragment>
                {/* <Button color="inherit" component={Link} to="/">
                  Login
                </Button>
                {/*   <Button color="inherit" component={Link} to="/">
                Home
          </Button> 
                <Button color="inherit" component={Link} to="/signup">
                  Signup
                </Button> */}
              </Fragment>
            )}
          </Toolbar>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
