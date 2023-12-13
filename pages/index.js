import HomePage from "@/components/pages/HomePage";
import { getGamesData } from "@/utils/api";

export async function getServerSideProps() {
  const gamesData = getGamesData();

  return {
    props: {
      gamesData,
    },
  };
}

export default HomePage;