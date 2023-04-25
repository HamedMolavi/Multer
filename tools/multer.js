const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    filename: function (req, file, cb) {
        const postFix = file.originalname.slice(file.originalname.lastIndexOf('.'));
        let filename = parseInt(Date.now() + Math.random() * 1E10)
        cb(null, String(filename) + postFix);
    },
    destination: function (req, file, cb) {
        const destPath = req.url.replace('up', 'uploads') + '/';
        cb(null, path.join(__dirname, '../', destPath));
    },
});

module.exports = {
    Upload: multer({ storage: storage }),

};