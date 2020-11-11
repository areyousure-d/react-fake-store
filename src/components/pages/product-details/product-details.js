import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProductById } from '../../../redux/actions';
import LoadingIndicator from '../../loading-indicator';
import ErrorIndicator from '../../error-indicator';
import { FakestoreService } from '../../../services';

const ProductDetails = () => {
  const fakestoreService = new FakestoreService();
  const dispatch = useDispatch();
  let { id } = useParams();
  id = +id;

  const { product, loading, error } = useSelector((state) => { 
    return state.products
  });

  useEffect(() => {
    dispatch(fetchProductById(fakestoreService, id));
  }, [id]);

  if (loading) {
    return (
      <div>
        <LoadingIndicator />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ErrorIndicator />
      </div>
    );
  }

  return (
    <div>
      { id }  
      { product && product.title }
    </div>
  );
};

export default ProductDetails;

