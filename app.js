var express                   = require('express'),
    app                       = express(),
    bodyParser                = require('body-parser'),
    flash                     = require('connect-flash');
    mongoose                  = require('mongoose'),
    passport                  = require('passport'),
    localStrategy             = require('passport-local'),
    Campground                = require('./models/campground'),
    Comment                   = require('./models/comment'),
    methodOverride            = require('method-override'),
    User                      = require('./models/user'),
    seedDB                    = require('./seed');

//requiring routes
var commentsRoutes       = require('./routes/comments'),
    campgroundRoutes     = require('./routes/campgrounds'),
    indexRoutes           = require('./routes/index');

var url = process.env.DATABASEURL || 'mongodb://localhost:27017/yelp_camp'
mongoose.connect(url, {useNewUrlParser: true});
// mongoose.connect('mongodb://localhost:27017/yelp_camp', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(flash());
// seedDB(); // seed the database

// PASSPORT CONFIGURATION
//express session
app.use(require('express-session')({
    secret: 'Once again i am doing these',
    resave: false,
    saveUninitilaized: false
}));
app.locals.moment = require('moment');
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});


//routes usage
app.use('/', indexRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comments', commentsRoutes);


//APPLICATION LISTENER
app.listen(process.env.PORT || 3000, function(){
    console.log('The YelpCamp Server Is Now Running!!');
});

