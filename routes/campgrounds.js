var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');
var middleware = require('../middleware');


// INDEX - show all campgrounds
router.get('/', function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render('campgrounds/index', {campgrounds: allcampgrounds, page: 'campgrounds'});
        }
    });       
});

// NEW - show form to create new campground 
router.get('/new', middleware.isLoggedIn, function(req, res){
    res.render('campgrounds/new');
});

// create route
router.post('/', middleware.isLoggedIn, function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var price = req.body.price;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description: desc, author: author};
    // Create a new campground and save to DB
    Campground.create(newCampground , function(err, newlyCreated){
        if(err) {
            console.log(err);
        } else {
            console.log('NEW CAMPGROUND CREATED..');
            //redirect back to campgrounds page
            res.redirect('/campgrounds');            
        }
    });
    
});

// SHOW ROUTE
router.get('/:id', function(req, res){
    //find campground with id
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render the show template with that campground
            res.render('campgrounds/show', {campground: foundCampground})
        }
    });
});


//EDIT CAMPGROUND ROUTE
router.get('/:id/edit', middleware.checkCampgroundOwnership, function(req, res){
        Campground.findById(req.params.id, function(err, foundCampground){
            res.render('campgrounds/edit', {campground: foundCampground});
        }); 
});

// UPDATE CAMPGROUND ROUTE

router.put('/:id', middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect('/');
        } else {
             // redirect somewhere(show page)
            res.redirect('/campgrounds/' + req.params.id);
        }
    } );
   
});

// DESTROY CAMPGROUND ROUTE

router.delete('/:id', middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err, deletedCampground){
        if(err){
            res.redirect('/campgrounds');
        } else {
            res.redirect('/campgrounds');
        }
    });
});

//middleware





module.exports = router;