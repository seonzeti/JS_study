// JSON
// JavaScript object Notation 

// interface JSON {
    //함수이름은 동일하지만 어떤걸 전달하느냐에 따라 각각 다른방식으로 호출이 가능함  
//     /**
//      * Converts a JavaScript Object Notation (JSON) string into an object.
//      * @param text A valid JSON string.
//      * @param reviver A function that transforms the results. This function is called for each member of the object.
//      * If a member contains nested objects, the nested objects are transformed before the parent object is.
//      */
//     parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
//     /**
//      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
//      * @param value A JavaScript value, usually an object or array, to be converted.
//      * @param replacer A function that transforms the results.
//      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
//      */
//     stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
//     /**
//      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
//      * @param value A JavaScript value, usually an object or array, to be converted.
//      * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
//      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
//      */
//     stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
// }

// 1. Object to JSON 
// Stringfy(obj)


let json = JSON.stringify(['안산','사니']);
console.log(json);

const sani = {
    name : 'ansan',
    color : 'skyblue',
    height : '172',
    birthDate : new Date(),
    //함수는 object에 있는 데이터가 아니기때문에 제외됨 
    jump:  () => {
        console.log(`${name} can jump!`);
    },
};


json = JSON.stringify(sani);
console.log(json);


//내가 원하는 property만 골라서 정의 
json = JSON.stringify(sani, ['name','color','height']);
console.log(json);

//더욱 쉽게 데이터 전달하는 방법
json = JSON.stringify(sani, (key,value) => {
    console.log(`key: ${key}, value : ${value}`);
    return key === 'name' ? 'pyo' : value;
})
console.log(json);


// // 2. JSON to Object 
// // parse(json)
// // 이 과정에서 함수는 포함이 되지 않는다. 

console.clear();
json= JSON.stringify(sani);
console.log(json);

const obj = JSON.parse(json, (key,value) => {
    console.log(`key : ${key}, value : ${value}`)
    return key === 'birthDate' ? new Date(value) : value;
});


console.log(obj);
sani.jump();
// obj.jump(); >> 에러가 남 

console.log(sani.birthDate.getDate());
console.log(obj.birthDate.getDate()); 
