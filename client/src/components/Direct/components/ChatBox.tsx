import React from "react";
import Conversation from "./Conversation";
import { BiSend } from "react-icons/bi";
import ConversationDetail from "./ConversationDetail";

const urlAvatar = "https://i.pinimg.com/originals/8a/d1/9b/8ad19bd47e7e448f87d8b6e7a2702453.png";
const fakeData = { firstName: "Le Viet", lastName: "Hung", latestMessage: "Eiusmod ut non reprehenderit in consequat sit laboris commodo sunt consectetur.", avatar: urlAvatar, userId: "2"};

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-box__header">
        <Conversation
          firstName={fakeData.firstName}
          lastName={fakeData.lastName}
          latestMessage=""
          avatar={fakeData?.avatar}
        />
      </div>
      <div className="chat-box__content">
        <ConversationDetail />
      </div>
      <div className="chat-box__input">
        <input placeholder="Soan tin nhan..." />
        <button>
          <BiSend size="2em" />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;