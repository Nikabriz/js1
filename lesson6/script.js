//Задание 1 
//1 основное. Доработать функцию замены картинки 
//в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.

console.log('Задание 1')

const image = new Image()
image.src = "https://picsum.photos/800/600"
image.onload = function () {
alert("картинка существует");
};
image.onerror = function () {
alert("картинка не существует");
};

