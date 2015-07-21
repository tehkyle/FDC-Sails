/**
* League.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id          : { type: 'integer', unique: true, primaryKey: true, required: true },
    leaguename  : { type: 'string' },
    manager     : { type: 'user', required: true },
    teams       : { collection: 'team',  via: 'league' }
    //matches     : {collection: 'matches', via: 'league' }
  }
};
