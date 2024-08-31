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

  getAvailableBooks(): Book[] {
    return this.books.filter((book) => !book.isBorrowed);
  }
}
