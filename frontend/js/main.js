
let apicomp = document.getElementById('container-api');

function div_fun({ name, address, status }){
    let div = document.createElement('div');
    div.innerHTML = `
        <div id="component-container">
            <div class="component-inner status-green">
                <span class="name"> ${name} </span>
                <a href="http://${address}" target="_blank"><span class="icon-indicator fa fa-check"></span></a>
                <span class="status-msg"> ${status} </span>
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
                <span class="status-msg"> ${status} </span>
            </div>
        </div>
    `
    return div;
}


 fetch("http://localhost:3000/API-IFPB/")
     .then(res => res.json())
     .then(json => {
         json.map(data => {
             if (data.status == "Normal"){
                 apicomp.append(div_fun(data))
             }
                else{
                    apicomp.append(div_error(data))
                }    
     })
 })


 

