
// ============================ 콜백지옥코드====================================== 

// 이 코드의 문제! 그 안에서 호출 안에서 호출 안에서 호출! 
// 문제점 : 읽기가 너무 거북함! 가독성 X 
// 비즈니스로직을 한눈에 이해할 수가 없다. 
// 에러가 발생하거나 디버깅 할 때도 굉장히 어렵다.  

//백앤드에서 받아오는 Class 
class UserStorage {
     loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if (
                (id === 'sani' && password === '123') ||
                (id === 'pyo' && password === '123')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            } 

        },2000);
    }

    //사용자가 역할을 받아 올 때 
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'sani'){
                onSuccess({name : 'sani', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }

}


const userStorage = new UserStorage();
const id = prompt('enter your ID!');
const password = prompt('enter your password!');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
        user,
        (userWithRole) => {
            alert(`hello ${userWithRole.name}! you have a ${userWithRole.role} role.`);
        },
        error => {console.log('error');})
    },
    (error) => {console.log(error)});

