import React, { useEffect, useState } from "react";
import style from "./title.module.scss";

export default function Title() {
  const [title] = useState("ma boutique de drones");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div id="title">
      <div id={"drone-title"}>{title}</div>
      <img
        id="img"
        src={"image/dronePresentation.png"}
        alt="test React picture"
        width={200}
        height={200}
      />
      <form>
        <input type="text" placeholder="rechercher un drone" />
        <button type="submit">Search</button>
      </form>
      {data &&
        data.map((product) => {
          console.log(product);
          return <div id={style.products} key={product.id}>{product.title} : {product.price}</div>;
        })}
    </div>
  );
}
