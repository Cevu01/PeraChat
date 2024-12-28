import React, { createContext, useState } from "react";

// Create the context
export const AudioContext = createContext();

// Create the provider
export const AudioProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <AudioContext.Provider value={{ chatHistory, setChatHistory }}>
      {children}
    </AudioContext.Provider>
  );
};
