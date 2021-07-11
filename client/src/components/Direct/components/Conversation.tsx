import React, { useCallback } from "react";

export interface IProps {
  firstName: string;
  lastName: string;
  avatar?: string;
  latestMessage: string; 
}

const Conversation: React.FC<IProps> = ({ firstName, lastName, avatar, latestMessage }) => {
  const sortName = firstName.charAt(0) + lastName.charAt(0);
  const fullName = `${firstName} ${lastName}`;
  const handleLatestMessage = useCallback(() => {
    const haveMoreThan20Character = latestMessage.length > 20;
    const first20Character = latestMessage.slice(0, 20);
    return haveMoreThan20Character ? `${first20Character}...` : first20Character;
  }, [latestMessage]);
  return (
    <div className="conversation pointer">
      <div className="conversation__avatar-wrapper">
        {avatar ? <img src={avatar} alt="avatar" /> : <p className="sort-name">{sortName}</p>}
      </div>
      <div className="conversation__detail">
        <p className="conversation__full-name">{fullName}</p>
        <p className="conversation__latest-message">{handleLatestMessage()}</p>
      </div>
    </div>
  );
}

export default Conversation;