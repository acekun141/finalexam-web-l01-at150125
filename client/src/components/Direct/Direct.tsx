import React from "react";
import ChatBox from "./components/ChatBox";
import ConversationList from "./components/ConversationList";

const Direct = () => {
  return (
    <div className="direct">
      <div className="direct__conversation-list-wrapper">
        <ConversationList />
      </div>
      <div className="direct__chat-box-wrapper">
        <ChatBox />
      </div>
    </div>
  );
}

export default Direct;