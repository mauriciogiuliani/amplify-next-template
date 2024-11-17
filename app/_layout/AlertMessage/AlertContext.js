"use client";

import React, { createContext, useState, useContext } from 'react';

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => {
    setAlertMessage(message)

    setTimeout(() => {
      setAlertMessage("");
    }, 5000);
  }

  return (
    <AlertContext.Provider value={{ alertMessage, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
