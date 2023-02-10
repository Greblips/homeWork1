// Задание 1


const userString = 'сделай меня в верхний регистр'

const strUpperCase = (str) => str.toUpperCase()

console.log(strUpperCase(userString))

// Задание 2

const arrTest = ['Кошка', 'Кит', 'Комар', 'Носорог']
const arrTest2 = ['яблоко', 'груша', 'гриб', 'огурец']

const searchStart = (arr, str) => {
    const newArray = []
    arr.forEach((arr) => {
        if (arr.toLowerCase().includes(str.toLowerCase())) {
            newArray.push(arr)
        }
    });
    return newArray
}

console.log(searchStart(arrTest, 'ко'))
console.log(searchStart(arrTest2, 'Гру'))



// Задание 3


const userNumber = 32.58884

console.log(Math.floor(userNumber)) // округление до До меньшего целого
console.log(Math.ceil(userNumber))// округление до До большего целого 
console.log(Math.round(userNumber))// округление до До ближайшего целого 

// Задание 4

const anyNumbers = [52, 53, 49, 77, 21, 32]

const maxMinNumbers =(arr) =>{
 const minimum = Math.min(...anyNumbers);
 const maximum = Math.max(...anyNumbers);

 console.log(`Минимальное число ${minimum} Максимальное число ${maximum}`)

}

console.log(maxMinNumbers())

// Задание 5

const arrRandom = (max) =>{
 return userRandomNumber = (Math.round(Math.random()*max)) 

}

console.log(arrRandom(10))


// Задание 6
arr =[];

const getRandomArrNumbers = (numberUserArray) =>{
  for (let i=0; i < Math.floor(numberUserArray/2); i++) {
    arr.push(Math.round(Math.random()*(numberUserArray-0) + 0))
   
  }
}
console.log(getRandomArrNumbers(7)) ;
console.log(arr)



// Задание 7

const arrRandom2 = ( min, max ) => userRandomNumberRange = (Math.round(Math.random()*(max-min) + min))

console.log(arrRandom2(1, 5))


// Задание 8

const currentDate = new Date();
console.log(currentDate);


// Задание 9

function dni(plusDate) {
    const date =  new Date(currentDate);
    date.setDate(date.getDate()+ plusDate)
    console.log(date);

  }
console.log(dni(73))

// Задание 10




const dateOnRussian = (currentDate) =>{
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    
    let myDate = currentDate;


    if (myDate.getMinutes() < 10) { 
        myDate.getMinutes() = "0" + minute; 
    }
    if (myDate.getMinutes()< 10) { 
        myDate.getMinutes() = "0" + second; 
    }

    let fullDate = (`${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]} \nвремя ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getMinutes()}`)
    
    console.log(fullDate);
}

dateOnRussian(currentDate)






