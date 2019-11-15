const express = require('express');
const router = express.Router();

const Book = require('../models/book.model')





// Lista de libros
router.get('/', (req, res) => {
  Book.find()
    .then(allTheBooks => res.render('books/booksList', { books: allTheBooks }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


// Detalles de libro
router.get('/details/:id', (req, res) => {
  const bookId = req.params.id
  Book.findById(bookId)
    .then(theBook => res.render('books/bookDetails', { book: theBook }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


// Nuevo libro: renderizar formulario
router.get('/add', (req, res) => res.render('books/newBook'))

// Nuevo libro: enviar formulario
router.post('/add', (req, res) => {

  /*
  const title = req.body.title
  const author = req.body.author
  const description = req.body.description
  const rating = req.body.rating
  */

  const { title, author, description, rating } = req.body

  Book.create({ title, author, description, rating })
    .then(x => res.redirect('/books'))
    .catch(err => 'error: ' + err)
})





// Editar libro: renderizar formulario
router.get('/edit', (req, res) => {
  const bookId = req.query.bookId
  Book.findById(bookId)
    .then(theBook => res.render('books/editBook', theBook))
    .catch(err => console.log('error!!', err))
})


// Editar libro: enviar formulario
router.post('/edit', (req, res) => {
  const { title, author, description, rating } = req.body
  const bookId = req.query.bookId


  Book.findByIdAndUpdate(bookId, { title, author, description, rating })
    .then(res.redirect('/books'))
    .catch(err => console.log('error!!', err))

})




module.exports = router;