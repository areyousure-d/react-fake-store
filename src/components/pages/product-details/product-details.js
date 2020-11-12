import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { 
  fetchProductById,
  productAddedToCart,
} from '../../../redux/actions';
import LoadingIndicator from '../../loading-indicator';
import ErrorIndicator from '../../error-indicator';
import { FakestoreService } from '../../../services';

import styles from './product-details.module.css';

const fakestoreService = new FakestoreService();

const ProductDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  id = Number(id);

  const { product, loading, error } = useSelector((state) => { 
    return state.products
  });

  const addToCartHandler = () => {
    dispatch(productAddedToCart(product));
  };

  useEffect(() => {
    dispatch(fetchProductById(fakestoreService, id));
  }, [id, dispatch]);

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
    <div className={styles.productDetails}>

      <div className={styles.imageContainer}>
        <img src={ product.image } className={styles.image} alt="product" />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{ product.title }</h3>
        <div className={styles.detailsDescription}>
          <p className={styles.category}>Категория: { product.category}</p>
          <p>Описание: { product.description }</p>
        </div>
        <div className={styles.priceBuy}>
          <p>Цена: ${ product.price }</p>
          <button 
            className={styles.button}
            onClick={addToCartHandler} 
            type="button"
          >Добавить в корзину</button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;

