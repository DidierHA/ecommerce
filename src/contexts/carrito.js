import { createContext, useState } from 'react';

const itemCompleto = (itemsCarrito, producto) => {
  const itemExistente = itemsCarrito.find((item) => item.id === producto.id);

  if (itemExistente) {
    return itemsCarrito.map((item) =>
      item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
  }
  return [...itemsCarrito, { ...producto, cantidad: 1 }];
};

const removerItem = (itemsCarrito, producto) => {
  const itemExistente = itemsCarrito.find((item) => item.id === producto.id);

  if (itemExistente.cantidad === 1) {
    return itemsCarrito.filter((item) => item.id !== producto.id);
  }

  return itemsCarrito.map((item) =>
    item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
  );
};

export const CarritoContext = createContext({
  mostrarCarrito: false,
  setMostrarCarrito: () => {},
  itemsCarrito: [],
  agregarAlCarrito: () => {},
  eliminarDelCarrito: () => {},
});

export const CarritoProvider = ({ children }) => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [itemsCarrito, setItemsCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setItemsCarrito(itemCompleto(itemsCarrito, producto));
  };

  const eliminarDelCarrito = (producto) => {
    setItemsCarrito(removerItem(itemsCarrito, producto));
  };

  const value = {
    mostrarCarrito,
    setMostrarCarrito,
    agregarAlCarrito,
    itemsCarrito,
    eliminarDelCarrito,
  };

  return (
    <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>
  );
};
