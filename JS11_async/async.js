// async & await
// clear style of using promise.

// 1. async 

async function fetchUser() {
    // do network request in 10secs. 
    resolve('sani');
}

const user = fetchUser();
user.then(console.log);

// 2. await


// 정해진 시간이 지나면 resolve를 호출하는 Promise를 return
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}


// 3초를 지나고 호출 
// 여기서 await 을 호출하면, await이 끝날 때 까지 기다려준다. 
// 그래서 3초 있다가 sani를 return 함!!
async function getSani(){
    await delay(2000);
    return 'sani';
}

// 3초 있다가 ansan을 return 하는 함수 
// 동기적인 코드를 만드는 것 처럼! 
async function getAnsan() {
    await delay(1000);
    return 'ansan';
}

async function pickSan() {
    const saniPromise = getSani();
    const ansanPromise = getAnsan();
    //sani, ansan에 대한 Promise를 만들고

    const sani = await saniPromise;
    const ansan = await ansanPromise;
    // 만들자마자 바로 코드가 실행 (병렬적으로 실행!!)

    return `${sani}+${ansan}`;
    //그래서 결과값은 동시다발적으로 나올 수 있게 된다. 
}

pickSan().then(console.log);


// 3. userful Promise APIs.

console.clear();

function pickAllSan() {
    return Promise.all([getSani(), getAnsan()])
    .then(sanis => sanis.join('+'))
}

pickAllSan().then(console.log);


function pickOnlyOne(){
    return Promise.race([getSani(), getAnsan()]);
}

pickOnlyOne().then(console.log);