import React from 'react';

import { fetchMenClothes } from '../../../redux/actions'; 
import ProductList from '../../product-list';

const MenClothes = () => {

  return (
    <ProductList 
      action={fetchMenClothes} 
    />
  );
};

export default MenClothes;

