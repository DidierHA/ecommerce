import { createContext, useState } from 'react';

import PRODUCTOS from './../data.json';

export const ProductosContext = createContext({
  productos: [],
});

export const ProductosProvider = ({ children }) => {
  const [productos] = useState(PRODUCTOS);
  const value = { productos };

  return (
    <ProductosContext.Provider value={value}>
      {children}
    </ProductosContext.Provider>
  );
};
