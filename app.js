const boton_desplegar = document.getElementById('display_panel');
const panel = document.getElementById('panel_info');
const heart = document.getElementById('heart_contain');

boton_desplegar.addEventListener('click', function(e){
    heart.style.display = 'none';
    e.target.style.display = 'none';

    panel.style.display = 'flex';
    panel.style.animationName = 'desplegarPanel';
    panel.style.animationDuration = '500ms';
});