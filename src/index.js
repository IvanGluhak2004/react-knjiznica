import React from "react";
import ReactDOM from "react-dom/client";

import { books } from "./books";
import Book from "./book";
import "./index.css";

const BookList = () => {
  return (
    <>
      <h1>Book List</h1>
      <section className="BookList">
        {books.map((book, index) => (
          <Book {...book} key={book.id} number={index} />
        ))}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
