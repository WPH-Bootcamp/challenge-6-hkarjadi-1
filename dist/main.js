"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
const bookManager_1 = require("./functions/bookManager");
const GREEN = '\x1b[32m';
const BLUE = '\x1b[36m';
const RESET = '\x1b[0m';
console.log(`\n${GREEN}=====================================${RESET}`);
console.log(`${BLUE}mBook Management Application - Week 6${RESET}`);
console.log(`${GREEN}=====================================${RESET}`);
// Mulai pengujian di bawah ini :
// Display all books but the Books not yet added -- still empty list
console.log(`\n${GREEN}Display all Books : - still empty list - ${RESET}`);
(0, bookManager_1.listBooks)();
// Add some Books
console.log(`\n${GREEN}Adding some Books :${RESET}`);
(0, bookManager_1.addBooks)('Kebaikan itu keren', 'Hendrawan', 2023);
(0, bookManager_1.addBooks)('Mastering Software Engineer', 'Henry Rivardo', 2026);
(0, bookManager_1.addBooks)('Step by Step Tutorial for React', 'Vincent Guizot', 2024);
(0, bookManager_1.addBooks)('Mastering HTML and CSS', 'Dicky Sitepu', 2022);
(0, bookManager_1.addBooks)('Frontend Web-developer', 'WPH-Academy', 2019);
(0, bookManager_1.addBooks)('Autocad: Teori, Tutorial, dan Training', 'Andi Khrisbianto', 2009);
// Display all books
console.log(`\n${GREEN}Display all Books :${RESET}`);
(0, bookManager_1.listBooks)();
// Search books by Title =
// Search books without parameter
(0, bookManager_1.searchBook)();
// Search books which have word 'tutorial'
(0, bookManager_1.searchBook)('tutorial');
// Search books which have word 'master'
(0, bookManager_1.searchBook)('master');
// Search books which have word 'xxx' --- not found
(0, bookManager_1.searchBook)('xxx');
// Finish
