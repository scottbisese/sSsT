const express = require('express');

const app = express();
app.set('view engine','ejs');
app.use(express.static('./public'));

app.get('/', (req,res) => {
    res.render('index', {list: [1,2,3,4,5]});
});

app.listen(3000, ()=> console.log('server is listening, Baby'));

