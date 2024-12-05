"use client";

import styles from "./DefaultLayout.module.scss";

export default function DefaultLayout(props: React.PropsWithChildren) {
  return (
    <div className={styles.rootContainer}>
      {/* <div className={styles.headerSection}>
        <DefaultHeader />
      </div> */}

      <div className={styles.contentSection}>{props.children}</div>
    </div>
  );
}
