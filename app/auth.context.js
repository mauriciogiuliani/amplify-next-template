"use client";

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

  const [consumidor, setConsumidor] = useState({
    uc: '',
    nome: '',
    permissionaria: '',
    grupo: '',
    produto_selecionado: '',
  });

  return (
    <AuthContext.Provider value={{ consumidor, setConsumidor }}>
      {children}
    </AuthContext.Provider>
  );
};
