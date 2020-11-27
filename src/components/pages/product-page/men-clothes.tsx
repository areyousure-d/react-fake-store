import React, { FC } from "react";

import { fetchMenClothes } from "../../../redux/actions";
import ProductList from "../../product-list";

const MenClothes: FC = () => {
  return <ProductList action={fetchMenClothes} />;
};

export default MenClothes;
