//задание 1 
function convertTemp() {
    var c = document.getElementById('c');
    var f = document.getElementById('f');

    if (c.value != '') {
        f.value = Math.round(c.value * 9 / 5 + 32);
        c.value = '';
    } else {
        c.value = Math.round((f.value - 32) * 5 / 9);
        f.value = '';
    }
}

// задание 3
var admin;
var name='Василий';

admin = name;

alert (admin);
console.log (admin);



//задание 4

var a = 1000;
var b='108';
var rezult = a + b;

alert(rezult);
console.log(rezult);


