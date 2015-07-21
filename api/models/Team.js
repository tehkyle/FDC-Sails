/**
* Team.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,

  attributes: {
    id        : { type: 'integer', unique: true, primaryKey: true, required: true },
    teamname  : { type: 'string' },
    owner     : { type: 'user',  unique: false, required: true },
    league    : { type: 'league', required: true },
    players   : { collection: 'player', via: 'teams' },
    division  : { type: 'string' }
  }
};
