import { setupMenu } from "./setupMenu";
import { useEffect,useState } from "react";
import infoData from "./elements";

export const Header = ()=>{

  const [mostrarInfo, setMostrarInfo]= useState(false)
  const [currentInfo, setCurrentInfo] = useState(0)
  
  if (mostrarInfo) {
    const delay = 1700;
    if (currentInfo < infoData.length) {
       setTimeout(() => {
        setCurrentInfo(currentInfo + 1);
      }, delay);
    }
  }
  
  const toggleInfo = () => {
  setMostrarInfo(!mostrarInfo);
  };
  
  const { init, mostrarMenu, ocultarMenu } = setupMenu();
  useEffect(() => {
    init();
  }, []);

return(
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
            <a href="/">Home</a>
            <a href="/products">Productos</a>
            <a href="#">Locales</a>
            <a href="#contact">Contactos</a>
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
          
      {mostrarInfo ? (
        <div className="content-element">
          <div className="content-div">
             {
        infoData.slice(0, currentInfo + 1).map((info, index) => (
          <div
            key={index}
            className={`fade-in ${mostrarInfo ? 'active' : ''}`}
          >
            <h2>{info.title}</h2>
            {info.content ? (
              <div className="content-text">
                <p>{info.content}</p>
              </div>
            ):(
              <div className="content-text">
              <p>{info.rec1}</p>
              <p>{info.rec2}</p>
              <p>{info.rec3}</p>
              <p>{info.rec4}</p>
              </div>
            )}
          </div>
))} 
          </div>
<div className="content-btn-header">
  <button onClick={()=>{
                        toggleInfo();
                        setCurrentInfo(0);
                        }} className="btn btn-outline-secondary"><i className="fa-solid fa-rotate-left"></i></button>
  </div>
</div>
      ) : (
        <div>
          <h1>DULCES DEL ALMA</h1>
          <p>
            Los productos HUMAYA son elaborados desde hace más de 50 años fiel
            a las tradiciones familiares y sabores caseros, acompañándote en
            los momentos más importantes de la vida.
          </p>
          <div className="container-btn-header">
            <button onClick={toggleInfo}>CONOCENOS</button>
          </div>
        </div>
      )}
    </section>
      </header>
)
}

export const Footer = ()=>{
return(
  <footer>
  <section className="container-footer">
    <div className="container-img-footer">
      <img src="img/LogoHumaya100x100.png" alt="" />
    </div>
    <div className="container-menu">
      <div className="menu">
        <p>MENÚ</p>
        <a href="/">Home</a>
        <a href="/products">Productos</a>
        <a href="">Locales</a>
        <a href="#contact">Contactos</a>
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
)
}