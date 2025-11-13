let eventos = require('events');
let EmissorDeEventos= eventos.EventEmitter;
let ee = new EmissorDeEventos();

ee.on('dados', function(fecha){
    console.log(fecha);
});

ee.emit('dados', 'primeira vez'+ Date.now());

setInterval(function(){
     ee.emit('dados', Date.now());
}, 500);