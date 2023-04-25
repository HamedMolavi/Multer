const Router = require('express').Router;
const router = Router();
const { Upload } = require('../tools/multer');
const path = require('path')

router.get('/', (_req, res) => res.sendFile(path.join(__dirname, '../views/index.html')))

router.post('/up/*', (req, res) => {
    const upload = Upload.single(req.url.slice(req.url.lastIndexOf('/') + 1));
    upload(req, res, (err) => {
        if (!!err) {
            console.log(err);
            return res.status(500).json({success: false, msg: "Something went wrong!"});
        };
    });
    res.json({success: true, msg: "Uploaded!"});
});

module.exports = router;