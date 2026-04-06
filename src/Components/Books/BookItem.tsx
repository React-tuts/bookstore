import React from "react";
import { BookItemProps } from "./Book.types";
/**
 * Book Item to render each book in the Books list
 *
 * @param {book} - A Book item from the Books List
 * @returns BookItem - JSX
 */
export const BookItem = ({ book }: BookItemProps) => {
  return (
    <li className="book">
      <img src={`/images/${book.coverImage}`} alt={`${book.title} book`} />
      <div>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <span>{book.price}</span>
      </div>
    </li>
  );
};
