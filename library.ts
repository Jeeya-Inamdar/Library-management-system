type Book = {
  isbn: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  isBorrowed?: boolean;
};

export class Library {
  private books: Book[] = [];

  addBook(book: Book) {
    this.books.push({ ...book, isBorrowed: false });
  }

  borrowBook(isbn: string): boolean {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book && !book.isBorrowed) {
      book.isBorrowed = true;
      return true;
    }
    return false;
  }

  getAvailableBooks(): Book[] {
    return this.books.filter((book) => !book.isBorrowed);
  }
}
