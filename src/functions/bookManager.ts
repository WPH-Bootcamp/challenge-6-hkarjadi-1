// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

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

import books from '../data/books';
import Book from '../types/index';

function addBooks(
  title: string,
  author: string,
  publicationYear: number
): void {
  const newBook: Book = {
    id: Date.now(),
    title,
    author,
    publicationYear,
  };
  books.push(newBook);
  console.log(
    `\n\x1b[31m*** Book added:\x1b[0m \x1b[33m"${title}"\x1b[0m \x1b[36mby ${author} (${publicationYear})\x1b[0m`
  );
}

function listBooks(): void {
  console.log('\n\x1b[35m*** ListBooks ***\x1b[0m');
  if (books.length === 0) {
    console.log('\x1b[33m--- Empty ListBooks... ---\x1b[0m');
  } else {
    books.forEach((item, index) => {
      console.log(
        `\x1b[36m${index + 1}.\x1b[0m  \x1b[33m${item.title}\x1b[0m - \x1b[34m${
          item.author
        }\x1b[0m (${item.publicationYear})`
      );
    });
  }
}

function searchBook(titles?: string): void {
  console.log(
    `\n\x1b[32m*** Search book Title : ${titles ? titles : 'without parameter'}`
  );
  if (!titles) {
    listBooks();
  } else {
    const filterbooks: Book[] = books.filter((item) =>
      item.title.toLowerCase().includes(titles.toLowerCase())
    );
    console.log('\n\x1b[35m*** ListBooks ***\x1b[0m');
    if (filterbooks.length > 0) {
      filterbooks.forEach((item, index) => {
        console.log(
          `\x1b[36m${index + 1}.\x1b[0m  \x1b[33m${
            item.title
          }\x1b[0m - \x1b[34m${item.author}\x1b[0m (${item.publicationYear})`
        );
      });
    } else {
      console.log('\x1b[33m--- Title not found... ---\x1b[0m');
    }
  }
}

export { addBooks, listBooks, searchBook };
