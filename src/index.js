import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import allComments from "./comments.json";
import activeUser from "./activeUser.json";
import Comments, { formatComments } from "./components/Comments";
import { Grid, Col } from "react-bootstrap";
import users from "./users.json";

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: formatComments(allComments)
    };
  }

  handleReply = (id, comment) => {
    let comments = this.state.comments;
    let newId = comments.length + 1;
    // add comment to array
    comments.push({ ...comment, id: newId });
    // asign the new comment id to the parent comment
    id && comments[id - 1].comments.push(newId);
    this.setState({
      comments
    });
  };

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Col sm={6} xs={12}>
            <img
              alt={
                "https://i.pinimg.com/originals/9e/22/b9/9e22b92a99df9d2561c4a339dbb41124.jpg"
              }
              className={"img-responsive"}
              src={
                "https://i.pinimg.com/originals/9e/22/b9/9e22b92a99df9d2561c4a339dbb41124.jpg"
              }
            />
          </Col>
          <Col sm={6} xs={12}>
            <Comments
              comments={this.state.comments}
              activeUser={activeUser}
              handleUpdate={this.handleReply}
              threaded={true}
            />
          </Col>
        </Grid>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
registerServiceWorker();
