module.exports = function(app){
    app.post("/api/email", function(req,res){
        var userData = req.body;
        console.log("userdata",  userData);

        var name = req.body.name;
        var email = req.body.email;
        var subject = req.body.subject;
        var message = req.body.message;

       var link = "mailto:phillip-chang@live.com"
       + `?subject=${subject,name}`
       +`&body=${message}`
       +`&cc=${email}`;

       res.send(window.location.href = link);
    });
}