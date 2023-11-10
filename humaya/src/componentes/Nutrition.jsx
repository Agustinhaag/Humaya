const ProgressBar = ({ nombre, valor, index }) => {
  return (
    <div className="container-hab" key={index}>
      <div className="skill">
        <p>
          <span className="lista"></span>
          {nombre}
        </p>
        <span className="porcentaje">{valor} gr.</span>
      </div>
      <div className='barra'> <div className={`progreso${index}`}></div> </div>
    </div>
  );
};

export default ProgressBar;