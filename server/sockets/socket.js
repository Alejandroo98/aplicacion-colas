const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control')
const data = require('../data/data.json')
const ticketControl = new TicketControl(); //Esto lo que hace es activar o poner en marcha a la clase que esta en el archivo ticket-control

io.on('connection', (client) => {

  client.on('siguieteTicket' , ( data , callback ) => {

    let siguiente = ticketControl.siguiente()
      
      // console.log( siguiente );
      callback(siguiente);
  })

  client.emit('estadoActual' , {

    actual : ticketControl.getUltimoTicket(),
    ultimosCuatro : ticketControl.getUltimosCuatro()
    
  });

  client.on('atenderTicket' , ( data , callback ) => {

    if( !data.escritorio ){

      return callback({
        err : true,
        msg : 'El escritorio es necesario'
      })
      
    };

    let atenderTicket = ticketControl.atenderTicket( data.escritorio );

    callback( atenderTicket )

    //actualizar / notificar cambios en los ultimosCuatro
    // emitir ultimos cuatro
    client.broadcast.emit( 'ultimosCuatro' , ticketControl.getUltimosCuatro())
    
    
  });
  

});