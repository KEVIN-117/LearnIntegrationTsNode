import { Author } from './Author'

export class Book {
    private id: number;
    private title: string;
    private author: Author;
    constructor(id: number, title: string, author: Author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    get Id(): number {
        return this.id;
    }

    get Title(): string {
        return this.title;
    }

    get Author(): Author {
        return this.author;
    }

    set Title(title: string) {
        this.title = title;
    }

    set Author(author: Author) {
        this.author = author;
    }

    public toString(): string {
        return `Book: ${this.title} by ${this.author}`;
    }
}