const utils = require('../lib/hashUtils');
const Model = require('./model');
const crypto = require('crypto');
const Promise = require('bluebird');


// Write you user database model methods here
class Users extends Model {
  constructor() {
    super('users');
  }

  create(options) {
    options.password = utils.hashPassword(options.password);
    console.log('hashPassword----', options.password);
    return super.create.call(this, options);
  }
}


module.exports = new Users();
