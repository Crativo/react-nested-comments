import styled, { keyframes } from "styled-components";
const newComment = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const Container = styled.div`
  width: calc(100%);
  // padding-left: 50px;
  float: right;
  animation-name: ${newComment};
  animation-duration: 600ms;
  margin-bottom: 20px;
`;

const AddCommentButton = styled.span`
  float: right;
  display: block;
  // position: relative;
  // top: -40px;
  width: 100%;
  text-align: right;

  color: #ddd;
  font-size: 12px;
  margin-right: 10px;
  font-weight: bold;

  user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #bbb;
  }
`;
const Textbox = styled.input`
  width: calc(100% - 60px);
  margin-left: 5px;
  height: 25px;
  font-size: 12px;
  border: #ccc 1px solid;
`;

const SendButton = styled.button`
  position: relative;
  top: -1px;
  background: #ccc;
  color: #fff;
  cursor: pointer;
  outline: none;
  height: 25px;
  border: #ccc 1px solid;
  font-size: 12px;
  letter-spacing: 1px;
`;
const Splitter = styled.hr`
  margin-top: 0px;
  padding-top: 10px;
  border-top: none;
  border-bottom: 1px solid #bbb;
`;
export { SendButton, Textbox, Splitter, AddCommentButton, Container };
