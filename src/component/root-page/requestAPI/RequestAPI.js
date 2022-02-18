import React, { useState, useEffect } from "react";
import style from "./requestAPI.module.scss"

export default function RequestAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      {data &&
        data.map((product) => {
          console.log(product);
          return (
            <div id={style.products} key={product.id}>
              {product.title} : {product.price}
            </div>
          );
        })}
    </div>
  );
}
