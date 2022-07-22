class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        } else {
            let book = {
                bookName,
                bookAuthor,
                paid: false
            }
            this.books.push(book);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }

    payBook(bookName) {
        let foundBook = this.books.find((book) => book.bookName == bookName);
        if (foundBook === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        } else {
            if (foundBook.paid) {
                throw new Error(`${bookName} has already been paid.`);
            } else {
                foundBook.paid = true;
                return `${bookName} has been successfully paid.`;
            }
        }
    }

    removeBook(bookName) {
        let foundBook = this.books.find((book) => book.bookName == bookName);
        if (foundBook === undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        } else {
            if (foundBook.paid === false) {
                throw new Error(`${bookName} need to be paid before removing from the collection.`);
            } else {
                let bookIndex = this.books.indexOf(foundBook);
                this.books.splice(bookIndex, 1);
                return `${bookName} remove from the collection.`;
            }
        }
    }

    getStatistics(bookAuthor) {
        if (bookAuthor === undefined) {
            let emptySlots = this.capacity - this.books.length;
            let printMessage = [];
            printMessage.push(`The book collection has ${emptySlots} empty spots left.`);
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            for (let book of this.books) {
                let message = `${book.bookName} == ${book.bookAuthor} - `;

                if (book.paid) {
                    message += `Has Paid.`;
                } else {
                    message += `Not Paid.`;
                }

                printMessage.push(message);
            }
            return printMessage.join('\n');
        } else {
            let foundAuthor = this.books.find((book) => book.bookAuthor == bookAuthor);
            if (foundAuthor === undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                let message = `${foundAuthor.bookName} == ${foundAuthor.bookAuthor} - `;
                if (foundAuthor.paid) {
                    message += `Has Paid.`;
                } else {
                    message += `Not Paid.`;
                }
                return message;
            }
        }
    }
}

const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
console.log(library.removeBook('Don Quixote'));
console.log(library.removeBook('In Search of Lost Time'));
