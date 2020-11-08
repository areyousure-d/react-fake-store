import React from 'react';

import { fetchAllProducts, } from '../../redux/actions'; 
import { FakestoreService } from '../../services';
import ProductList from '../product-list';

const AllProducts = () => {
  const fakestoreService = new FakestoreService();

  return (
    <ProductList 
      service={fakestoreService} 
      action={fetchAllProducts} 
    />
  );
};

export default AllProducts;

