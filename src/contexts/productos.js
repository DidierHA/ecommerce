import { createContext, useState, useEffect } from 'react';

import { agregarColeccionYDocumentos } from './../utils/firebase/firebase';
import PRODUCTOS from './../data.json';

import DATA from './../data';

export const ProductosContext = createContext({
  productos: [],
});

export const ProductosProvider = ({ children }) => {
  useEffect(() => {
    agregarColeccionYDocumentos('categorias', DATA);
  }, []);

  const [productos] = useState(PRODUCTOS);
  const value = { productos };

  return (
    <ProductosContext.Provider value={value}>
      {children}
    </ProductosContext.Provider>
  );
};
