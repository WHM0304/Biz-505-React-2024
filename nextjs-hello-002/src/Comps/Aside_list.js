"use client";

import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./Aside_list.module.css";
import styles from "./AsideList.module.css";
export default () => {
  const router = useRouter();
  return (
    <ul className={styles.ul}>
      <li>
        <Link
          href="/blog/write"
          className={
            router.pathname === "/blog/write" ? styles.active : ""
          }
        >
          글쓰기
        </Link>
      </li>
      <li>
        <Link href="/blog/all">전체보기</Link>
      </li>
      <li>
        <Link href="/blog/like">인기글</Link>
      </li>
      <li>
        <Link href="/blog/new">최신글보기</Link>
      </li>
    </ul>
  );
};
