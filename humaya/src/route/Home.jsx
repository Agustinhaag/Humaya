import React,  { useEffect, useState } from "react";
import Carousel from "../componentes/Carrusel"
import { Header, Footer } from "../componentes/Header";
import "../Css/App.css";
import Spinner from "../componentes/Spinner";
import { fetchData } from "../componentes/data";

const Home = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      consulta: "",
    });
  const [infoActive, setInfoActive] = useState(false);
  const [viewInfo, setViewInfo] = useState(false)
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/enviar", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
    if (response.status === 400) {
        const data = await response.json();
        if (data.errors) {
          setErrors(data.errors);
        }
    }else if (response.status === 200) {
        setErrors({});
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          consulta: "",
        });
      }
    }
  
  useEffect(()=>{
  const btnInfo = document.querySelectorAll("#btn-info");
  btnInfo.forEach((btn) => {
    btn.addEventListener("click", () => {
      const article = btn.closest(".container-gral-banner");
      const visibleContent = article.querySelector(".container-card-banner");
      visibleContent.classList.add("hide");
      const adicional = article.querySelector(".return");
      adicional.classList.add("view");
    });
  });
  const btnReset = document.querySelectorAll("#btn-reset");
  btnReset.forEach((btn) => {
    btn.addEventListener("click", () => {
      const article = btn.closest("article");
      const adicional = article.querySelector(".return");
      adicional.classList.remove("view");
      const visibleContent = article.querySelector(".container-card-banner");
      visibleContent.classList.remove("hide");
    });
  });
    },[])

  const handleInfoClick = () => {
      setInfoActive(true);
      setTimeout(() => {
        setViewInfo(true)
      }, 400)
      setTimeout(() => {
        setInfoActive(false)
      }, 1500);
  }
  const returnClick = () =>{
     setViewInfo(false);
  }

  useEffect(() => {
    const fetchDataAndLoad = async () => {
      try {
         await fetchData();
       setTimeout(()=>{
        setLoading(false);
       },1000)  
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchDataAndLoad();
  }, []);


  return (
    <div>
      <Header/>
      <main>
        <div className="productos">
          <h2>PRODUCTOS</h2>
        </div>
        <section className="banner">
          <article>
            <div className="container-img-banner">
              <img src="img/Producto1.png" alt="" />
            </div>
            <div className="container-gral-banner">
              <div className="container-card-banner">
                <h3>DULCE DE LECHE TRADICIONAL</h3>
                <div className="container-parrafo">
                  <p>
                    Elaboración artesanal de principio a fin, con un sabor
                    intenso, receta tradicional
                  </p>
                  <p>Presentación en frasco de vidrio de 580gr.</p>
                </div>
                <div className="banner-btn">
                  <button id="btn-info">+ INFO</button>
                </div>
              </div>
              <div className="return ">
                <h1>Ingredientes para un frasco de 580gr</h1>
                <ul>
                  <li>Leche entera de 1ra calidad</li>
                  <li>Azucar refinada</li>
                  <li>Esencia de vainilla</li>
                  <li>Bicarbonato de sodio</li>
                </ul>
                <div className="cont-btn-return">
                  <button id="btn-reset">Volver</button>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="container-gral-banner">
              <div className="container-card-banner">
                <h3>DULCE DE LECHE SIN AZÚCAR</h3>
                <div className="container-parrafo">
                  <p>
                    Elaboración artesanal para cuidar su silueta sin renunciar a
                    nada, endulzado naturalmente con stevia.
                  </p>
                  <p>Presentación en frasco de vidrio de 580 y 280gr.</p>
                </div>
                <div className="banner-btn">
                  <button id="btn-info">+ INFO</button>
                </div>
              </div>
              <div className="return">
                <h1>Ingredientes para un frasco de 580gr</h1>
                <ul>
                  <li>Leche descremada de 1ra calidad</li>
                  <li>Endulcorante Stevia o de su preferencia</li>
                  <li>Esencia de vainilla</li>
                  <li>Bicarbonato de sodio</li>
                </ul>
                <div className="cont-btn-return">
                  <button id="btn-reset">Volver</button>
                </div>
              </div>
            </div>
            <div className="container-img-banner">
              <img src="img/Producto2.png" alt="" />
            </div>
          </article>
          <article>
            <div className="container-img-banner">
              <img src="img/Producto3.png" alt="" />
            </div>
            <div className="container-gral-banner">
              <div className="container-card-banner">
                <h3>DULCE CHOCONUTT</h3>
                <div className="container-parrafo">
                  <p>
                    Elaboración artesanal para el capricho dulce, combinación de
                    dulce de leche, chocolate y pasta de avellanas. Una delicia
                    única
                  </p>
                  <p>Presentación en frasco de vidrio de 280gr.</p>
                </div>
                <div className="banner-btn">
                  <button id="btn-info">+ INFO</button>
                </div>
              </div>
              <div className="return">
                <h1>Ingredientes para un frasco de 580gr</h1>
                <ul>
                  <li>Leche de coco en polvo</li>
                  <li>Azucar rubia</li>
                  <li>Agua</li>
                  <li>Bicarbonato de sodio</li>
                  <li>Colorante: caramelo</li>
                </ul>
                <div className="cont-btn-return">
                  <button id="btn-reset">Volver</button>
                </div>
              </div>
            </div>
          </article>
  <div className='banner-end'>
    <div className={`container-card-banner ${viewInfo ? 'hideText' : ''}`} id="text1">
        <h3>ALFAJORES DE MAICENA</h3>
        <div className="container-parrafo">
          <p>
            Alfajores de dulce de leche con coco rallado, relleno con 2cm de pura dulzura. Pudiendo elegir entre dulce de leche tradicional, ligth o choconutt.
          </p>
          <p>Presentación en caja de 6 y 12 alfajores.</p>
        </div>
        <div className="banner-btn">
          <button onClick={handleInfoClick}>+ INFO</button>
        </div> 
    </div>
    <div id="text2" className={`${viewInfo ? 'viewText': 'text2'}`}>
      <h2>1 alfajor: </h2>
        <div className="content-ingre">
          <div className="container-data">
            <div className="ingredientes">
            <h4>Ingredientes:</h4>
            <ul>
              <li>Manteca 200 g.</li>
              <li>Azúcar 150 g.</li>
              <li>Yemas 3 unidades</li>
              <li>Harina leudante 200 g.</li>
              <li>Almidón de maíz 300 g.</li>
              <li>Dulce de leche 500 g.</li>
              <li>Coco rallado ALICANTE 2 cdas.</li>
              <li>Esencia de Vainilla 1 cda.</li>
            </ul>
           </div>
           <div className="infoNutri">
            <h4>Info nutricional:</h4>
            <ul>
              <li>303 Calorias</li>
              <li>8,7g Grasa</li>
              <li>52g Carbohidratos</li>
              <li>4,2g Proteina</li>
              <li>Sin agregados ni colorantes artificiales.</li>
            </ul>
           </div>
          </div>
          <div className="banner-btn">
            <button onClick={returnClick}>Volver</button>
          </div>
        </div>
    </div>
    <div className={`container-img-banner-end ${infoActive ? 'move-left' : ''}`}>
        <img src="img/Producto4copia.png" alt="" />
    </div>
  </div>
        </section>
        <section className="container-caract">
          <h3>La mejor calidád para vos</h3>
          <div className="container-info">
            <div className="info">
              <img src="img/organic.png" alt="100% Orgánico" />
              <p>
                100% <br />
                ORGÁNICO
              </p>
            </div>
            <div className="info">
              <img src="img/sin_tacc1.png" alt="Sin tacc" />
              <p>
                SIN <br />
                TACC
              </p>
            </div>
            <div className="info">
              <img src="img/sin_aditivos.png" alt="Sin conservantes" />
              <p>
                SIN <br />
                CONSERVANTES
              </p>
            </div>
          </div>
        </section>
        <div className="productos" id="contact">
          <h2>CONTÁCTANOS</h2>
        </div>
        <section className="contact">
          <div className="contact-img"></div>
          <div className="contact-form">
            {formSubmitted ? (
              <div className="formSubmit">
                <h3>Muchas gracias por comunicarse con nosotros.</h3>
                <p>En breve nos pondremos en contacto.</p>
               <div className="btn-formSubmit"> <button className="btn btn-outline-secondary" onClick={()=>setFormSubmitted(false)}>Volver</button></div>
              </div>): 
            <form action="/enviar" method="post" onSubmit={handleSubmit}>
              <p>
                Déjanos tu consulta y nuestro personal se pondrá en contacto a
                la brevedad:
              </p>
              <label htmlFor="name">NOMBRE:</label>
              <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}  className={Array.isArray(errors) && errors.find(error => error.path === 'name') ? 'error-input' : ''}/>
           {Array.isArray(errors) && errors.map(error => {
            if(error.path ==="name"){
              return( <div className="error-message">{error.msg}</div>)
            }
            return null;
           })}
              <label htmlFor="email">EMAIL:</label>
              <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}  className={Array.isArray(errors) && errors.find(error => error.path === 'email') ? 'error-input' : ''}/>
              {Array.isArray(errors) && errors.map(error => {
            if(error.path ==="email"){
              return( <div className="error-message">{error.msg}</div>)
            }
            return null;
           })}
              <label htmlFor="consulta">CONSULTA:</label>
              <textarea name="consulta" value={formData.consulta} onChange={(e) => setFormData({ ...formData, consulta: e.target.value })}  className={Array.isArray(errors) && errors.find(error => error.path === 'consulta') ? 'error-input' : ''}></textarea>
              {Array.isArray(errors) && errors.map(error => {
            if(error.path ==="consulta"){
              return( <div className="error-message">{error.msg}</div>)
            }
            return null;
           })}
              <div className="cont-btn">
                <button type="submit">ENVIAR</button>
              </div>
            </form>
            }
          </div>
        </section>
        <div className="productos">
          <h2>RECETAS</h2>
        </div>
        <section>
          <div className="contenedor-principal">
            {loading ? (<Spinner/>):(<>
             <button id="flecha-izquierda" className="flecha-izquierda">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="container-carrusel">
              <div className="container-card" id="container-card"><Carousel/></div>
            </div>
            <button id="flecha-derecha" className="flecha-derecha">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            </>)}
          </div>
        </section>
        <div className="productos">
          <h2>Encontranos en:</h2>
        </div>
      </main>
     <Footer/>
    </div>
  )
}

export default Home