// Comando para establecer la conexión
const socket = io();
var label = $('small');
var searchParams = new URLSearchParams( window.location.search );

if(!searchParams.has('escritorio')){ //Lo que hace esto es preguntar si dentro del URL se encutetra la palabra entre paretesis en este caso escritorio

    window.location = 'index.html'

    throw new Error('El escritorio es necesario')

} 

var escritorio = searchParams.get('escritorio');

$('h1').text('Escritorio ' + escritorio );

$('button').on('click' , function(){

    socket.emit( 'atenderTicket' , { escritorio : escritorio } , function( res ){

        // console.log(res);

        let numero = !isNaN(40); //True
        // console.log(numero);
        
        if( res === 'No hay tickets' ){
            
        label.text(res)
        
        return;
        }
        
        label.text(res.numero)
        
    })
    
})