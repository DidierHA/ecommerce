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

const limpiarItem = (itemsCarrito, producto) => {
  return itemsCarrito.filter((item) => item.id !== producto.id);
};

export const CarritoContext = createContext({
  mostrarCarrito: false,
  setMostrarCarrito: () => {},
  itemsCarrito: [],
  agregarAlCarrito: () => {},
  eliminarDelCarrito: () => {},
  limpiarDelCarrito: () => {},
  contadorCarrito: 0,
  totalCarrito: 0,
});

export const CarritoProvider = ({ children }) => {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [contadorCarrito, setContadorCarrito] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);

  useEffect(() => {
    const nuevoContadorCarrito = itemsCarrito.reduce((acc, item) => {
      return acc + item.cantidad;
    }, 0);

    setContadorCarrito(nuevoContadorCarrito);
  }, [itemsCarrito]);

  useEffect(() => {
    const nuevoTotalCarrito = itemsCarrito.reduce((acc, item) => {
      return acc + item.cantidad * item.precio;
    }, 0);

    setTotalCarrito(nuevoTotalCarrito);
  }, [itemsCarrito]);

  const agregarAlCarrito = (producto) => {
    setItemsCarrito(itemCompleto(itemsCarrito, producto));
  };

  const eliminarDelCarrito = (producto) => {
    setItemsCarrito(removerItem(itemsCarrito, producto));
  };

  const limpiarDelCarrito = (producto) => {
    setItemsCarrito(limpiarItem(itemsCarrito, producto));
  };

  const value = {
    mostrarCarrito,
    setMostrarCarrito,
    agregarAlCarrito,
    itemsCarrito,
    eliminarDelCarrito,
    contadorCarrito,
    limpiarDelCarrito,
    totalCarrito,
  };

  return (
    <CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>
  );
};
