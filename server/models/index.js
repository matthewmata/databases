var db = require('../db');

module.exports = {
  messages: {
    get: (callback) => {
      db.query('SELECT * FROM messages', (err, data) => {
        if(err) {
          callback(err);
        } else {
          callback(null, data);
        }
      })
    }, // a function which produces all the messages
    post: (message, roomname, username, callback) => {
      db.query(`INSERT INTO messages(message, roomname, username) VALUES('${message}', '${roomname}', '${username}')`, (err, data) => {
        if(err) {
          callback(err);
        } else {
          callback(null, data);
        }
      }
      );
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: (callback) => {
      db.query('SELECT * FROM users', (err, data) => {
        if(err) {
          callback(err);
        } else {
          callback(null, data);
        }
      })
    },
    post: (username, callback) => {
      db.query(`INSERT INTO users(username) VALUES('${username}')`, (err, data) => {
        if(err) {
          console.error(err);
          callback(err);
        } else {
          callback(null, data);
        }
      });
    }
  }
};


