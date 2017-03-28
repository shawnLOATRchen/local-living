var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to the database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://myself:5525231@ds133438.mlab.com:33438/mydb');

// create a schema - this is like a blueprint
var feedCellSchema = new mongoose.Schema({
  title: String,
  content: String,
  time: String
});
// create a model type, first Todo is to use in the nodeJS, second Todo is store in the mongoDB
var feedCell = mongoose.model('feedCell', feedCellSchema)

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
  // render index page
  app.get('/', function(req, res){
    feedCell.find({}, function(err, data){
      if (err) throw err;
      res.render('index', {feedCells:data});
    });
  });

  // render post page
  app.get('/post', function(req, res){
    res.render('post');
  });
  app.get('/post-success', function(req, res){
    res.render('post-success');
  });

  // get post data and upload to mongodb
  app.post('/post', urlencodedParser, function(req, res){
    var newPost = feedCell(req.body).save(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });
}
