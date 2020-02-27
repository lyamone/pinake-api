var express = require('express');
var app = express();
require("./routes");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   // Pass to next layer of middleware
   next();
});

app.get('/', function (req, res) {
 res.send(200, 'OK');
});

app.get("/course", function(req, res){
  const course = {
      id: 1,
      name: 'Curso k1071',
      description: 'Matematica Discreta',
      subscriptors: [
        {
          image:'',
          name: 'Lucas',
          lastname: 'Yamone',
          degree: 'Ingenieria en sistemas de informacion',
          university: 'UTN'
        }
      ],
      private: false,
      messagges: [],
      university: 'UTN'
    };
    res.json(course);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
