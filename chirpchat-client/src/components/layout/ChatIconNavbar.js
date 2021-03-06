import React, { Component } from "react";
import MyButton from "../../util/MyButton";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//MUI
import Badge from "@material-ui/core/Badge";

//Icons
import ChatIcon from "@material-ui/icons/ChatBubble";

class ChatIconNavbar extends Component {
  render() {
    let chatIcon = [];

    const messages = this.props.messages;

    if (
      messages &&
      messages.length > 0 &&
      messages[0].notificationId.length !== 0
    ) {
      chatIcon.push(
        <NavLink exact to="/chat">
          <MyButton tip="Chat">
            <Badge badgeContent={messages.length} color="error">
              <ChatIcon />
            </Badge>
          </MyButton>
        </NavLink>
      );
    } else {
      chatIcon.push(
        <NavLink exact to="/chat">
          <MyButton tip="Chat">
            <ChatIcon />
          </MyButton>
        </NavLink>
      );
    }
    return chatIcon;
  }
}

ChatIconNavbar.propTypes = {
  messages: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  messages: state.user.credentials.messages,
});

export default connect(mapStateToProps)(ChatIconNavbar);
