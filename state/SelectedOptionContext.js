import React, { createContext, useState } from "react";

export const SelectedOptionContext = createContext();

export const SelectedOptionProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("Dental");

  return (
    <SelectedOptionContext.Provider
      value={{ selectedOption, setSelectedOption }}
    >
      {children}
    </SelectedOptionContext.Provider>
  );
};
