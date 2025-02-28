import React from "react";
import "../Card.css";

function Card({ title, description, link, image, alt}) {

    return (
        <div className="card-body">
            <img src={image} alt={alt}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank"><button>View Site</button></a>
        </div>

    );
}

export default Card