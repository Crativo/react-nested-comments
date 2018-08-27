import React, { Component, Fragment } from "react";
import Comment from "../Comment";
import ReplyBox from "../ReplyBox";
import { Container } from "./styled";
import _ from "lodash";
import moment from "moment";

const Context = React.createContext();
export const Consumer = Context.Consumer;
export const formatComments = comments =>
  comments.map(comment => {
    return { ...comment, parent: comment.comments.length > 0 };
  });

export default class Comments extends Component {
  state = {
    state: {},
    handleReply: this.props.handleUpdate,
    sortComments: comments => this.sortComments(comments),
    reinitiatize: () => this.initiatize(),
    updateState: (key, val) => this.updateState(key, val)
  };

  // Calling me updates the state of the current activeItem
  updateState = (key, val) => {
    this.setState(() => {
      let clone = this.state;
      clone.state[key] = val;
      return clone;
    });
  };

  initiatize = () => {
    this.updateState("comments", this.props.comments);
    // this.updateState("users", this.props.users);
    this.updateState("activeUser", this.props.activeUser);
    this.updateState("threaded", this.props.threaded ? true : false);
  };
  componentWillMount() {
    this.initiatize();
  }

  sortComments = comments =>
    _.sortBy(comments, o => new moment(o.timestamp)).reverse();

  render() {
    return (
      <Context.Provider value={this.state}>
        <Fragment>
          {/* <h1>Comments</h1> */}
          <ReplyBox />
          <Container>
            {this.state.state.comments &&
              this.sortComments(this.state.state.comments).map(
                (comment, i) =>
                  this.props.threaded ? (
                    comment.parent && <Comment key={i} comment={comment} />
                  ) : (
                    <Comment key={i} comment={comment} />
                  )
              )}
          </Container>
        </Fragment>
      </Context.Provider>
    );
  }
}
