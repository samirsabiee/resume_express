const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')
const messages = require('../services/messages')

const User = require('../models/user')

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({usernameField: 'mobile'}, async (mobile, password, done) => {
            try {
                const user = await User.findOne(mobile)
                if (user === null) return done(null, false, {message: messages.notExistUser})
                const isValidPass = bcrypt.compareSync(password, user.password)
                if (isValidPass) return done(null, user)
                return done(null, false, {message: messages.incorrectPassword})
            } catch (e) {
                return done(null, false, {message: e.message});
            }
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(async function (id, done) {
        try {
            const user = await User.findById(id)
            done(null, user);
        } catch (e) {
            done(e, null);
        }
    });
};
