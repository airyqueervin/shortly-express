const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/
const shasum = crypto.createHash('sha1');

const hashPassword = password => {
  shasum.update(password);
  console.log('HASHED PASSWORD', shasum.digest('hex'));
  return shasum.digest('hex');
}

module.exports.hashPassword = hashPassword;