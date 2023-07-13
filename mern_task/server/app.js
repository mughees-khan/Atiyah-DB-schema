let express = require('express');
let bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
let app = express();
let {mongoose}=require("./db/config")
require('dotenv').config()
let authenticateToken = require('./middleware/auth')
let isUser = require('./middleware/auth')

app.use(cookieParser());
var cors = require('cors')
app.use(cors({

  origin: 'http://localhost:5000', 
  credentials: true,

    }
))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



const SignUpRoute = require("./routes/SignUpRoute");
const LoginRoute = require("./routes/LoginRoute");
const HomeRoute = require('./routes/HomeRoute')


app.use('/signup', SignUpRoute);
app.use('/login',LoginRoute);
app.use('/' ,authenticateToken,HomeRoute);


  // PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})
