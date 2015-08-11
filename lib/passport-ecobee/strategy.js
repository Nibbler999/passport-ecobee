
/**
 * Module dependencies.
 */
var util = require('util'),
    OAuth2Strategy = require('passport-oauth2').Strategy;

/**
 * `Strategy` constructor.
 *
 * The Ecobee authentication strategy authenticates with the Ecobee OAuth server to
 * get an access_token for the Ecobee API
 *
 * Options:
 *   - `clientID`      Ecobee client ID
 *
 * Examples:
 *
 *     passport.use(new EcobeeStrategy({
 *       clientID: ECOBEE_ID
 *     }));
 *
 * @param {Object} options
 * @param {Funciton} verify (optional)
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://api.ecobee.com/authorize';
  options.tokenURL = options.tokenURL || 'https://api.ecobee.com/token';

  options.clientSecret = 'none'; // not used

  options.state = true;

  // Provide access and refresh tokens and expiry info
  verify = verify || function(accessToken, refreshToken, params, profile, done) {
    done(null, { accessToken: accessToken, refreshToken: refreshToken, expires_in: params.expires_in });
  };

  OAuth2Strategy.call(this, options, verify);

  this.name = 'ecobee';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Export Strategy constructor.
 */
module.exports = Strategy;
