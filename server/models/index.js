var db = require('../db');

module.exports = {
  messages: {
    get: (callback) => {
      db.query('SELECT * FROM messages', (err, results) => {
        if(err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
    }, // a function which produces all the messages
    post: (message, roomname, username) => {
      db.query(`INSERT INTO messages(id, message, roomname, username) VALUES('${message}', '${roomname}', '${username})'`);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: (callback) => {
      db.query('SELECT * FROM users', (err, results) => {
        if(err) {
          callback(err);
        } else {
          callback(null, results);
        }
      })
    },
    post: (username) => {
      db.query(`INSERT INTO users(username) VALUES('${username}'`);
    }
  }
};


