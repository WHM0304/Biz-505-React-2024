import Aside_list from "@/Comps/Aside_list";
import styles from "./blog.module.css";

// blog/layout.js
export default ({ children }) => {
  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <Aside_list />
      </aside>
      <section className={styles.section}>{children}</section>
    </main>
  );
};
