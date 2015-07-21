/**
* Player.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id        : { type: 'integer', unique: true, primaryKey: true, required: true },
    teamname  : { type: 'string' },
    teams     : { collection: 'team', via: 'players' },
    score     : { type: 'double' }
    //activity  : { type: 'activity' },
    //history   : { collection: 'activity' }
  }
};
