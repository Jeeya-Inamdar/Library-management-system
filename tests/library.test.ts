import { Library } from "../library";

describe("Library Management System", () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  /* ==============================
   * Section 1: ADDING Books
   * ============================== */

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

  /* ==============================
   * Section 2: BoORROWING Books
   * ============================== */

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

    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toEqual(0); // Book is no longer available after borrowing
  });

  it("should not allow borrowing an already borrowed book", () => {
    library.addBook({
      isbn: "9780143127741",
      title: "The Mindset",
      author: "Carol S. Dweck",
      genre: "Self-Help",
      year: 2006,
    });

    const firstBorrow = library.borrowBook("9780143127741");
    expect(firstBorrow).toBe(true);

    const secondBorrow = library.borrowBook("9780143127741");
    expect(secondBorrow).toBe(false); // Cannot borrow the same book twice
  });

  /* ==============================
   * Section 3: RETURNING Books
   * ============================== */

  it("should not return a book that hasn't been borrowed", () => {
    library.addBook({
      isbn: "9780593080005",
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      year: 2018,
    });

    const returned = library.returnBook("9780593080005");
    expect(returned).toBe(false); // Cannot return a book that hasn't been borrowed
  });

  it("should return false when trying to return a non-existent book", () => {
    const returned = library.returnBook("9780143127742");
    expect(returned).toBe(false); // Book doesn't exist in the library
  });

  it("should return a borrowed book and change its availability", () => {
    library.addBook({
      isbn: "9780143127741",
      title: "The Mindset",
      author: "Carol S. Dweck",
      genre: "Self-Help",
      year: 2006,
    });

    const borrow = library.borrowBook("9780143127741");
    expect(borrow).toBe(true);

    let availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(0); // Book is no longer available after borrowing

    const returned = library.returnBook("9780143127741");
    expect(returned).toBe(true);

    availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(1); // Book is available again after returning
    expect(availableBooks[0].isbn).toBe("9780143127741");
  });

  /* ==============================
   * Section 4: Viewing Books
   * ============================== */

  it("should allow viewing a list of all available books", () => {
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

    const availableBooks = library.getAvailableBooks();
    expect(availableBooks.length).toBe(2);
    expect(availableBooks[0].title).toBe("The Mindset");
    expect(availableBooks[1].title).toBe("Rich Dad Poor Dad");
  });
});
