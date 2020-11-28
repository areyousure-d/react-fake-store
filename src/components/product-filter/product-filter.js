import React from "react";
import { Link } from "react-router-dom";

import styles from "./product-filter.module.css";

const ProductFilter = () => {
  return (
    <div className={styles.productFilter}>
      <Link to="/">Все продукты</Link>
      <Link to="/men_clothes">Мужская одежда</Link>
      <Link to="/electronics">Электроника</Link>
      <Link to="/jewelery">Украшения</Link>
      <Link to="/women_clothes">Женская одежда</Link>
    </div>
  );
};

export default ProductFilter;
