

// 1. Array Declaration 
const arr1 = new Array();
const arr2 = ['안산', '김안산'];

// 2. Index position

const CoongYa = ['안산', '장민희', '강채영'];

console.log(CoongYa);
console.log(CoongYa.length);

console.log(CoongYa[0]);
console.log(CoongYa[1]);
console.log(CoongYa[2]);

//가장 마지막 Index를 받아올 수 있다. 
console.log(CoongYa[CoongYa.length-1]);


// 3. Looping over an array
// print all Coongya! 

console.clear();

// (1) for loop
for (let i = 0; i< CoongYa.length ; i++){
    console.log(CoongYa[i]);
}

// (2) for of
for (let CoongYaName of CoongYa){
    console.log(CoongYaName);
}

// (3) forEach 
// 바로 콜백함수를 받아옵니다. 

// 이동 시, forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
/**
 * Performs the specified action for each element in an array.
 * array에 들어있는 값 마다 callback함수를 수행한다. 
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */

    //원래 생긴 모습
    CoongYa.forEach(function(CoongYa) {
        console.log(CoongYa);
    }); 

    //편의 상 코드를 줄인 모습 
    CoongYa.forEach((CoongYa) => console.log(CoongYa));


    // 4. Addition, deletion, copy 

    // push : add an item to the end 
    CoongYa.push('김제덕', '수면쿵야', '끝쿵야');
    console.log(CoongYa);
    
    // pop : remove an item from the end 
    CoongYa.pop();
    CoongYa.pop();
    CoongYa.pop();
    console.log(CoongYa);

    // unshift : add an item to the beginning 
    CoongYa.unshift('김제덕', '수면쿵야', '끝쿵야');
    console.log(CoongYa);


    // shift : remove an item to the end 
    CoongYa.shift();
    CoongYa.shift();
    CoongYa.shift();
    console.log(CoongYa);


    // point note!! 
    // shift, unshift are slower than pop, push 
    // remove an item by index position 

    CoongYa.push('김제덕', '수면쿵야', '끝쿵야');
    console.log(CoongYa);

    CoongYa.splice(2,4);
    console.log(CoongYa);

    CoongYa.splice(1, 1, '사니', '김안산');
    console.log(CoongYa);

    // concat : combine two arrays
    const sani = ['완계쿵야', '양궁황제'];
    const newCoonya = CoongYa.concat(sani);
    console.log(newCoonya);


    // 5. Searching 
    // find the index 

    console.clear(); 
    console.log(CoongYa);
    console.log(CoongYa.indexOf('사니'));
    console.log(CoongYa.indexOf('안산'));
    console.log(CoongYa.indexOf('완계쿵야'));

    // includes > true or false return 
    console.log(CoongYa.includes('사니'));
    console.log(CoongYa.includes('완계쿵야'));
