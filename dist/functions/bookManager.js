"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBooks = addBooks;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
const books_1 = __importDefault(require("../data/books"));
function addBooks(title, author, publicationYear) {
    const newBook = {
        id: Date.now(),
        title,
        author,
        publicationYear,
    };
    books_1.default.push(newBook);
    console.log(`\n\x1b[31m*** Book added:\x1b[0m \x1b[33m"${title}"\x1b[0m \x1b[36mby ${author} (${publicationYear})\x1b[0m`);
}
function listBooks() {
    console.log('\n\x1b[35m*** ListBooks ***\x1b[0m');
    if (books_1.default.length === 0) {
        console.log('\x1b[33m--- Empty ListBooks... ---\x1b[0m');
    }
    else {
        books_1.default.forEach((item, index) => {
            console.log(`\x1b[36m${index + 1}.\x1b[0m  \x1b[33m${item.title}\x1b[0m - \x1b[34m${item.author}\x1b[0m (${item.publicationYear})`);
        });
    }
}
function searchBook(titles) {
    console.log(`\n\x1b[32m*** Search book Title : ${titles ? titles : 'without parameter'}`);
    if (!titles) {
        listBooks();
    }
    else {
        const filterbooks = books_1.default.filter((item) => item.title.toLowerCase().includes(titles.toLowerCase()));
        console.log('\n\x1b[35m*** ListBooks ***\x1b[0m');
        if (filterbooks.length > 0) {
            filterbooks.forEach((item, index) => {
                console.log(`\x1b[36m${index + 1}.\x1b[0m  \x1b[33m${item.title}\x1b[0m - \x1b[34m${item.author}\x1b[0m (${item.publicationYear})`);
            });
        }
        else {
            console.log('\x1b[33m--- Title not found... ---\x1b[0m');
        }
    }
}
