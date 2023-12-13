import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import styles from "./ProductPage.module.scss";

const ProductPage = ({ game }) => {
  return (
    <div className={styles.productPage}>
      <NavBar />
      <div className={styles.productContainer}>
        <h1 className={styles.title}>{game.name}</h1>
        <div className={styles.detailsContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={game.image}
              alt={game.name}
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.descriptionContainer}>
              <p>{game.description}</p>
            </div>
            <p>Precio: ${game.price}</p>
            <p>Condición: {game.condition}</p>
            <p>Idioma: {game.language}</p>
            <button className={styles.buyButton}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
