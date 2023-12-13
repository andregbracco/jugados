import React from "react";
import ProductPage from "@/components/pages/ProductPage";
import { getGameById } from "@/utils/api";

const ProductDetailPage = ({ game }) => {
  return <ProductPage game={game} />;
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const game = getGameById(id);

  return {
    props: {
      game,
    },
  };
}

export default ProductDetailPage;
