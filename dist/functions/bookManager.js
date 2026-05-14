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
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const PURPLE = '\x1b[34m';
const PINK = '\x1b[35m';
const BLUE = '\x1b[36m';
const RESET = '\x1b[0m';
function addBooks(title, author, publicationYear) {
    const newBook = {
        id: Date.now(),
        title,
        author,
        publicationYear,
    };
    books_1.default.push(newBook);
    console.log(`\n${RED}*** Book added:${RESET} ${YELLOW}"${title}"${RESET} ${BLUE}by ${author} (${publicationYear})${RESET}`);
}
function listBooks() {
    console.log(`\n${PINK}*** ListBooks ***${RESET}`);
    if (books_1.default.length === 0) {
        console.log(`${YELLOW}--- Empty ListBooks... ---${RESET}`);
    }
    else {
        books_1.default.forEach((item, index) => {
            console.log(`${BLUE}${index + 1}.${RESET}  ${YELLOW}${item.title}${RESET} - ${PURPLE}${item.author}${RESET} (${item.publicationYear})`);
        });
    }
}
function searchBook(titles) {
    console.log(`\n${GREEN}*** Search book Title : ${titles ? titles : 'without parameter'}`);
    if (!titles) {
        listBooks();
    }
    else {
        const filterbooks = books_1.default.filter((item) => item.title.toLowerCase().includes(titles.toLowerCase()));
        console.log(`\n${PINK}*** ListBooks ***${RESET}`);
        if (filterbooks.length > 0) {
            filterbooks.forEach((item, index) => {
                console.log(`${BLUE}${index + 1}.${RESET}  ${YELLOW}${item.title}${RESET} - ${PURPLE}${item.author}${RESET} (${item.publicationYear})`);
            });
        }
        else {
            console.log(`${YELLOW}--- Title not found... ---${RESET}`);
        }
    }
}
