export type Book = {
    title:string,
    author:string,
    description:string,
    price: number,
    coverImage:string,
    outOfStock:boolean
}

export type BookListProps = {
    books:Book[]
}

export type BookItemProps = {
    book: Book
}