var path = require('path')

//Routes
module.exports = function(app) {
    app.get("/", function(req,res){
        //UPDATE fix path based on new location
        res.sendFile(path.join(__dirname, '/app/public/home.html'));
    })

    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname, '/app/public/survey.html'));
    })
}