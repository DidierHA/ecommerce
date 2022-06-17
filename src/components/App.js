import { Routes, Route } from 'react-router-dom';

import Navbar from './routes/Navbar/Navbar';
import Inicio from './routes/Inicio/Inicio';
import Acceder from './Acceder/Acceder';
import Tienda from './Tienda/Tienda';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Inicio />} />
        <Route path="tienda" element={<Tienda />} />
        <Route path="acceder" element={<Acceder />} />
      </Route>
    </Routes>
  );
};

export default App;
