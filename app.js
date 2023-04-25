const express = require('express')
const indexRouter = require('./routes/index');



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((req, _res, next) => {
    console.log(`${req.method} - ${req.url} - ${JSON.stringify(req.body)}`);
    next()
})
app.use('/', indexRouter);


app.listen(3000, () => console.log('\n\nUp with port 3000\n\n'))