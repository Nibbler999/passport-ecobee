# Passport Ecobee Strategy

Strategy to authenticate with Ecobee via OAuth2 in Passport

For more details, read the Ecobee developer docs at https://www.ecobee.com/home/developer/api/documentation/v1/auth/auth-intro.shtml

## Installation

`$ npm install passport-ecobee`

## Usage

Assuming an [express](http://expressjs.com/) app:

    var EcobeeStrategy = require('passport-ecobee').Strategy;

    passport.use(new EcobeeStrategy({
      clientID: ECOBEE_ID,
      callbackURL: 'https://example.com/auth/ecobee/callback'
    }));

    app.get('/auth/ecobee', passport.authenticate('ecobee'));
    app.get('/auth/ecobee/callback',
        passport.authenticate('ecobee', { }),
        function(req, res) {
          // access token is in req.user.accessToken
          // refresh token is in req.user.refreshToken
          // expires in req.user.expires_in seconds
        }
       );

## License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
