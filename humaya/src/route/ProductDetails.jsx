import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchData } from '../componentes/data.js';
import ProgressBar from '../componentes/Nutrition.jsx';
import { Footer, Header } from '../componentes/Header.jsx';


const ProductDetails = () => {
  
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetchData();
        setProductos(response);
      } catch (error) {
        console.error(error);
      }
    };
  
    data();
    
  }, [productos]);
 
 

  const obtenerProducto = (productId) => {
    return productos.find((producto) => producto.id === parseInt(productId));
  };

  useEffect(() => {
    const selectedProduct = obtenerProducto(id);
    setProductDetail(selectedProduct); 
  }, [id, productos]);
 
  useEffect(() => {
    const skill = document.getElementById("skill");
    const posicion = window.scrollY;
    if(skill){
      const posicionSkill = skill.getBoundingClientRect().top;
       if (posicion >= posicionSkill) {
      productDetail.infoNutricional.forEach((info, index) => {
        const progressBar = document.querySelector(`.progreso${index}`);
        if (progressBar) {
          progressBar.style.width = `${info.valor}%`;
        }
      });
    } else {
      productDetail.infoNutricional.forEach((info, index) => {
        const progressBar = document.querySelector(`.progreso${index}`);
        if (progressBar) {
          progressBar.style.width = "0";
        }
      });
    }
    }
     
    
   
  }, [productDetail]);
  

  if (!productDetail) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <Header/>
      <main>
       <section className='container-section'>
        <div className="container-info-basic">
            <h3>{productDetail.title}</ h3>
           <div className="img"><img src={productDetail.image} alt={productDetail.title}/></div> 
            <div className='pasos'>
        <h3>Pasos a seguir:</h3>
        <ul>
          {
            productDetail.ingredientes.map(produc=>(
              <li>{produc}</li>
            ))
          }
        </ul>
      </div>
      </div>
      <div id="skill" className="habilidades">
      <h3>Valor nutricional</h3>
      <div className="container-skill">
      <h6>Una porción de 500gr contiene:</h6>
        { productDetail.infoNutricional.map((valor, index) => (
          <ProgressBar
            nombre={valor.name}
            valor={valor.valor}
            index={index}
          />
        ))}
      </div>
      </div>
      <div className="container-pasos">
      <div className="ingredientes">
        <h3>Ingredientes:</h3>
        <div>
          <ol>
             {productDetail.Pasos.map(produc=>(           
              <li>{produc}</li>
            ))}
          </ol>
        </div>
      </div>
      <div>
      <p>"{productDetail.description}"</p>
      </div>
      </div>
       </section>
      
      <div className='container-enlace'><Link to={"/products"} className='link'>Volver</Link></div>
      </main>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
