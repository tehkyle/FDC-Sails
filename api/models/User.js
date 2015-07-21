var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'passport', via: 'user' },
    teams     : { collection: 'team', via: 'owner' }
  }
};

module.exports = User;
