import React from "react";
import { Header } from "./Components/Header";
import { BooksList } from "./Components/Books";
import { bookData } from "./data/BooksData";
function App() {
  return (
    <div className="container">
      <Header title="React Book Store" />
      <BooksList books={bookData} />
    </div>
  );
}

export default App;
