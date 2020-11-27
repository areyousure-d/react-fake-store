import React, { FC } from "react";
import clsx from "clsx";

import Container from "../container";

import styles from "./footer.module.css";

const Footer: FC = () => {
  return (
    <div className={clsx(styles.footer)}>
      <Container className={styles.footerContainer}>
        <div>FakeStore, 2020</div>
      </Container>
    </div>
  );
};

export default Footer;
