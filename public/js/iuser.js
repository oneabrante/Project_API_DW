import Auth from './auth.js';

window.signout = Auth.signout


let user = document.getElementById('hello');


function identityn({name}){
    let div = document.createElement('div')
    div.innerHTML = `Usuário: <b>${name}</b>`
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
    await getUser().then(data => {
        data.forEach(element => {
            if(element.name != null){
                user.appendChild(identityn(element));
            }
        });
    });
}

renderUser();


if (!Auth.isAuthenticated()) {
    window.location.href = '/login.html';
}