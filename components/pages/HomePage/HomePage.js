import React, { useState } from "react";
import Image from "next/image";
import styles from "./HomePage.module.scss";
import NavBar from "@/components/NavBar/NavBar.js";

const HomePage = ({ gamesData }) => {
  const [languageFilter, setLanguageFilter] = useState("");
  const [conditionFilter, setConditionFilter] = useState("");

  const uniqueLanguages = Array.from(
    new Set(gamesData.map((game) => game.language))
  );
  const uniqueConditions = Array.from(
    new Set(gamesData.map((game) => game.condition))
  );

  const filteredGames = gamesData.filter(
    (game) =>
      (!languageFilter || game.language === languageFilter) &&
      (!conditionFilter || game.condition === conditionFilter)
  );

  return (
    <div className={styles.root}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.filters}>
          <label>
            Filtrar por Idioma:
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
            >
              <option value="">Todos</option>
              {uniqueLanguages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </label>

          <label>
            Filtrar por Condición:
            <select
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value)}
            >
              <option value="">Todos</option>
              {uniqueConditions.map((condition) => (
                <option key={condition} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.cards}>
          {filteredGames.map((game) => (
            <div key={game.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={game.image}
                  alt={game.name}
                  objectFit="contain"
                  layout="fill"
                />
              </div>

              <div className={styles.details}>
                <h3>{game.name}</h3>
                <p>Precio: ${game.price}</p>
                <p>Condición: {game.condition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
