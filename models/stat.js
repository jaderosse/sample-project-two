'use strict';
module.exports = (sequelize, DataTypes) => {
  var stat = sequelize.define('stat', {
    userId: DataTypes.INTEGER,
    hasDrank: DataTypes.INTEGER,
    diff: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.stat.belongsTo(models.user);
      }
    }
  });
//   stat.associate = function(models){
//   models.stat.belongsTo(models.user);
// }
  return stat;
};