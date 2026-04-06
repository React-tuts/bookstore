import React from "react";
import { BookListProps } from "./Book.types";
import { BookItem } from "./BookItem";
/**
 * Renders the list of books
 *
 * @param {Book[]} books as props
 * @returns Jsx - list of books
 */

export const BooksList = ({ books }: BookListProps) => {
  return (
    <main className="menu">
      <ul className="books">
        {books.map((item, id) => (
          <BookItem key={id} book={item} />
        ))}
      </ul>
    </main>
  );
};
