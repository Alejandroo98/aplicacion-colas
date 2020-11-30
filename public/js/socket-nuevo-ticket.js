// Comando par aestablecer la conexion
let socket = io();
let label = $('#lblNuevoTicket')

socket.on( 'connect' , function(){

    console.log('Servidor conectado');
    
});

socket.on( 'disconnect' , function(){

    console.log('Servidor desconectado');
    
});

socket.on('estadoActual', ({ actual }) => {

    label.text( actual )

});

/* ESTE ES OTRA MANERA DE SELECCIONAR EL BOTON SOLAMENTE CON JS */
// document.querySelector('.btn').addEventListener('click' , () => {
//     console.log('Click');
// });


/* ESTE ES OTRA MANERA DE SELECCIONAR EL BOTON PERO CON JQUERY*/
$('button').on('click' , function(){

    socket.emit('siguieteTicket' , null , function( ticketSiguiente ){

        label.text(ticketSiguiente)
        
    })

        
    
    
})
