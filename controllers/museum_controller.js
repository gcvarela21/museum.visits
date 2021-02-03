const express = require('express');

const router = express.Router();

// Import the model (museum.js) to use its database functions.
const muse = require('../models/museum.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    muse.all((data) => {
    const hbsObject = {
      //museums: data, (TABLE NAME: data,) /////
      museums: data,
    };
    console.log(hbsObject);
    //connects to the view folder 
    res.render('index', hbsObject);
  });
});

// api / route name i make up - no relation to table or views
// always have a unique route to we don't always default to home page
router.post('/api/museums', (req, res) => {
     //create() was made in the model/museum.js
    muse.create(['place', 'visited'], [req.body.place, req.body.visited], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
});

router.put('/api/museums/:id', (req, res) => {
  var condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  muse.update({
      visited: req.body.visited
    }, condition, function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

///////////////// api/table name/ id
router.delete('/api/museums/:id', function(req, res) {
  var condition = `id = ${req.params.id}`;

  muse.delete(condition, function(result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
    res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;