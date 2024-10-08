# Library Management System (TDD)

Welcome to my solution for the Library Management Kata! This repository implements a simple **Library Management System** using **TypeScript** and **Test-Driven Development (TDD)**. The system allows users to add, borrow, return, and view books in a library. The goal of this project is to demonstrate clean code practices, high test coverage, and effective use of TypeScript's strong typing.

## Features

- **Add Books:** Users can add new books to the library, including details such as ISBN, title, author, genre, and year.
- **Borrow Books:** Users can borrow available books from the library. The system prevents borrowing of already borrowed books.
- **Return Books:** Users can return borrowed books, which then become available again for borrowing.
- **View Available Books:** Users can view a list of all currently available books in the library.

## Setup Instructions

### Prerequisites

- **NodeJS**: Ensure NodeJS installed on your machine.

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system

2. **Install dependencies:**
   
    ```bash
    npm install
    
3. **Run Tests:**
    ```bash
    npm test
    
## Technologies Used
 -  **TypeScript:** Strongly-typed JavaScript for robust development.
 -  **Jest:** Testing framework used for writing unit tests and test-driven development.
 -  **TDD (Test-Driven Development):** Development approach where tests are written before code implementation to ensure code reliability and correctness.


##  **Project Structure**

    
    ├── coverage/                 # Coverage reports generated by Jest
    ├── node_modules/             # Project dependencies
    ├── tests/                    # All test cases
    │   └── library.test.ts       # Unit tests for the Library Management System
    ├── .gitignore                # Files and folders to be ignored by Git
    ├── jest.config.js            # Jest configuration file
    ├── library.ts                # Core Library Management System implementation
    ├── package.json              # Project metadata and dependencies
    ├── package-lock.json         # Exact dependency versions
    ├── tsconfig.json             # TypeScript configuration file

   

## Test Coverage

The current test coverage of this project is **94.44%** for statements, 100% for branches, 88.88% for functions, and 93.33% for lines.

![Test Coverage Screenshot](https://github.com/Jeeya-Inamdar/Library-management-system/blob/master/tests/Test-coverage-report.png) 
