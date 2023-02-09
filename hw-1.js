
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


