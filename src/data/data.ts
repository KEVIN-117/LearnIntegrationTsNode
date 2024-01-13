import { Author } from "../models/Author";
import { Book } from "../models/Book";

export const BookData = [
    new Book(1, "The Lord of the Rings", new Author(1, "J.R.R.", "Tolkien", [], new Date(1892, 1, 3))),
    new Book(2, "The Hobbit", new Author(1, "J.R.R.", "Tolkien", [], new Date(1892, 1, 3))),
    new Book(3, "The Fellowship of the Ring", new Author(1, "J.R.R.", "Tolkien", [], new Date(1892, 1, 3))),
]

export const AuthorData = [

    new Author(1, "J.R.R.", "Tolkien", [BookData[0], BookData[1], BookData[2]], new Date(1892, 1, 3)),
    new Author(2, "George", "Orwell", [], new Date(1903, 5, 25)),
    new Author(3, "J.K.", "Rowling", [], new Date(1965, 6, 31)),
    new Author(4, "Stephen", "King", [], new Date(1947, 8, 21)),
    new Author(5, "Charles", "Dickens", [], new Date(1812, 1, 7)),
    new Author(6, "William", "Shakespeare", [], new Date(1564, 3, 26)),
    new Author(7, "Agatha", "Christie", [], new Date(1890, 8, 15)),
    new Author(8, "Jules", "Verne", [], new Date(1828, 1, 8)),
    new Author(9, "Arthur Conan", "Doyle", [], new Date(1859, 4, 22)),
]