// \_\_dirname is not defined in ES module scope

// EXAMPLE 1 - Use the `dirname` method from the `path` module

import path from 'path';
import {fileURLToPath} from 'url';

// 👇️ "/home/borislav/Desktop/javascript/index.js"
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

// 👇️ "/home/borislav/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

// 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
console.log(path.join(__dirname, '/dist', 'index.html'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Create a reusable function that returns the `__dirname` and `__filename`

// import path from 'path';
// import {fileURLToPath} from 'url';

// export function getFilename(metaUrl) {
//   const __filename = fileURLToPath(metaUrl);

//   return __filename;
// }

// export function getDirname(metaUrl) {
//   const __dirname = path.dirname(getFilename(metaUrl));

//   return __dirname;
// }

// const __filename = getFilename(import.meta.url);

// // 👇️ /home/borislav/Desktop/index.js
// console.log(__filename);

// const __dirname = getDirname(import.meta.url);

// // 👇️ /home/borislav/Desktop
// console.log(__dirname);

// ------------------------------------------------------------------

// // ReferenceError: path is not defined in JavaScript

// // EXAMPLE 3 - Import path before using it

// import path from 'path';

// // 👇️ "/dist/index.html"
// console.log(path.join('/dist', 'index.html'));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Getting a directory name using the ES6 modules syntax

// import path from 'path';
// import {fileURLToPath} from 'url';

// const filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(filename);
// // 👇️ "/home/john/Desktop/javascript"
// console.log('directory-name️', __dirname);

// // 👇️ "/home/john/Desktop/javascript/dist/index.html"
// console.log(path.join(__dirname, '/dist', 'index.html'));
