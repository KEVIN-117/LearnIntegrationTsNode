import { Book } from './Book'
export class Author{
    private id: number;
    private name: string;
    private lastName : string;
    private books: Book[];
    private birthDate: Date;

    constructor(id: number, name: string, lastName: string, books: Book[], birthDate: Date){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.birthDate = birthDate;
    }

    get Id(): number {
        return this.id;
    }

    get Name(): string {
        return this.name;
    }

    get LastName(): string {
        return this.lastName;
    }

    get Books(): Book[] {
        return this.books;
    }

    get BirthDate(): Date {
        return this.birthDate;
    }

    set Name(name: string) {
        this.name = name;
    }

    set LastName(lastName: string) {
        this.lastName = lastName;
    }

    set Books(books: Book[]) {
        this.books = books;
    }

    set BirthDate(birthDate: Date) {
        this.birthDate = birthDate;
    }
    
}