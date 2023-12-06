import HomePage from "@/components/pages/HomePage";

const gamesData = [
  {
    id: 1,
    name: "Clank",
    language: "Español",
    price: 30000,
    condition: "nuevo",
    image:
      "https://akataka.com/wp-content/uploads/2019/10/Clank-1-con-LOGO.png",
  },
  {
    id: 2,
    name: "My City",
    language: "Español",
    price: 30000,
    condition: "usado",
    image: "https://akataka.com/wp-content/uploads/2023/11/my-city-1.png",
  },
  {
    id: 3,
    name: "Takenoko",
    language: "Mandarín",
    price: 30000,
    condition: "usado",
    image:
      "https://akataka.com/wp-content/uploads/2020/02/Takenoko-1-con-LOGO.jpg",
  },
  {
    id: 4,
    name: "CARCASSONNE",
    language: "Inglés",
    price: 10000,
    condition: "usado",
    image:
      "https://akataka.com/wp-content/uploads/2023/07/NIEBLA-EN-CARCASSONNE-1-LOGO.jpg",
  },
];

export async function getServerSideProps() {
  return {
    props: {
      gamesData,
    },
  };
}

export default HomePage;
