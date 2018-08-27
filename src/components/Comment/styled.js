import styled, { keyframes } from "styled-components";

const newComment = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CommentCard = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  animation-name: ${newComment};
  animation-duration: 600ms;
  height: 60px;
`;

const Picture = styled.div`
    background-image:url('${props => props.picture}');
    background-size: contain;
    background-position: center center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-block;
    float: left;
    border: 1px solid #eee;
    background-color: #eee;
`;

const Body = styled.div`
  width: calc(100% - 42px);
  min-height: 42px;
  display: inline-block;
  float: left;
`;

const Name = styled.b`
  margin-left: 10px;
  font-size: 12px;
`;

const TimeStamp = styled.span`
  margin-left: 10px;
  font-size: 10px;
  color: #ccc;
`;

const CommentText = styled.div`
  margin-left: 10px;
  font-size: 12px;
  white-space: pre-wrap;      /* CSS3 */   
   white-space: -moz-pre-wrap; /* Firefox */    
   white-space: -pre-wrap;     /* Opera <7 */   
   white-space: -o-pre-wrap;   /* Opera 7 */    
   word-wrap: break-word;      /* IE */
}
`;
const Reply = styled.span`
  float: right;
  color: #ddd;
  font-size: 10px;
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

const ReplyLabel = styled.span`
  font-size: 10px;
  font-weight: bold;
  margin-left: 5px;
`;

export {
  CommentCard,
  Picture,
  Body,
  Name,
  CommentText,
  TimeStamp,
  Reply,
  ReplyLabel
};
