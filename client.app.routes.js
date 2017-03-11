module.exports = function(app) {

  // frontend routes
  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist');
  });

};  

