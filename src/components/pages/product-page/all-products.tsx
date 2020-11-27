import React, { FC } from "react";

import { fetchAllProducts } from "../../../redux/actions";
import ProductList from "../../product-list";

const AllProducts: FC = () => {
  return <ProductList action={fetchAllProducts} />;
};

export default AllProducts;
