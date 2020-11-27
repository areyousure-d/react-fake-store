import React, { FC } from "react";

import { fetchElectronics } from "../../../redux/actions";
import ProductList from "../../product-list";

const Electronics: FC = () => {
  return <ProductList action={fetchElectronics} />;
};

export default Electronics;
