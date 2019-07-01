#YelpCamp

*Add Landing Page *Add Campgrounds Page

cg contains *name *image

2 *create header and footer partials *add in bootstrap

3 Creating new cg *setup new cg post route *add in body-parser *setup route to show form *add basic unstyled form

4 *Add a better header/title *Make Campgrounds display in a grid

5 *Add a navbar to all templates *Style New Campground Form

6 *install and configure mongoose *setup cg model *use cg model inside routes mongod --port 27017 --dbpath "C:\MongoDB\data\db" add after locating mongo db

7 *review restful routes *add description to our cg model *show db.collection.drop() *add a show template

RESTFUL ROUTES ----it is a mapping between HTTP routes and Crud name url verb desc.
INDEX /dogs GET Display a list of all dogs NEW /dogs/new GET Displays form to create new route| CREATE /dogs POST Add new dog to | SHOW /dogs/:id GET Shows info about a dog EDIT /dogs/:id/edit GET Show edit form for Dog| UPDATE /dogs/:id PUT update a dog and redir| Destroy /dogs/:id DELETE felete a particular dog then redirect

CREATE READ /allblogs UPDATE /updateblog/:id DESTROY /destroyblog/:id

9.REfactor mongoose code *Create a models directory *use modules.exports *require all correctly

10 *add seeds.js file *run it every time server starts

11 *make errors go *display commments on cg show page

12 *nested routes NEW /campgrounds/:id/comments/new GET *add comment new and create routes CREATE /campgrounds/:id/comments POST *add new comment form

13 *add sidebar to show page *display comments nicely

14 *add public directory *add custom style sheet

15 auth pt 1 - add user model *install all packages for auth *define user model

16 auth part 2 - Register *Configure Passport *add register routes *add register templates

17 auth pt 3 -Login *Add login routes *Add login templates

18 auth pt4 - Logout/Navbar *add Logout route *prevent User adding comment if not signed in *add links to navbar *show/hide auth links correctly

19 auth pt 5 = show/hide links navbar hides links well

20 refactoring routes

using express router to recognize routes
21 users + comments *associate users and comments *save authors name to comment automatically

22 users + campgrounds *prevent an unauthenticated user from creating a new campground *save username + id to newly created campground

23updating cg add method override add edit route add link to edit page add update route

24deleting cg *add destroy route *add delete button

25authorization *user can only edit his cg *user can only delete his cg *hide/show edit and delete buttons

28 editing comments *add edit route for comments *add edit button *add update route

/campgrounds/:id/edit /campgrounds/:id/comment/comment_id/edit

29 deleting comments *add destroy route *add delete button

cg destroy route: cg/:id comment destroy route: cg/:id/comments/:comment_id

30 authorization part2 *user can only edit his her comments *............ delete his/her comments *hide/ show edit and delete buttons *refactor middleware

31adding flash *demo working version *install and configur connect-flash *add bootstrap alerts to header
