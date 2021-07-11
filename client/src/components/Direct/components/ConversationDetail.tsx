import React from "react";
import Message, {IProps as IMessage} from "./Message";

const fakeData: IMessage[] = [
  { content: "Ipsum nulla ad cupidatat adipisicing reprehenderit aute non fugiat occaecat aute minim.", time: "15:45", userId: "1", messageId: "1" },
  { content: "Aute laborum excepteur fugiat eu.", time: "15:45", userId: "1", messageId: "2" },
  { content: "Esse non qui enim aliquip ut pariatur duis.", time: "15:45", userId: "2", messageId: "3" },
  { content: "Voluptate labore minim sunt velit laborum.", time: "15:45", userId: "1", messageId: "4" },
] 

const ConversationDetail = () => {
  return (
    <div className="conversation-detail">
      {fakeData.map(({ content, time, userId, messageId }) => (
        <Message
          content={content}
          time={time}
          userId={userId}
          messageId={messageId}
        />
      ))}
    </div>
  );
}

export default ConversationDetail;