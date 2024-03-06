"use client";
import { getNaverBooks } from "@/api/naver_api";
import { useEffect, useState } from "react";

const BookDetail = ({ isbn }) => {
  const [book, setBook] = useState("");

  console.log(isbn);
  useEffect(() => {
    const fetchBook = async () => {
      const result = await getNaverBooks(isbn);
      const book = result[0];
      console.log(book);
      setBook(book);
    };
    fetchBook();
  }, [isbn]);
  return (
    <>
      <h1>Detail</h1>
      <p>ISBN: {book.isbn}</p>
      <p>도서명 : {book.title}</p>
      <p>저자: {book.author}</p>
      <p>출판사: {book.publisher}</p>
    </>
  );
};

export default BookDetail;
