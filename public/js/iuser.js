import Auth from './auth.js';

window.signout = Auth.signout


let user = document.getElementById('hello');
let user2 = document.getElementById('helloo');



function identityn({name}){
    let div = document.createElement('div')
    div.innerHTML = `Usuário: <b>${name}</b>`
    return div
}

function identityn2({name}){
    let div = document.createElement('div')
    div.innerHTML = `Olá <b>${name}!</b> Aqui você pode criar um monitoramento mais detalhado para seu site, aplicativo ou api.  
    <br><br>Para isso, basta clicar em "Novo monitoramento" e preencher os campos com as informações necessárias.
    <br><br>Se você já possui um monitoramento criado, basta clicar em "Monitoramentos" e selecionar a aplicação desejada.
    <br><br>Para mais detalhes, clique em "Como Funciona".`
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
                user2.appendChild(identityn2(element));
            }
        });
    });
}

renderUser();


if (!Auth.isAuthenticated()) {
    window.location.href = '/login.html';
}