import React from "react";


export default function Card({title, price, details, tag, image}) {
  return (
    <div className="card-container">
      <div className="card-image">
        <div className="img-tag">{tag}</div>
        <img src={image} alt={tag} />
      </div>
      <div className="card-content">
        <div className="content-upper">
          <h4>{title}</h4>
          <p>{details}</p>
        </div>
        <div className="content-lower">
          <small>For as low as</small>
          <h3>N {price} NGN</h3>
          <span>
            <sub>per employee</sub>
          </span>
        </div>
      </div>
    </div>
  );
}
