# multer
Using multer helps programmers to handle media files. Ofcourse you will understand features of this powerful tool better by reading the <a src="https://www.npmjs.com/package/multer">document</a>.

When a request from a client comes along with a file inside its data, we should go through two steps.
1. Save the file in a directory named *upload*.
2. Save the filename to your DB so you could access it later.
## Structure
1. Storages: called every time an upload is going to happen.
2. Multer instance: has some functions, each of which used for a particular upload manner and eventualy they return a middleware to be called.
## Notes
- *file* typed inputs must come first in form structures.
- 