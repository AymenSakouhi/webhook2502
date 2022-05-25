'use strict';
// Module Dependencies
// -------------------
var express     = require('express');
var bodyParser  = require('body-parser');
var errorhandler = require('errorhandler');
var http        = require('http');
var path        = require('path');
var request     = require('request');
var routes      = require('./routes');
var activity    = require('./routes/activity');

console.log( 'Call app.js' );

//updating config.json to use environment variables during run time
const fs = require('fs');
const fileName = './public/config.json';
const file = require(fileName);

if (file && file.arguments && file.arguments.execute){
  console.info(`Set arguments.execute.url in config.json to=${process.env.APP_URL}/journeybuilder/execute`); 
  file.arguments.execute.url = `${process.env.APP_URL}/journeybuilder/execute`;
}
    

if (file && file.configurationArguments && file.configurationArguments.save){
  console.info(`Set configurationArguments.save.url=${file.configurationArguments.save.url} in config.json to=${process.env.APP_URL}/journeybuilder/save`); 
  file.configurationArguments.save.url = `${process.env.APP_URL}/journeybuilder/save`;
}    
if (file && file.configurationArguments && file.configurationArguments.publish){
  console.info(`Set configurationArguments.publish.url=${file.configurationArguments.publish.url} in config.json to=${process.env.APP_URL}/journeybuilder/publish`); 
  file.configurationArguments.publish.url = `${process.env.APP_URL}/journeybuilder/publish`;
}
if (file && file.configurationArguments && file.configurationArguments.stop){
  console.info(`Set configurationArguments.stop.url=${file.configurationArguments.stop.url} in config.json to=${process.env.APP_URL}/journeybuilder/stop`); 
  file.configurationArguments.stop.url = `${process.env.APP_URL}/journeybuilder/stop`;
}
if (file && file.configurationArguments && file.configurationArguments.validate){
  console.info(`Set configurationArguments.validate.url=${file.configurationArguments.validate.url} in config.json to=${process.env.APP_URL}/journeybuilder/validate`); 
  file.configurationArguments.validate.url = `${process.env.APP_URL}/journeybuilder/validate`;
}

fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
    if (err)
        return console.log(err);
    console.log('updated config.json');
});


var app = express();

// Configure Express
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.raw({type: 'application/jwt'}));
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.methodOverride());
//app.use(express.favicon());

app.use(express.static(path.join(__dirname, 'public')));

// Express in Development Mode
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

// HubExchange Routes
app.get('/', routes.index );
app.post('/login', routes.login );
app.post('/logout', routes.logout );

// Custom Hello World Activity Routes
app.post('/journeybuilder/save/', activity.save );
app.post('/journeybuilder/validate/', activity.validate );
app.post('/journeybuilder/publish/', activity.publish );
app.post('/journeybuilder/execute/', activity.execute );

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});