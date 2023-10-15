import React from "react";

export default function Person({ image, name, title, quote }) {
  return (
    <article>
      <div>
        <img src={image} width={"50px"} />
      </div>
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{quote}</p>
    </article>
  );
}
