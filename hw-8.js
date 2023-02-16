// task1

const  arrTest = [1,4,5,6,6]

function getResult(arr, operation) {
    return Math.round(operation(arr));
}

const sum = (arr) => arr.reduce((acc, rec) => acc + rec);
const mult = (arr) => arr.reduce((acc, rec) => acc * rec, 1);



console.log(getResult(arrTest, mult)); 
console.log(getResult(arrTest, sum)); 


// task2
// Отсортировать по полю age

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function sort(arr, compareFunction) {
    for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			const condition = compareFunction ? compareFunction(arr[i], arr[j]) > 0 
            : arr[i].toString() > arr[j].toString();
				if (condition) {
				let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}

users.sort(compareUser); 
console.table(users);


// Task3
const arr = [1, '4', 9, 'two'];
const arr2 = [1, '4', false, 9, 'two'];

const each = (arr, operation) => operation(arr); 

const reverseArray = (arr) => arr.reverse()




const toNumberArray = (arr) => {
    let resultArray = [];

    arr.map((el) => {
        if (!isNaN(el)) {
            resultArray.push(+el);
        }
    });

    return resultArray;
}

console.log(each(arr,reverseArray))
console.log(each(arr2,toNumberArray))



// Task 4

function printDateNow() {
    let currentDate = new Date();
    console.log(currentDate);
}

printDateNow()

function timer() {
    const interval = setInterval(printDateNow, 3000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('Время истекло!')
    }, 30000 , interval)
};

timer()


// Task 5

function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback()
    }, 1000);

}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);
// talk();