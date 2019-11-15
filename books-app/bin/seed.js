const mongoose = require('mongoose');
const Book = require('../models/book.model');

const dbName = 'books-app-webmad1019';
mongoose.connect(`mongodb://localhost/${dbName}`);

const books = [
  {
    title: "Los juegos de Node",
    description: "Un estudiante se deja el ordenador abierto y le instalan más de 2000 dependencias.",
    author: "Teo TA",
    rating: 10
  },
  {
    title: "Marta Potter y El Bootstrap Filosofal",
    description: "4horas de charla con Marta sobre beneficios y contras sobre el Bootstrap.",
    author: "Marta TA",
    rating: 9
  },
  {
    title: "Los divs son gratis.",
    description: "Ensayo sobre el uso correcto del div.",
    author: "Sito TA (del otro)",
    rating: 8
  },
  {
    title: "Enruto y Perjuicio",
    description: "Thriller apasionante sobre una web en la que ningun endpoint es lo que parece.",
    author: "María Pelaez TA",
    rating: 9
  },
  {
    title: "5 HORA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Stephenie Meyer ",
    rating: 10
  },
  {
    title: "The Book Thief ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Markus Zusak",
    rating: 7
  },
  {
    title: "The Chronicles of Narnia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "C.S. Lewis",
    rating: 8
  },
  {
    title: "Animal Farm",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "George Orwell",
    rating: 9
  },
  {
    title: "Gone with the Wind ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Margaret Mitchell",
    rating: 10
  },
  {
    title: "The Fault in Our Stars ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "John Green",
    rating: 8
  }
]

Book.create(books, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${books.length} books`)
  mongoose.connection.close();
});