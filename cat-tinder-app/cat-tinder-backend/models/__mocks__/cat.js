'use strict'
var SequelizeMock = require('sequelize-mock');
var dbMock = new SequelizeMock();

module.exports = function(sequelize, DataTypes){
    return dbMock.define('Cat', {
        name:'Callaghan',
        age:3,
        location:'Ireland',
        hobby:'Juggling ducks',
        dislikes:'Water, Jake, the English',
        quote:'Live fast, die young',
        lookingFor:'A good time and a pint of guiness'
    })
}
