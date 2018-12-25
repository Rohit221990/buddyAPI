var userRegiserService = require('./services/register/signUp')

function setup(app){
    app.post('/api/users', userRegiserService.signUp);
};

module.exports = {setup : setup};
