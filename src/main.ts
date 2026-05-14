// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

import { addBooks, listBooks, searchBook } from './functions/bookManager';
console.log('\n\x1b[32m=====================================\x1b[0m');
console.log('\x1b[36mBook Management Application - Week 6\x1b[0m');
console.log('\x1b[32m=====================================\x1b[0m');

// Mulai pengujian di bawah ini :

// Display all books but the Books not yet added -- still empty list
console.log('\n\x1b[32mDisplay all Books : - still empty list - \x1b[0m');
listBooks();

// Add some Books
console.log('\n\x1b[32mAdding some Books :\x1b[0m');

addBooks('Kebaikan itu keren', 'Hendrawan', 2023);

addBooks('Mastering Software Engineer', 'Henry Rivardo', 2026);

addBooks('Step by Step Tutorial for React', 'Vincent Guizot', 2024);

addBooks('Mastering HTML and CSS', 'Dicky Sitepu', 2022);

addBooks('Frontend Web-developer', 'WPH-Academy', 2019);

addBooks('Autocad: Teori, Tutorial, dan Training', 'Andi Khrisbianto', 2009);

// Display all books
console.log('\n\x1b[32mDisplay all Books :\x1b[0m');
listBooks();

// Search books by Title

// Search books without parameter
searchBook();

// Search books which have word 'tutorial'
searchBook('tutorial');

// Search books which have word 'master'
searchBook('master');

// Search books which have word 'xxx' --- not found
searchBook('xxx');
