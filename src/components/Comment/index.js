import React, { Component, Fragment } from "react";
import { Consumer } from "../Comments";
import Nest from "../Nest";
import ReplyBox from "../ReplyBox";
import moment from "moment";
import {
  CommentCard,
  Picture,
  Body,
  Name,
  CommentText,
  TimeStamp,
  Reply
} from "./styled";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      reply: false,
      replyText: ""
    };
  }
  handleSend = () => {
    this.setState(
      {
        reply: !this.state.reply
      },
      () => alert(this.state.replyText)
    );
  };
  toggleReply = () => {
    this.setState({
      reply: !this.state.reply
    });
  };
  render() {
    let { comment } = this.props;
    return (
      <Consumer>
        {global => (
          <CommentCard>
            <Picture
              picture={
                comment.picture
                  ? comment.picture.length < 0
                    ? "https://www.drupal.org/files/issues/default-avatar.png"
                    : comment.picture
                  : "https://www.drupal.org/files/issues/default-avatar.png"
              }
            />
            <Body>
              <Name>{comment.author}</Name>
              <TimeStamp>
                ({moment(comment.timestamp).format("MMMM Do YYYY, h:mm:ss a")})
              </TimeStamp>
              {global.state.threaded && (
                <Reply onClick={() => this.toggleReply()}>
                  {this.state.reply ? "close" : "reply"}
                </Reply>
              )}
              <CommentText> {comment.body}</CommentText>
            </Body>
            {global.state.threaded &&
              this.state.reply && (
                <Fragment>
                  <ReplyBox
                    comment={comment}
                    toggleReplyBox={this.toggleReply}
                  />
                </Fragment>
              )}
            {global.state.threaded &&
              comment.comments.length > 0 && (
                <Nest comments={comment.comments} />
              )}
          </CommentCard>
        )}
      </Consumer>
    );
  }
}

export default Comment;
