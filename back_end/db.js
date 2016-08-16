var Sequelize = require("sequelize");
var sequelize = new Sequelize(undefined, undefined, undefined, {
   dialect: 'sqlite', 
   storage: __dirname + '/data/dev-activities-api.sqlite'
});

var db = {};
// sequelize.import let us import models so that it'll be modular.
db.activities = sequelize.import(__dirname + '/models/activities.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.todo.belongsTo(db.user);
// db.user.hasMany(db.todo);

module.exports = db;
