import './ItemCategoria.scss';

const ItemCategoria = ({ categoria }) => {
  return (
    <div className="categoria">
      <div
        className="imagen-categoria"
        style={{ backgroundImage: `url(${categoria.imagen})` }}
      />
      <div className="cuerpo-categoria">
        <h2>{categoria.nombre}</h2>
        <p>Comprar ahora</p>
      </div>
    </div>
  );
};

export default ItemCategoria;
