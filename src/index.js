import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const author = "Zdenko";
const title = "Dog Man";
const img =
  "https://m.media-amazon.com/images/I/51UmNg33hCL._UY266_FMwebp_.jpg?aicid=books-design-system-web";

const someFunc = (parm1, parm2) => {
  console.log(parm1, parm2);
};
someFunc("job", "developer");

const FirstBook = {
  author: author,
  title: title,
  img: img,
};
const SecondBook = {
  author: "Dav Pilkey",
  title: "Cat Kid Comic Club",
  img: img,
};

const BookList = () => {
  return (
    <section className="BookList">
      <Book
        img={FirstBook.img}
        title={FirstBook.title}
        author={FirstBook.author}
      >
        <p>Nesto napisano bilo sto </p>
        <button>Click me</button>
      </Book>
      <Book
        img={SecondBook.img}
        title={SecondBook.title}
        author={SecondBook.author}
      />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="Book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
