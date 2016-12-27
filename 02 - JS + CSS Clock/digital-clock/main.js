(function(){
  var daysofweek = ['sun', 'mon', 'tus', 'wed', 'thu', 'fri', 'sat'];
  var horasHTML = document.querySelector('#hours');
  var minutosHTML = document.querySelector('#min');
  var segundosHTML = document.querySelector('#sec');
  var diaHTML = document.querySelector('#day');
  var mesHTML = document.querySelector('#month');
  var anioHTML = document.querySelector('#year');
  var tiempo = document.querySelector('#time');

  function setDate() {
    var ahora = new Date();
    var hora = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
    var fecha = ahora.getDate();
    var mes = ahora.getMonth();
    var anio = ahora.getFullYear();
    var hoy = ahora.getDay();

    if(hora >= 12){
      tiempo.innerHTML = 'PM';
    }else {
      tiempo.innerHTML = 'AM';
    }

    var hoyHTML = document.querySelector('#'+daysofweek[hoy]+'');
    console.log(hoyHTML);
    hoyHTML.style.color = '#fff';

    horasHTML.innerHTML = hora;
    minutosHTML.innerHTML = minutos;
    segundosHTML.innerHTML = segundos;
    diaHTML.innerHTML = fecha;
    mesHTML.innerHTML = mes;
    anioHTML.innerHTML = anio;
  }
  setInterval(setDate, 1000);
})();
