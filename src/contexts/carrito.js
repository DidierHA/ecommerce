import { createContext, useState, useEffect } from 'react';

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
  contadorCarrito: 0,
});

export const CarritoProvider = ({ children }) => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [contadorCarrito, setContadorCarrito] = useState(0);

  useEffect(() => {
    const nuevoContadorCarrito = itemsCarrito.reduce((acc, item) => {
      return acc + item.cantidad;
    }, 0);

    setContadorCarrito(nuevoContadorCarrito);
  }, [itemsCarrito]);

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
    contadorCarrito,
  };

  return (
    <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>
  );
};
