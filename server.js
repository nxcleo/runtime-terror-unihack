const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 443;

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'ssl/privkey1.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert1.pem'))
};

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });
    
} else {
    const app = express();

    app.set("view engine","ejs");
  
    // Priority serve any static files.
    let allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Headers', "*");
        next();
    };
    app.use(cors({origin: '*'}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.resolve(__dirname, 'client/build')));
  
    // All remaining requests return the React app, so it can handle routing.
    app.get('*', function(request, response) {
      response.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
    });
  
    // app.listen(PORT, function () {
    //   console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
    // });

    var server = https.createServer(options, app).listen(PORT, function(){
        console.log("Express server listening on port " + PORT);
    });
}