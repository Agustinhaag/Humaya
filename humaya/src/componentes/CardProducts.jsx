import React, { useEffect, useState } from 'react';
import { fetchData } from './data';
import { Link } from 'react-router-dom';

const CardProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetchData();
        setProductos(response);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerProductos();
  }, []);

  return (
    <div id="container-card" className='container-card'>
      {productos.map((producto) => (
        <div key={producto.id} className="card-cont">
          <div className="card-img">
            <img src={producto.image} alt={producto.title} />
          </div>
          <div className="card-info">
            <h3>{producto.title}</h3>
            <p>{producto.description}</p>
            <div className="container-link">
              <Link to={`/products/${producto.id}`} className="rotate-btn">
              Ver producto
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProducts;
