import Auth from './auth.js';

window.signout = Auth.signout

let hello = document.getElementById('hello');

function identity({email}){
    let div = document.createElement('div')
    div.innerHTML = `Usuário: <b>${email}</b>`
    return div
}

async function getUser(){
    const config = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${Auth.getToken()}`,
        'Content-Type': 'application/json'
    },
};

    const response = await fetch('http://localhost:3000/users', config);
    const data = await response.json();
    return data;
}

async function renderUser(){
    const data = await getUser();
    data.forEach(element => {
        if(element.email != null){
            hello.appendChild(identity(element));
        }else{
            hello.appendChild(identity({name: 'Usuário'}));
        }
    });
}

renderUser();


if (!Auth.isAuthenticated()) {
    window.location.href = '/login.html';
}