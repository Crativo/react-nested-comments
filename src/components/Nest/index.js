import React from "react";
import Comment from "../Comment";
import { Consumer } from "../Comments";
import { Container } from "./styled";

const Nest = props => (
  <Container>
    <Consumer>
      {global =>
        global
          .sortComments(props.comments)
          .map((c, i) => (
            <Comment
              key={i}
              comment={
                global.state.comments.filter(com => com.id === c && com)[0]
              }
            />
          ))
      }
    </Consumer>
  </Container>
);
export default Nest;
