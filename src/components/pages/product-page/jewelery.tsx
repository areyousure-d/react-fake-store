import React, { FC } from "react";

import { fetchJewelery } from "../../../redux/actions";
import ProductList from "../../product-list";

const Jewelery: FC = () => {
  return <ProductList action={fetchJewelery} />;
};

export default Jewelery;
