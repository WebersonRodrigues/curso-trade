import api from './api';

function obter(){
    return new Promise((resolve, reject) =>{
        api.get('/usuarios')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    obter
}