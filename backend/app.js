const { json } = require('express');
var express = require('express');
const connectDB = require('./config/db');
var app = express();
const cors = require('cors');

const UserRoutes = require('./Routes/UserRoutes')
const ContactRoutes = require('./Routes/ContactRoutes')
const adminRoutes = require('./Routes/AdminRoutes')
const orderroutes = require('./Routes/Orderroutes')
const RewviewRoutes = require('./Routes/ReviewRoutes')
const Pay = require('./Routes/Pay')

connectDB()

app.use(express.json())
 //for accesing daat from frontend in json
app.use(cors())


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api/user", UserRoutes)
app.use("/api/contact",ContactRoutes)
app.use("/api/products",adminRoutes)
app.use("/api/order",orderroutes)
app.use("/api/review",RewviewRoutes)
app.use("/api/payment",Pay)





app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(5000, function () {
  console.log('app listening on port 5000!');
});