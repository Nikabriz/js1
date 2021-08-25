//Задание 1
// С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var i = 0;

while (i < a.length) {
    console.log(a[i++]);
}

//

let n = 0;
while (n <= 100) {
    let j = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            j = false;
            break;
        }
    }
    if (j) console.log(n);
    n++;
}

//Задание 2

//С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров


const stocks = [{
    product: "paints",
    price: 20,
    amount: 100
},
{
    product: "sharpener",
    price: 10,
    amount: 300
}
]

console.log(stocks[0].price * stocks[0].amount);
console.log(stocks[1].price * stocks[1].amount);

//Задание 3

//Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let myBasket = [[1, 'ластик', 3, 50.90],
[2, 'пенал', 1, 780.00],
[3, 'стержни', 35, 1.40],
[4, 'карандаши', 38, 25.16],
[5, 'тетради', 5, 35.90]
];
function countBasketPrice() {
    let basketPrice = 0;
    for (let i = 0; i < myBasket.length; i++) basketPrice += myBasket[i][2] * myBasket[i][3];
    return basketPrice;
}
console.log('Цена товаров в корзине: ' + countBasketPrice().toFixed(2));

//Задание 4



//Задание 5

let row = ' * ';
for (let i = 0; i < 20; i++) {
    console.log(row);
    row += ' * ';
}
