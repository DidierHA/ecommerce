import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener } from './../utils/firebase/firebase';

export const UsuarioContext = createContext({
  usuarioLogueado: null,
  setUsuarioLogueado: () => null,
});

export const UsuarioProvider = ({ children }) => {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  const value = { usuarioLogueado, setUsuarioLogueado };

  useEffect(() => {
    onAuthStateChangedListener((usuario) => {
      setUsuarioLogueado(usuario);
    });
  });

  return (
    <UsuarioContext.Provider value={value}>{children}</UsuarioContext.Provider>
  );
};
