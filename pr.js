var hr = document.querySelector('#hr');
var mn = document.querySelector('#mn');
var se = document.querySelector('#se');


var deg = 6;
setInterval(() => {
    let day = new Date();
    let ms = day.getMilliseconds()* deg;
    let hh = day.getHours()* 30;
    let mm = day.getMinutes()* deg;
    let ss = day.getSeconds()* deg +ms /1000;

    hr.style.transform = 'rotateZ(' + hh + 'deg)'
    mn.style.transform = 'rotateZ(' + ms + 'deg)'
    se.style.transform = 'rotateZ(' + ss + 'deg)'
},1000);