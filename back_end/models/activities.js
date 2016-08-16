module.exports = function(sequelize, DataTypes) {
    return sequelize.define('activities', {
        personalText: {
            type: DataTypes.STRING
        },
        professionalText: {
            type: DataTypes.STRING
        },
        otherText: {
            type: DataTypes.STRING
        }
    });
};