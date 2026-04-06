import React from "react";
import { Header } from "./Components/Header";
import { BooksList } from "./Components/Books";
import { bookData } from "./data/BooksData";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <div className="container">
      <Header title="React Book Store" />
      <BooksList books={bookData} />
      <Footer />
    </div>
  );
}

export default App;
