var userDetails = require('../../modules/register/controller/userDetails');

var signUp =  function (req, res){
    var body = req.body;
    return new Promise(function(resolve, reject){
        userDetails.saveUserDetails(body, function(data){
            res.send({'registeredUser': data})
            resolve(data);
        });
    })
}

module.exports = {
    signUp: signUp
}
