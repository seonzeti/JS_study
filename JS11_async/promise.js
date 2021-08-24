// Promise는 자바 스크립트 안에 내장되어있는 Object 
// 비동기적인 것을 수행할 때 콜백함수 대신 유용하게 쓰일 수 있는 Object 

// Promise 는 두가지를 생각하면 좋다.

//1. State (상태)
// 프로세스가 무거운걸 수행하고 있는 중 인지, 아니면 성공했는지 실패했는지 상태에 대한 이해가 중요하다.

//2. Produce와 Consumer의 상태를 아는 것 
// 원하는 데이터를 제공하는 사람 (Producer) 과 필요로하는 사람 (Consumer) 의 차이점을 잘 이해해야한다. 



// state : pending 상태 -> fulfilled 상태 (완벽하게 완료한 상태) or rejected (파일을 찾을 수 없거나 네트워크에 문제가 있다면?) 
// Producer vs Consumer 

// 1. Producer 
// 우리가 원하는 기능을 비동기적으로 실행하는 Promise를 만들겠다

// 프로미스를 만드는 순간 callback함수가 실행되는 것을 알 수 있다.
// 이 말을 즉슨, promise 안에 네트워크 실행 코드를 넣는다면 그 즉시 네트워크 통신을 수행한다. 
// Point! 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우라면? -> 이런식으로 작성하면 불필요한 네트워크 통신이 일어날 수 있다.
// 이 점을 유의해서 공부하는게 좋다. 

const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read file)
    console.log('doing something... ')
    setTimeout(() => {
       resolve('sani');
        reject(new Error('no network'));
    },2000);
});

//2. Promise를 이용하는 Consumers : then, catch, finally 를 이용해서 값을 받아올 수 있다. 

// 프로미스가 정상적으로 잘 실행이 되었다면, (then) 
//Producer 에서 resolve로 전달한 값이 Consumer의 파라미터로 전달된다. 
// reject 로 전달된 값은 .catch 로 

promise
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})
//성공하든 실패하든 무조건 가는 곳 : finally 
.finally(() => {console.log('끝!')})
;


// resolve -> .then
// reject -> .catch
// -> finally 


// 3. Promise chaining 
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000);
    //promise는 1초 있다가 숫자 1을 전달 

})

//then에서는 값을 바로 전달해도 되고, 또 다른 Promise를 전달해도 됨 
// 최종적으로 걸리는 시간은? 2초 
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then (num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000)
    })
})

.then(num => console.log(num));


// 4. 에러 핸들링 : 오류를 잘 처리하자 


console.clear();

// getHen 암탉을 받아오는 Promise 1초있다가 치킨을 return
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve('chicken', 1000));
    });

// get Egg 치킨을 받아서 그 치킨으로부터 달걀을 얻어온다 
const getEgg = hen => 
    new Promise((resolve, reject)=> {
        setTimeout(()=> reject(new Error (`${hen} => Egg`)), 1000);
    });


// get Cook 달걀을 받아서 그 달걀로부터 달걀프라이를 얻어온다 
const getCook = egg  =>
    new Promise((resolve,reject) => {
        setTimeout(() => resolve(`${egg} => FriedEgg`, 1000));
    });


// getHen()
// .then (hen => getEgg(hen)) 
// .then (egg => getCook(egg)) 
// .then (meal => console.log(meal));

//위와 같은 코드! 
getHen()
.then(getEgg)
//만약 여기서 오류가 났다면 다른걸로 대체 해주세요.
.catch(error => {
    return 'bread'; 
})
.then(getCook)
.then(console.log)
.catch(console.log);

