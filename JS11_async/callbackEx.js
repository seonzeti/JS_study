
// ============================ 콜백지옥 ======================================= 

console.clear();


//백앤드에서 받아오는 Class 
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'sani' && password === '123') ||
                (id === 'pyo' && password === '123')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            } 

        },2000);
    }

    getRoles(user, onSuccess, onError){

    }

}
