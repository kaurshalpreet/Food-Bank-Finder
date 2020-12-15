const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

	firstName: { type: String, unique: false, required: true },
    lastName: { type: String, unique: false, required: false },
	email: { type: String, unique: false, required: true },
	password: { type: String, unique: false, required: false },
	name: {type: Array, unique: false, required: false},
	link: {type: Array, unique: false, required: false},
	address: {type: Array, unique: false, required: false},
	city: {type: Array, unique: false, required: false},
	hours: {type: Array, unique: false, required: false},
})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User