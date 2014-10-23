// JavaScript source code

var os = require('os');

var message = 'Here is some info about the system';

var sysarray = new Array('Type:'+os.type(),
                                'Node version : ' +process.version,
                                'platform : ' +os.platform(),
                                'Hostname : ' +os.hostname(),        
                                'Total Memory : ' +os.totalmem(),
                                'Free Memory : ' +os.freemem(),
                                'uptime : ' +os.uptime()
    );

console.log(message);

var arraylen = sysarray.length;

i = 0;

while (i < arraylen) {
    console.log(sysarray[i]);
    i++;
}
