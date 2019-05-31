// need to download the path package



var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("../html/tables.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/tables.html"));
  });

  app.get("../html/reserve.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/reserve.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../html/reserve.html"));
  });
};