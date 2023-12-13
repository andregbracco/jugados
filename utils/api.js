const gamesData = [
    {
      id: 1,
      name: "Clank",
      language: "Español",
      price: 30000,
      condition: "nuevo",
      description: "Es un juego verdaderamente interesante para jugar con la bombona muchas veces",
      image:
        "https://akataka.com/wp-content/uploads/2019/10/Clank-1-con-LOGO.png",

      },
    {
      id: 2,
      name: "My City",
      language: "Español",
      price: 30000,
      condition: "usado",
      description: "Es un juego verdaderamente interesante para jugar con la bombona muchas veces",
      image: "https://akataka.com/wp-content/uploads/2023/11/my-city-1.png",
    },
    {
      id: 3,
      name: "Takenoko",
      language: "Mandarín",
      price: 30000,
      condition: "usado",
      description: "Es un juego verdaderamente interesante para jugar con la bombona muchas veces",
      image:
        "https://akataka.com/wp-content/uploads/2020/02/Takenoko-1-con-LOGO.jpg",
    },
    {
      id: 4,
      name: "CARCASSONNE",
      language: "Inglés",
      price: 10000,
      condition: "usado",
      description: "Es un juego verdaderamente interesante para jugar con la bombona muchas veces",
      image:
        "https://akataka.com/wp-content/uploads/2023/07/NIEBLA-EN-CARCASSONNE-1-LOGO.jpg",
    },
  ];
  
  const gamesDataObject = gamesData.reduce((acc, game) => {
    acc[game.id] = game;
    return acc;
  }, {});
  
  export function getGamesData() {
    return gamesData;
  }
  
  export function getGameById(id) {
    return gamesDataObject[id];
  }
  