const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // tell passport to look for email instead of username
	},
	function (username, password, done) {
		db.User.findOne({ 'email': username }, (err, user) => {
			if (err) { return done(err); }
			if (!user) { return done(null, false); }
			if (!bcrypt.compareSync(password, user.password)) { return done(null, false); }
			return done(null, user);
		});
	}
);

module.exports = strategy;
