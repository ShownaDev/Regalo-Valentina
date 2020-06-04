const boton_desplegar = document.getElementById('display_panel');
const panel = document.getElementById('panel_info');
const heart = document.getElementById('heart_contain');
const verso_p = document.getElementById('texto_verso');

//Array fotos
var array_fotos = [
    'img/IMG-20190225-WA0099.jpg',
    'img/IMG-20190630-WA0008.jpg',
    'img/KUJICAM_2019-01-21-14-43-47_developed.jpg',
    'img/KUJICAM_2019-01-27-19-04-04_developed.jpg',
    'img/KUJICAM_2019-02-11-16-58-37_developed.jpg',
    'img/KUJICAM_2019-03-03-13-54-07_developed.jpg',
    'img/KUJICAM_2019-05-05-19-53-43_developed.jpg',
    'img/KUJICAM_2019-05-31-19-35-47_developed.jpg',
    'img/KUJICAM_2019-06-16-18-38-05_developed.jpg'
];


var array_frases = [
    
    'En la distancia <br> Encontré una nueva forma de amarte <br> ' + 
    'Mi imaginación explotó en las cuatro paredes <br> Justo ahí, en un computador.',

    'Te propongo seguir una historia<br> Donde tú y yo seamos los protagonistas <br>' + 
    'Donde el espacio y tiempo<br> Se transforman en un beso.',

    'Te propongo buscar nuestro hogar<br> En incontables abrazos <br> Donde los problemas <br>' +
    'Se convierten en fortaleza.',
  

    'Te propongo que cada cambio<br> Nos haga maravillarnos ante la vida <br>' +
    'Donde descubrimos que no somos perfectos <br> Solo somos reales y que ahí está la magia del amor.',
        
    'Te propongo averiguar <br> Los secretos del universo <br> Donde podamos encontrarnos <br>' +
    'Tú y yo.',
      
    'Te propongo ser amigos,<br> Compañero, confidentes, <br> Donde seamos <br> Lo mejor que nos haya pasado.',
        
    'Te propongo tener una historia <br> Real y nada más que real <br> Donde nos aceptemos <br>' +
    'Tal y como somos.',
        
    'Te propongo extrañarte <br> Cada vez que te tienes que ir <br> Y esperar <br>' +
    'Hasta que vuelvas.',
        
    'Te propongo quererte <br> Amarte y cuidarte <br> En cualquier situación <br> ' +
    'Porque el amor no se trata de ser siempre color rosa <br> Sino de comprender los cambios que surgen' +
    'Porque a veces son para bien.',
        
];

var array_temporal_fotos = [];

var array_temporal_versos = [];

function llenarPanel(){
    verso_p.innerHTML = '';
    var currentLength = 0;

    currentLength = array_fotos.length;

    console.log(currentLength);

    var randomIndex = Math.floor((Math.random() * currentLength) + 1);
    console.log("Random: " + randomIndex);

    const fotoContainer = document.getElementById('foto');

    fotoContainer.src = array_fotos[randomIndex - 1];

    array_temporal_fotos.push(array_fotos[randomIndex - 1]);
    removeItemFromArr(array_fotos, array_fotos[randomIndex - 1]);
    
    //llenar versos

    var randomIndexVersos = Math.floor((Math.random() * currentLength) + 1);

    var estrofa = array_frases[randomIndexVersos - 1];

    verso_p.innerHTML = estrofa;

    array_temporal_versos.push(array_frases[randomIndexVersos - 1]);
    removeItemFromArr(array_frases, array_frases[randomIndexVersos - 1]);

    if(array_temporal_versos.length == 9 && array_temporal_fotos.length == 9){
        for(var i = 0; i < array_temporal_fotos.length; i++){
            array_fotos.push(array_temporal_fotos[i]);
        }

        for(var i = 0; i < array_temporal_versos.length; i++){
            array_frases.push(array_temporal_versos[i]);
        }

        array_temporal_versos.length = 0;
        array_temporal_fotos.length = 0;
    }

    console.log(array_fotos);
}

//Eliminar elemento de un array
function removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
    arr.splice( i, 1 );
}

boton_desplegar.addEventListener('click', function(e){
    llenarPanel();
    
    heart.style.display = 'none';
    e.target.style.display = 'none';

    panel.style.display = 'flex';
    panel.style.animationName = 'desplegarPanel';
    panel.style.animationDuration = '500ms';

    setInterval(function(){
        llenarPanel();
    }, 6000);
});