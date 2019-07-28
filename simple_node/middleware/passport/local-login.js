'use strict'
const jwt = require('jsonwebtoken')
const PassportLocalStrategy = require('passport-local').Strategy
const { User } = require('./../../models')

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim().toLowerCase(),
        password: password.trim()
    }

    User.checkLogin(userData.email, userData.password).then(result => {
        const token = jwt.sign({ sub: result.id }, process.env.JWT_SECRET)
        return done(null, token, { name: result.name })
    }).catch(err => {
        return done(err)
    })
})
