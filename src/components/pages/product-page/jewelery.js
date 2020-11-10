import React from 'react';

import { fetchJewelery } from '../../../redux/actions'; 
import ProductList from '../../product-list';

const Jewelery = () => {

  return (
    <ProductList 
      action={fetchJewelery} 
    />
  );
};

export default Jewelery;

