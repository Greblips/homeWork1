
const game1 = document.querySelector("#startGame1");

function season() {
    const monthUser = prompt('Введите номер месяца')
    if( !isNaN(monthUser) ){

        if (monthUser==12 || monthUser<=2) {
            alert('Зима')
        }
        else if(monthUser == 3 || monthUser<=5){
        alert('Весна')
        }
        else if(monthUser == 6 || monthUser<=8){
        alert('лето')
        }
        else if(monthUser == 9 || monthUser<=11){
        alert('Осень')
        }
        else{
        alert('В году меньше 12 месяцев');
        }
     }
     else{
        alert('Вы ввели не число')
     }

}
game1.addEventListener('click', season)


const game2 = document.querySelector("#startGame2");

function rememberArr() {
   let fruitsArr =['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

  fruitsArr = fruitsArr.sort(() => Math.random() - 0.5);
  alert (fruitsArr);
  const firstArrItem = prompt('Чему равнялся первый элемент массива')
  const lastArrItem = prompt('Чему равнялся последний элемент массива')
    if (firstArrItem.toLowerCase() == fruitsArr[0].toLocaleLowerCase() && lastArrItem.toLowerCase() == fruitsArr[fruitsArr.length-1].toLocaleLowerCase() ){
    alert( 'Поздравляю, вы угадали оба элемента!')
  }else if (firstArrItem.toLowerCase() == fruitsArr[0].toLocaleLowerCase() || lastArrItem.toLowerCase() == fruitsArr[fruitsArr.length-1].toLocaleLowerCase() ){
    alert( 'Вы близки к победе')
  }else alert( 'Пользователь ничего не угадал')


}


game2.addEventListener('click', rememberArr)