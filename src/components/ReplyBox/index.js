import React, { Fragment, Component } from "react";
import { Consumer } from "../Comments";
import { ReplyLabel } from "../Comment/styled";
import { SendButton, Textbox, AddCommentButton, Container } from "./styled";

import moment from "moment";
class ReplyBox extends Component {
  constructor() {
    super();
    this.state = {
      enabled: false,
      replyText: ""
    };
  }

  toggleComment = () => this.setState({ enabled: !this.state.enabled });

  componentDidMount() {
    this.props.comment && this.setState({ enabled: true });
  }

  handleReplyChange = replyText => {
    this.setState({
      replyText
    });
  };

  submit = () => {
    let { comment, toggleReplyBox } = this.props;
    this.props.global.handleReply(comment ? comment.id : false, {
      ...this.props.global.state.activeUser,
      body: this.state.replyText,
      parent: comment ? false : true,
      comments: [],
      timestamp: moment().format()
    });
    this.toggleComment();
    this.commentBoxInput.value = "";
    toggleReplyBox && toggleReplyBox();
    document.getElementById("form").reset();
  };

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.submit();
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.enabled ? (
          <Container>
            <ReplyLabel>
              {this.props.comment
                ? `reply to ${this.props.comment.author}`
                : "leave a comment"}
            </ReplyLabel>
            <br />
            <form id="form" style={{ display: "inline" }}>
              <Textbox
                autoFocus="false"
                onChange={e => this.handleReplyChange(e.target.value)}
                ref={input => {
                  this.commentBoxInput = input;
                }}
                onKeyPress={e => {
                  this._handleKeyPress(e);
                }}
              />
            </form>

            <SendButton
              onClick={() => {
                this.submit();
              }}
            >
              send
            </SendButton>
          </Container>
        ) : (
          <AddCommentButton onClick={() => this.toggleComment()}>
            add comment
          </AddCommentButton>
        )}
      </Fragment>
    );
  }
}

export default props => (
  <Consumer>{global => <ReplyBox {...props} global={global} />}</Consumer>
);
