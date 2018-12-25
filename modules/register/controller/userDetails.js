var userSchema = require('../user-schema');

var saveUserDetails = function (user, callback){
    userSchema.create(user).then((response) =>{
            callback(response);
        })
        .catch((err) => {
            callback(err);
        })
}

module.exports = {
	saveUserDetails : saveUserDetails,
};
