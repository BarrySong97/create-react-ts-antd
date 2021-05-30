import React, { FC } from "react";
import styles from "./index.less";
interface ComponentNameProps {}

const ComponentName: FC<ComponentNameProps> = (props) => {
  return <div className={styles.styleComponentName}>Hello ComponentName} </div>;
};

export default ComponentName;
