const jsonwebtoken = {};
const jwt = require("jsonwebtoken");

// const authServer = require("./auth-server");

// /**
//  * Generate Identity for particular user.
//  *
//  * @param {string} email
//  * @param {string} userId
//  * @param {boolean} isDiff
//  * @param {Object} userAgent
//  *
//  */

// jsonwebtoken.generateJWT = (email, userId = "", userAgent = {}, isDiff = false) =>
//   new Promise((resolve, reject) => {
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>isDiff", isDiff);
//     authServer.generate("dl", { email, userId, userAgent }, isDiff).then(
//       (response) => {
//         resolve(response.data.token);
//       },
//       (err) => {
//         return reject(err);
//       }
//     );
//   });

// /**
//  * Verify Identity for particular user.
//  *
//  * @param {string} token
//  * @param {boolean} isDiff
//  *
//  */

// jsonwebtoken.validateJWT = (token, isDiff = false) =>
//   new Promise((resolve, reject) => {
//     authServer.verify(token, isDiff).then(
//       (response) => {
//         return resolve(response.data.payload);
//       },
//       (err) => {
//         // console.log(err);
//         reject(err);
//         //express
//       }
//     );
//   });
// module.exports = jsonwebtoken;

/**
 * Generate Identity for particular user.
 *
 * @param {string} expiresIn
 * @param {Object} payload
 *
 */

jsonwebtoken.generateJWT = async (payload, expiresIn) => {
  try {
    payload = Object.assign({ isDiff: false }, payload);
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn });
  } catch (error) {
    console.log(error);
    return false;
  }
};

jsonwebtoken.validateJWT = (token) => {
  let payload = jwt.verify(token, process.env.TOKEN_SECRET);
  if (payload) return payload;
  return false;
};

module.exports = jsonwebtoken;
