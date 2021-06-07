import React from "react";
import Conversation, { IProps as IConversation} from "./Conversation";

const urlAvatar = "https://i.pinimg.com/originals/8a/d1/9b/8ad19bd47e7e448f87d8b6e7a2702453.png";

const fakeData: (IConversation & { userId: string})[] = [
  { firstName: "Le Viet", lastName: "Hung", latestMessage: "Sunt labore aliquip elit laborum voluptate reprehenderit ea aliquip magna nostrud aliqua nostrud id ea.", userId: "1" },
  { firstName: "Le Viet", lastName: "Hung", latestMessage: "Eiusmod ut non reprehenderit in consequat sit laboris commodo sunt consectetur.", avatar: urlAvatar, userId: "2" }
];

const ConversationList = () => {
  return (
    <div className="conversation-list">
      <div className="conversation-list__header">
        <p>Tin nhắn</p>
      </div>
      {fakeData.map(
        ({ firstName, lastName, avatar, userId, latestMessage }) => (
          <Conversation
            latestMessage={latestMessage}
            firstName={firstName}
            lastName={lastName}
            avatar={avatar}
            key={userId}
          />
        )
      )}
    </div>
  );
}

export default ConversationList;