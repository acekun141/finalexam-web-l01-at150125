import React from "react";
import Direct from "../components/Direct";
import BaseLayout from "../components/BaseLayout";

const MessagePage = () => {
  return (
    <BaseLayout>
      <div className="message-page">
        <Direct />
      </div>
    </BaseLayout>
  );
};

export default MessagePage;
