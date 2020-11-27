import React, { FC } from "react";

import { fetchWomenClothes } from "../../../redux/actions";
import ProductList from "../../product-list";

const WomenClothes: FC = () => {
  return <ProductList action={fetchWomenClothes} />;
};

export default WomenClothes;
