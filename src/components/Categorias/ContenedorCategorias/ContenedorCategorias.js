import ItemCategoria from '../ItemCategoria/ItemCategoria';

import './ContenedorCategorias.scss';

const ContenedorCategorias = () => {
  const categorias = [
    {
      id: 1,
      nombre: 'Camisas',
      imagen:
        'https://www.savillerow.cl/image/cache/catalog/imagessr/2649799_azul-rojo_1-1200x1200.jpg',
    },
    {
      id: 2,
      nombre: 'Pantalones',
      imagen:
        'https://imagenes.elpais.com/resizer/Edwu1tP3lj1jmApRLcXuepTiOho=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/6NX2RG3OYGKJVVB4BDYKHQWVMQ.jpg',
    },
    {
      id: 3,
      nombre: 'Zapatos',
      imagen:
        'https://www.podoactiva.com/wp-content/uploads/imagenes/calzado_1.jpg',
    },
    {
      id: 4,
      nombre: 'Hombres',
      imagen:
        'https://www.somosmamas.com.ar/wp-content/uploads/2019/02/estilos-de-ropa-hombres.jpg',
    },
    {
      id: 5,
      nombre: 'Mujeres',
      imagen: 'https://i.ytimg.com/vi/e32r-2PoFFo/maxresdefault.jpg',
    },
  ];

  return (
    <div className="contenedor-categorias">
      {categorias.map((categoria) => {
        return <ItemCategoria key={categoria.id} categoria={categoria} />;
      })}
    </div>
  );
};

export default ContenedorCategorias;
