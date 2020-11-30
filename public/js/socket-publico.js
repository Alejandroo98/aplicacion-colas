//Comando para establecer conexion
var socket = io();

var lblTicket2 = $('#lblTicket2');
var lblTicket1 = $('#lblTicket1');
var lblTicket3 = $('#lblTicket3');  
var lblTicket4 = $('#lblTicket4');  

var lblEscritorio2 = $('#lblEscritorio2')
var lblEscritorio1 = $('#lblEscritorio1')
var lblEscritorio3 = $('#lblEscritorio3')
var lblEscritorio4 = $('#lblEscritorio4')

var lblTickets = [ lblTicket1 , lblTicket2 , lblTicket3 , lblTicket4 ];
var lblEscritorios = [ lblEscritorio2 , lblEscritorio1 , lblEscritorio3 , lblEscritorio4 ];

socket.on('estadoActual' ,  ( data ) => {
    
    console.log(data);
    actualizarHTML( data.ultimosCuatro )
    
});

socket.on('ultimosCuatro' , ( data ) => {

    var audio = new Audio('audio/new-ticket.mp3')
    audio.play()
    actualizarHTML( data )
    
})

function actualizarHTML( ultimosCuatro ){

    for( var i = 0 ; i <= ultimosCuatro.length -1 ; i++ ){

        lblTickets[i].text('Ticket ' + ultimosCuatro[i].numero)
        lblEscritorios[i].text('Escritorio ' + ultimosCuatro[i].escritorio)
        
    }
    
}