import React from 'react';
import '../assets/css/Card.css';

function Card({ autor, imagen, descripcion }) {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src={imagen} className="card-img-top" alt="imagen" />
                        <div className="card-body">
                            <h5 className="card-title">{autor}</h5>
                            <p className="card-text">{descripcion}</p>
                        </div>
                        <div className="mb-5 d-flex justify-content-around">
                            <button className="btn btn-primary">Read now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
