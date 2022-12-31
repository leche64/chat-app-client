import React from "react";
import { useState, useRef } from "react";

const ChatLog = () => {
  const [chatLog, setChatLog] = useState([
    {
      user: "gbt",
      message: "GM!",
    },
    {
      user: "gbt",
      message: "Bing Bong",
    },
    {
      user: "gbt",
      message:
        "I'm a robot and I can do whatever you waht, ask me something go ahead,ask me ask me ask me",
    },
    {
      user: "user",
      message: "yooooo hiii whats up up",
    },
    ,
    {
      user: "gbt",
      message: "bing bong",
    },
  ]);

  const ChatMessage = ({ message }) => {
    return (
      <div
        className={message.user === "gbt" ? "chat-box-left" : "chat-box-right"}
      >
        <div className={message.user === "gbt" ? "pl-4" : "pr-4"}>{message.message}</div>
      </div>
    );
  };

  return (
    <div className="w-screen flex flex-col space-y-2 p-2 mt-10 mb-10">
      {chatLog.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatLog;
