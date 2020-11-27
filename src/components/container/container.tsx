import React, { FC } from "react";
import clsx from "clsx";

import styles from "./container.module.css";

type ContainerPropsType = {
  className?: string;
};

const Container: FC<ContainerPropsType> = (props) => {
  return (
    <div className={clsx(styles.container, props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
