// Q1. make a string out of an array
// 주어진 배열을 String 으로 변환하시오.
{
    const fruits = ['apple', 'banana', 'orange'];

    //join : 배열에 있는 모든 아이들을 더해서 String 으로 return 하는 것 
    //그냥 String이 아닌, 구분자를 넣어서 만들어줌! 
    /**
     * Adds all the elements of an array into a string, separated by the specified separator string.
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
     */
    //  join(separator?: string): string;

    // ? >> 전달해도 되고, 전달하지 않아도 됨 결국은 배열에 있는 모든 값을 String으로 나타내줌 

    const result = fruits.join();
    console.log(result);
    const result2 = fruits.join(', and ');
    console.log(result2);

  }
  
  // Q2. make an array out of a string
  // 주어진 String 을 Array 로 변환하는 문제 
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';

    
    /**
     * Split a string into substrings using the specified separator and return them as an array.
     * @param splitter An object that can split a string.
     * @param limit A value used to limit the number of elements returned in the array.
     */
    //  split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];

    //Split : Seperate를 받아와서 여러가지 문자열로 잘게 나눠서 배열로 만들어준다. 
    //Split은 구분자를 꼭 전달해줘야한다. 
    const result = fruits.split(',');
    console.log(result)

    
    

      }


  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {

    //reverse 배열안에 있는 것을 거꾸로 출력하게 해준다. 
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);

    //point!
    //배열 자체도 변화시키기 때문에 result가 아닌 array도 값이 똑같이 바뀐다.
    console.log(array);

  }
  
  // Q4. make new array without the first two elements
  {
    //3~5까지의 새로운 배열 만들기 
    const array = [1, 2, 3, 4, 5];    

    //Slice : 배열의 시작하는 인덱스, 끝나는 인덱스를 지정해주면 된다. 
    //point! End는 exlusive! 배제됨 
      /**
     * Returns a copy of a section of an array.
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * For example, -2 refers to the second to last element of the array.
     * @param start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     */
      //  slice(start?: number, end?: number): T[];


    const result = array.slice(2,5);
    console.log(result);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {

    // Find API : 첫번째로 찾아진 요소를 return함 콜백함수가 true가 되면 찾자마자 return 할거임
    // 만약 찾지 못하면 undefined 를 return true가 되면 바로 끝냄 
    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    //  find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    //  find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

    const result = students.find((student) => student.score == 90);
    console.log(result);


  }
  
  // Q6. make an array of enrolled students
  //학생들 중에서 등록한 학생만 골라서 배열로 만들어주세요..! 
  {
    //Filter 
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
    //  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
     
    const result = students.filter((student) => student.enrolled == true);
    console.log(result);

    
    
  }
  
  // Q7. make an array containing only the students' scores
  // 학생들의 배열에서 점수만 빼와서 새로운 배열을 만들어보세요 
  // result should be: [45, 80, 90, 66, 88]
  {
    //map API 
/**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
//  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// 배열안에 있는 요소 한가지 한가지를 다른것으로 변환해주는 것 (가공되어진 값으로 대체하는 것임)


    //student에서 가지고 있는 점수로 변환해서 배열을 만들고 싶어요 !! 
    const result = students.map((student)=> student.score);
    console.log(result);
    

  }
  
  // Q8. check if there is a student with the score lower than 50
  // 학생들 중에 점수가 50점보다 낮은 학생이 있는지 없는지 확인하시오 
  {
      //some API 이용 
        /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param predicate A function that accepts up to three arguments. The some method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
        //  some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
        // 배열의 요소중 return이 true가 되는 애가 있는지 없는지 확인해주는 것

    const result = students.some((student) => student.score < 50);
    console.log(result);

    // Every는? (모든 조건을 충족시켜줘야함 )
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);

  }
  
  // Q9. compute students' average score
  {
    //reduce : 배열 하나하나씩 순차적으로 curr에 전달, prev는 return한 값이 다음이 호출될 때 prev으로 연결되어진다. 
        /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
        //  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
        //  reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;

    const result = students.reduce((prev,curr) => prev+ curr.score ,0);
    const avag = result/students.length
    console.log(avag);

    // reduceRight 은 배열의 가장 뒤에서부터 시작하는 것 

  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  // 학생들의 모든 점수를 String에서 변환해서 사용 
  {
    console.clear();

    // const result = students.map((student) => student.score);
    // const resultToString = result.join();

    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50) 
    .join();

    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {

    const result = students
    .map((student) => student.score)
    .sort((a,b) => a - b)
    .join();


    console.log(result);

    

  }