import React, { createContext, useState } from "react";

// Create the context
export const ChatContext = createContext();

// Create the provider
export const ChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <ChatContext.Provider value={{ chatHistory, setChatHistory }}>
      {children}
    </ChatContext.Provider>
  );
};
