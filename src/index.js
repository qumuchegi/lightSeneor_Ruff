'use strict';
var websocket = require('ws')
var ws = websocket('ws://chegi.xyz:80')
$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    setInterval(get,250);
    function get(){
        $('#lightSensor').getIlluminance(
            
            
            function (error, value) {
            if (error) {
                console.error(error);
                return;
            }
            
            console.log('illuminance', value);
            ws.send(JSON.stringify({light:value}))
         });
    
    }
});

$.end(function () {
    $('#led-r').turnOff();
});
