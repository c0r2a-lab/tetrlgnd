const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    userid: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    account_created: {
        type: Date,
        default: Date.now
    },
    ip_address: [
        {
            address: {
                type: String,
            },
            auth_date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    ex_passwords: [
        {
            password: {
                type: String,
            },
            update_date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    avatar: {
      type: String
    },
  });

module.exports = mongoose.model('user', UserSchema);