import StudentMain from "@/Comps/StudentMain";
import styles from "./page.module.css";

export default async () => {
  return (
    <main className={styles.main}>
      <StudentMain />
    </main>
  );
};
