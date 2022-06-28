import { createContext, useState } from 'react';

export const CarritoContext = createContext({
  mostrarCarrito: false,
  setMostrarCarrito: () => {},
});

export const CarritoProvider = ({ children }) => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const value = { mostrarCarrito, setMostrarCarrito };

  return (
    <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>
  );
};
