const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  description: { type: String },
  author: [{ type: Schema.Types.ObjectId, ref: 'Author' }],   // Referenciar un documento a través de 'ref', con el nombre del modelo a referenciar como valor
  rating: Number
}, {
  timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;