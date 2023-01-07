const express = require('express');
const path = require('path');

const app = express();
const port = 3006;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

//app.get('/',function(request, response){
//    response.sendFile(path.join(__dirname, './web', 'index.html'));
//});

app.use(express.static(__dirname + '/web'));
app.use(express.json({ limit: '1mb' }));

