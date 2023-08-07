import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [goldTokenValue, setGoldTokenValue] = useState('');

  return (
    <AppContext.Provider value={{ goldTokenValue, setGoldTokenValue }}>
      {children}
    </AppContext.Provider>
  );
};
