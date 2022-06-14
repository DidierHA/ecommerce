import { Routes, Route } from 'react-router-dom';

import Navbar from './routes/Navbar/Navbar';
import Inicio from './routes/Inicio/Inicio';
import Acceder from './Acceder/Acceder';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Inicio />} />
        <Route
          path="tienda"
          element={<h2>Aquí iría el componente de tienda</h2>}
        />
        <Route path="acceder" element={<Acceder />} />
      </Route>
    </Routes>
  );
};

export default App;
