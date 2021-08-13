function rezult() {

var a;
var b;
var c;

a = document.getElementById('grad').Value;
a = parseInt(a);

b = ((9/5)*a+32);

c = (a + " это градусов " + b + " по Фаренгейту");
c = document.getElementById('tf').innerHTML;

}