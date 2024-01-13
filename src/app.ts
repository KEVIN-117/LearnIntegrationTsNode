import express from "express";
import { AuthorData, BookData } from "./data/data";
import { Author } from "./models/Author";

const app = express();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.get("/books", (req, res) => {
    try {
        res.status(200).json(BookData);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
})

app.get("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    try {
        const book = BookData.find((book) => book.Id === bookId);
        if(book) {
            res.status(200).json(book);
        }
        return res.status(404).json({ message: "Book not found"});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
})

app.put("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    try {
        const dataUpdate = req.body;
        const book = BookData.findIndex((book) => book.Id === bookId);

        if(book === -1) {
            return res.status(404).json({ message: "Book not found"});
        }
        BookData[book] = {...dataUpdate, id: bookId};
        
        res.status(200).json(BookData[book]);
        
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
})


app.get("/authors", (req, res) => {

    try {
        res.status(200).json(AuthorData);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


