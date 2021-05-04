const express = require('express');
const router = require('./config/routes');
const expressLayouts = require('express-ejs-layouts');
const sass = require('node-sass-middleware');
const app = express();

//sass
app.use(sass({
  src: __dirname + '/public/scss',
  dest: __dirname + '/public/css',
  debug: true,
  outputStyle: 'compressed',
  prefix: '/css'
}));

//css
app.use('/css',[
  express.static(__dirname + '/public/css')
])

//bootstrap
app.use('/js', [
  express.static(__dirname + '/public/js'),
  express.static(__dirname + '/node_modules/jquery/dist/'),
  express.static(__dirname + '/node_modules/popper.js/dist/umd/'),
  express.static(__dirname + '/node_modules/bootstrap/dist/js/'),
  
]);


//views
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', __dirname + '/app/views');
app.use(router);

app.listen(4444, function(){
  console.log("Rodando na porta 4444")
})