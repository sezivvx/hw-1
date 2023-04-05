


// task 1
var number = prompt('введите оценку от 1 до 10')
if (number > 5 && number <=10) {
    alert('Спасибо за высокую оценку!')
}else if (number<=5 && number == 0){
    alert('Мы работаем над улучшением сервиса!')
}else if (typeof +number !== 'number'){
    alert('Вы ввели не цифру!!!')
}else{
    alert('Извините , такой оценки не существует')
}




// task 2
var lang = prompt('введите язык')
var engArray = ['mon', 'tue', 'wed']
var rusArray = ['пн', 'вт']
if (lang=='eng'){
    console.log(engArray);
}else if(lang=='rus'){
    console.log(rusArray);
}else{
    console.log('error');
}




