const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(dirname + '/dist/portfolio'));
app.get('/*', function(req,res) {
res.sendFile(path.join(dirname+
'/dist/portfolio/index.html'));});
app.listen(process.env.PORT || 4305);