var http = require("http") //Required? Why I dunno, Never understood why we always have to ask for simple functionalities to be included, 
                            //what else will I do without it?


http.createServer(function (req, res){ //Seems to be the basic syntax for running the server
    res.writeHead(200, {'Content-type':'text/html'})
    console.log('Hello World')
    res.write('Hello World'); //Simple stuff running
    res.write(req.url)
    res.end();
}).listen(8080) //We're listening on this port

