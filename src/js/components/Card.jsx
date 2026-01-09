const Card = () => {
return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://via.placeholder.com/300x180"
        className="card-img-top"
        alt="imagen"
      />
      <div className="card-body">
        <h5 className="card-title">Título de la tarjeta</h5>
        <p className="card-text">
          Este es un texto breve para describir el contenido de la tarjeta.
        </p>
        <a href="#" className="btn btn-primary">
          Acción
        </a>
      </div>
    </div>
  );
};

export default Card