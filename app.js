var contentstack = require("contentstack-express"),
    app = contentstack(),
    config = contentstack.config,
    server = config.get("server"),
    environment = config.get("environment"),
    port = process.env.PORT || config.get("port");

const basicAuth = require('basic-auth-connect');
app.use(basicAuth('demo', 'demo1234'));
 
/**
* start the application
*/

app.listen(port, function() {
    console.log("Server(%s) is running on '%s' environment over %d port", server, environment, port);
});