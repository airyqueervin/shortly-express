const utils = require('../lib/hashUtils');
const Model = require('./model');
const crypto = require('crypto');
const Promise = require('bluebird');
const request = Promise.promisify(require('request'), { multiArgs: true });


// Write you user database model methods here
class User extends Model {
  constructor(){
    super('user');
    this.username = '';
    this.password = '';
  }

  isUserValid(user) {
    //check if user exists in database
  }

  create(user, password) {
    this.username = user;
    this.password = utils.hashPassword(password);
    //create user object, set the user to the user name, 
    //hash the password, set the password to the password
  }


}

module.exports = new Model('user');
