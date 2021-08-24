
// 5. callback hell을 promise로 돌려놓자 


class UserStorage {
    
    loginUser(id, password){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (
                    (id === 'sani' && password === '123') ||
                    (id === 'pyo' && password === '123')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                } 
    
            },2000);1
        })
    }

    getRoles(user){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (user === 'sani'){
                    resolve({name : 'sani', role : 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }

}

const userStorage = new UserStorage();
const id = prompt('enter your ID!');
const password = prompt('enter your password!');

userStorage.loginUser(id,password)
.then(userStorage.getRoles)
.then(user => alert(`hello ${user.name}! you have a ${user.role} role.`))
.catch(console.log);
