'use strict';
var bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email address format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args:[5, 32],
          msg: 'Invalid password. Between 5 and 32 characters.'
        }
      }
    },
    dob: DataTypes.DATE,
    locationcity: DataTypes.STRING,
    locationstate: DataTypes.STRING
  }, {
    hooks: {
       beforeCreate: function(pendingUser, options){
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
    },

    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.user.hasMany(models.stat);
      }
    }
  });
// user.associate = function(models){
//   models.user.hasMany(models.stat);
// }

  user.prototype.isValidPassword = function(passwordTyped){
   return bcrypt.compareSync(passwordTyped, this.password);
  }

  user.prototype.toJSON = function(){
    var user = this.get();
    delete user.password;
    return user;
  }
  return user;
};