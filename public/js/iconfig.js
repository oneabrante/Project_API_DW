import Auth from './auth.js';

window.signout = Auth.signout

let user = document.getElementById('hello');
let mail = document.getElementById('mail');
let fusoh = document.getElementById('fusoh');
let horarioverao = document.getElementById('horarioverao');
let infoeyesup = document.getElementById('infoeyesup');
let infoparc = document.getElementById('infoparc');



function identityn({name}){
    let div = document.createElement('div')
    div.innerHTML = `Nome: <b>${name}</b>`
    return div
}

function identitye({email}){
    let div = document.createElement('div')
    div.innerHTML = `Email: <b>${email}</b>`
    return div
}

function identityf({fusoh}){
    let div = document.createElement('div')
    div.innerHTML = `Fuso horário: <b>${fusoh}</b>`
    return div
}

function identityh({horarioverao}){
    let div = document.createElement('div')
    div.innerHTML = `Horário de Verão: <b>${horarioverao}</b>`
    return div
}

function identityi({infoeyesup}){
    let div = document.createElement('div')
    div.innerHTML = `Informações da EyesUp: <b>${infoeyesup}</b>`
    return div
}

function identityinfoparc({infoparc}){
    let div = document.createElement('div')
    div.innerHTML = `Informações de Parceiros da EyesUp: <b>${infoparc}</b>`
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
        if(element.name != null){
            user.appendChild(identityn(element));
        }
        if(element.email != null){
            mail.appendChild(identitye(element));
        }
        if(element.fusoh != null){
            fusoh.appendChild(identityf(element));
        }
        if(element.horarioverao != null){
            horarioverao.appendChild(identityh(element));
        }
        if(element.infoeyesup != null){
            infoeyesup.appendChild(identityi(element));
        }
        if(element.infoparc != null){
            infoparc.appendChild(identityinfoparc(element));
        }
  
        
    });
}

renderUser();


if (!Auth.isAuthenticated()) {
    window.location.href = '/login.html';
}