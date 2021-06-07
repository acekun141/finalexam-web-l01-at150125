import React from "react";

export interface IProps {
  messageId: string;
  userId: string;
  time: string;
  content: string;
}

const Message: React.FC<IProps> = ({ time, content, userId }) => {
  const currentUserId = "1";
  return (
    <div className={`message ${currentUserId === userId ? "own" : ""}`}>
      <p className="message__content">{content}</p>
      <p className="message__time">{time}</p>
    </div>
  )
}

export default Message;