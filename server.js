const express = require('express');
const app = express();

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'https')
        res.redirect('http://' + req.hostname + req.url);
    else 
        next();
});

app.use(express.static('public'));
app.listen(process.env.PORT || 8080, () => console.log("Everything OK"));