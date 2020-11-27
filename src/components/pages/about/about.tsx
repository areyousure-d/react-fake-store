import React, { FC } from "react";

import styles from "./about.module.css";

const About: FC = () => {
  return (
    <div className={styles.about}>
      <h2>Мы компания FakeStore</h2>
      <p>Занимаемся фейковыми продажами фейковых товаров.</p>
      <p>Здесь все не настоящее.</p>
    </div>
  );
};

export default About;
