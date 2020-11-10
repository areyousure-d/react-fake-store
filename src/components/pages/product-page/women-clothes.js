import React from 'react';

import { fetchWomenClothes } from '../../../redux/actions'; 
import ProductList from '../../product-list';

const WomenClothes = () => {

  return (
    <ProductList 
      action={fetchWomenClothes} 
    />
  );
};

export default WomenClothes;

