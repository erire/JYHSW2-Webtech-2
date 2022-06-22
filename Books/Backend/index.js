let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
}).then(() => {
    console.log('Database sucessfully connected ')
  },
  error => {
    console.log('Database error: ' + error)
  }
)
 
const bookRoute = require('./routes/book.routes')
const authorRoute = require('./routes/author.routes')
const userRoutes = require("./routes/user.routes");
 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());


 
app.use('/api', bookRoute)
app.use('/api_author', authorRoute)
app.use("/api_user", userRoutes);

const port = process.env.PORT || 8000;
 
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
 
app.use((req, res, next) => {
  next(createError(404));
});
 
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

 
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});