import { Book } from "../Components/Books/Book.types";

export const bookData: Book[] = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic novel set in the Jazz Age exploring wealth and society",
      price: 12,
      coverImage: "books/gatsby.jpg",
      outOfStock: false,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A powerful story of racial injustice in the American South",
      price: 10,
      coverImage: "books/mockingbird.jpg",
      outOfStock: false,
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "Dystopian novel about totalitarian government surveillance",
      price: 15,
      coverImage: "books/1984.jpg",
      outOfStock: false,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "A fantasy adventure of Bilbo Baggins in Middle-earth",
      price: 14,
      coverImage: "books/hobbit.jpg",
      outOfStock: false,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "A guide to building good habits and breaking bad ones",
      price: 18,
      coverImage: "books/atomichabits.jpg",
      outOfStock: true,
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      description: "Lessons on financial literacy and wealth building",
      price: 16,
      coverImage: "books/richdad.jpg",
      outOfStock: false,
    },
  ];