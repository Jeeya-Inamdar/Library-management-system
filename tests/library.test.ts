import { Library } from "../library";

describe("Library Management System", () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  it("should add books and make them available", () => {
    library.addBook({
      isbn: "9780143127741",
      title: "The Mindset",
      author: "Carol S. Dweck",
      genre: "Self-Help",
      year: 2006,
    });
    library.addBook({
      isbn: "9781612680194",
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      genre: "Personal Finance",
      year: 1997,
    });
    library.addBook({
      isbn: "9780593080005",
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      year: 2018,
    });
    library.addBook({
      isbn: "9781400079988",
      title: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      genre: "Fiction",
      year: 2007,
    });

    const books = library.getAvailableBooks();
    expect(books.length).toBe(4);
    expect(books[0].isbn).toBe("9780143127741");
  });

  it("should allow borrowing a book if available", () => {
    library.addBook({
      isbn: "9780143127741",
      title: "The Mindset",
      author: "Carol S. Dweck",
      genre: "Self-Help",
      year: 2006,
    });

    const borrow = library.borrowBook("9780143127741");
    expect(borrow).toBe(true);

    const books = library.getAvailableBooks();
    expect(books.length).toBe(0);
  });
});
