var models = require('../models');

module.exports = {
  messages: {
    get:(req, res) => {
      models.messages.get((err, data) => {
        res.status(200).send(data);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

