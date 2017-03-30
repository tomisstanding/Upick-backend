const eventful  = require('eventful-node');

let controller = {};

controller.findEvents = (req, res) => {
  const client = new eventful.Client(process.env.API_KEY);

// Change Brooklyn to req.query.location after it works
  client.searchEvents({
    location: 'Brooklyn',
    within: '1',
    units: 'miles'
  },
  (err, data) => {
    if (err) {
      res.status(400).json({error: err});
    } else {
      res.status(200).json({results: data});
    }
  });
}


module.exports = controller;