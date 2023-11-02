import React,  { useEffect, useState } from "react";
import Carousel from "../componentes/Carrusel";

const Home = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      consulta: "",
    });
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/enviar", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
console.log('Datos del formulario:', formData)
  console.log(response)
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
  
    let menu, mostrar, ocultar, enlaces;
    function updateMostrarVisibility() {
      if (window.innerWidth <= 768 && !menu.classList.contains("visible")) {
        mostrar.style.display = "block";
      } else {
        mostrar.style.display = "none";
      }
    }
  
    const mostrarMenu = () => {
      menu.classList.add("visible");
      menu.style.transition = "0.6s";
      updateMostrarVisibility();
    };
  
    const ocultarMenu = () => {
      menu.classList.remove("visible");
      updateMostrarVisibility();
    };
  
    useEffect(() => {
      menu = document.getElementById("menu");
      mostrar = document.querySelector("#mostrar");
      ocultar = document.getElementById("ocultar");
      enlaces = document.querySelectorAll('nav a[href^="#"]');
  
      mostrarMenu();
  
      ocultarMenu();
  
      if (enlaces) {
        enlaces.forEach((enlace) => {
          enlace.addEventListener("click", () => {
            menu.classList.remove("visible");
            updateMostrarVisibility();
          });
        });
      }
    }, []);
  
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



  return (
    <div>
      <header>
        <nav>
          <div className="container-logo">
            <img src="./img/LogoHumaya100x100.png" alt="" />
          </div>
          <span className="mostrar">
            <i
              className="fa-solid fa-bars"
              id="mostrar"
              onClick={mostrarMenu}
            ></i>
          </span>
          <div className="container-nav" id="menu">
            <a href="#">Home</a>
            <a href="#">Productos</a>
            <a href="#">Locales</a>
            <a href="#">Contactos</a>
            <span className="ocultar">
              <i
                className="fa-solid fa-xmark"
                id="ocultar"
                onClick={ocultarMenu}
              ></i>
            </span>
          </div>
        </nav>
        <section className="container-text-header">
          <div>
            <h1>DULCES DEL ALMA</h1>
            <p>
              Los productos HUMAYA son elaborados desde hace más de 50 años fiel
              a las tradiciones familiares y sabores caseros, acompañándote en
              los momentos mas importantes de la vida.
            </p>
            <div className="container-btn-header">
              <button>CONOCENOS</button>
            </div>
          </div>
        </section>
      </header>
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
          <div className="banner-end">
            <div className="container-card-banner">
              <h3>ALFAJORES DE MAICENA</h3>
              <div className="container-parrafo">
                <p>
                  Alfajores de dulce de leche con coco rallado, relleno con 2cm
                  de pura dulzura. Pudiendo elegir entre dulce de leche
                  tradicional, ligth o choconutt.
                </p>
                <p>Presentación en caja de 6 y 12 alfajores.</p>
              </div>
              <div className="banner-btn">
                <button>+ INFO</button>
              </div>
            </div>
            <div className="container-img-banner-end">
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
        <div className="productos">
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
            <button id="flecha-izquierda" className="flecha-izquierda">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="container-carrusel">
              <div className="container-card" id="container-card"><Carousel/></div>
            </div>
            <button id="flecha-derecha" className="flecha-derecha">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </section>
        <div className="productos">
          <h2>Encontranos en:</h2>
        </div>
      </main>
      <footer>
        <section className="container-footer">
          <div className="container-img-footer">
            <img src="img/LogoHumaya100x100.png" alt="" />
          </div>
          <div className="container-menu">
            <div className="menu">
              <p>MENÚ</p>
              <a href="">Home</a>
              <a href="">Productos</a>
              <a href="">Locales</a>
              <a href="">Contactos</a>
            </div>
            <div className="menu">
              <p>NAVEGACIÓN</p>
              <a href="">Preguntas frecuentes</a>
              <a href="">Distribuidores</a>
              <a href="">Prensa</a>
              <a href="">Recetas exclusivas</a>
            </div>
            <div className="redes">
              <p>REDES</p>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <div className="menu">
              <p>UBICACIÓN</p>
              <a href="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13135.09473914999!2d-58.40043909603653!3d-34.609883896514546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1694267543521!5m2!1ses-419!2sar"
                  width="150"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
            </div>
          </div>
        </section>
        <p>&copy;All rights reserved 2023 - Humaya;</p>
      </footer>
    </div>
  )
}

export default Home