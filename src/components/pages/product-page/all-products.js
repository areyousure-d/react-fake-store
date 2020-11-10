import React from 'react';

import { fetchAllProducts } from '../../../redux/actions'; 
import ProductList from '../../product-list';

const AllProducts = () => {

  return (
    <ProductList 
      action={fetchAllProducts} 
    />
  );
};

export default AllProducts;

