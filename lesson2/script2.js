//Задание 1

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 /* ++a означает что мы к переменной а прибавляем единицу */
d = b++; alert(d); // 1 /* ++ после переменной означает, что мы прибавляем единицу, но выводим предыдущее значение переменной * /
c = (2 + ++a); alert(c); // 5 /* т.к. в первом примере мы прибавили единицу в переменную а ее значение стало равно 2.В данном примере прибавляем еще единицу и а становится равно 3, отсюда ответ 5 */
d = (2 + b++); alert(d); // 4 /* т.к. во втором примере мы прибавили единицу в переменную b ее значение стало равно 2.В данном примере прибавляем еще единицу и а становится равно 3, но выводим предыдущее значение т.е. 2, отсюда получаем 4 */
alert(a); // 3	/* прибавили единицу в примере 1 и примере 3 */
alert(b); // 3	/* прибавили единицу в примере 2 и примере 4 */



//Задание 2

var a = 2;
var x = 1 + (a *= 2);

alert(x);
//x = 5

//задание 3

var a = 8;
var b = 2;
if (a > 0 && b > 0) {
    x = a - b;
    alert(x);
} else if (a < 0 && b < 0) {
    x = a * b;
    alert(x);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
    x = a + b;
    alert(x);
}

//Задание 4

var a = +prompt('Введите число от 0 до 15 ');

switch (a) {
    case 1:
        alert("1");
    case 2:
        alert("2");
    case 3:
        alert("3");
    case 4:
        alert("4");
    case 5:
        alert("5");
    case 6:
        alert("6");
    case 7:
        alert("7");
    case 8:
        alert("8");
    case 9:
        alert("9");
    case 10:
        alert("10");
    case 11:
        alert("11");
    case 12:
        alert("12");
    case 13:
        alert("13");
    case 14:
        alert("14");
    case 15:
        alert("15");
        break;
}


//Задание 5

var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a * b;
}

// Задание 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'plus':
            return arg1 + arg2;
            break;
        case 'minus':
            return arg1 - arg2;
            break;
        case 'division':
            return arg1 / arg2;
            break;
        case 'multiplication':
            return arg1 * arg2;
            break;

            default:
                return 'ошибка'
    }
}