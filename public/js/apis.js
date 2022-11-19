//api ifpb
let apicomp = document.getElementById('container-api');

function div_fun({ name, address, status }){
    let div = document.createElement('div');
    div.innerHTML = `
        <div id="component-container">
            <div class="component-inner status-green">
                <span class="name"> ${name} </span>
                <a href="http://${address}" target="_blank"><span class="icon-indicator fa fa-check"></span></a>
                <span class="status-msg"><a href="http://${address}" target="_blank" style="text-decoration:none"> ${status} </a></span>
            </div>
        </div>
    `
    return div;
    
}

let apicomperror = document.getElementById('container-api');

function div_error({ name, address, status }){
    let div = document.createElement('div');
    div.innerHTML = `
        <div id="component-container">
            <div class="component-inner status-green">
                <span class="name"> ${name} </span>
                <a href="http://${address}" target="_blank"><span class="icon-indicator fa fa-times"></span></a>
                <span class="status-msg"><a href="http://${address}" target="_blank" style="text-decoration:none"> ${status} </a></span>
            </div>
        </div>
    `
    return div;
}


async function getApi(){
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const response = await fetch('http://localhost:3000/status', config);
    const data = await response.json();
    return data;
}

async function renderApi(){
    const data = await getApi();
    data.forEach(element => {
        if(element.status == "Disponível"){
            apicomp.appendChild(div_fun(element));
        }else{
            apicomperror.appendChild(div_error(element));
        }
    });
}

renderApi();





 

