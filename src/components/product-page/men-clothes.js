import React from 'react';

import { fetchMenClothes } from '../../redux/actions'; 
import { FakestoreService } from '../../services';
import ProductList from '../product-list';

const MenClothes = () => {
  const fakestoreService = new FakestoreService();

  return (
    <ProductList 
      service={fakestoreService} 
      action={fetchMenClothes} 
    />
  );
};

export default MenClothes;

