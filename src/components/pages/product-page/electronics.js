import React from 'react';

import { fetchElectronics } from '../../../redux/actions'; 
import ProductList from '../../product-list';

const Electronics = () => {

  return (
    <ProductList 
      action={fetchElectronics} 
    />
  );
};

export default Electronics;

