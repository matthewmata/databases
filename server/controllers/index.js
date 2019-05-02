var models = require('../models');

module.exports = {
  messages: {
    get:(req, res) => {
      models.messages.get((err, data) => {
        if (err) {
          res.status(404).send('Failed');
        } else {
          res.status(200).send(data);
        }
      })
    }, // a function which handles a get request for all messages
    post:(req, res) => {
      const { message, roomname, username } = req.body;
      models.messages.post(message, roomname, username, (err, data) => {
        if(err) {
          res.status(404).send('Failed');
        } else {
          res.status(201).send('successfully posted');
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: (req, res) => {
      models.users.get((err, data) => {
        if (err) {
          res.status(404).send('Failed')
        } else {
          res.status(200).send(data);
        }
      })
    },
    post: (req, res) => {
      const { username } = req.body;
      models.users.post(username, (err, data) => {
        if(err) {
          res.status(404).send('Failed');
        } else {
          res.status(201).send('sucessfully posted');
        }
      })
    }
  }
};

