"use client";

import DefaultHeader from "@/components/header/DefaultHeader/DefaultHeader";
import styles from "./DefaultLayout.module.scss";

interface DefaultLayoutProps extends React.PropsWithChildren {}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className={styles.rootContainer}>
      {/* <div className={styles.headerSection}>
        <DefaultHeader />
      </div> */}

      <div className={styles.contentSection}>{props.children}</div>
    </div>
  );
}
