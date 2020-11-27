import React, { FC } from "react";

import styles from "./loading-indicator.module.css";

const LoadingIndicator: FC = () => {
  return <div className={styles.loadingIndicator}>Loading...</div>;
};

export default LoadingIndicator;
