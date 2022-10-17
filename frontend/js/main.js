// verifast
const btn = document.querySelector('#send');


btn.addEventListener('click', (e) => {
    e.preventDefault();

    const url2 = document.querySelector('#url2').value;
    const site = url2.replace('https://', '').replace('http://', '')
    console.log(site)
    formntz.reset()
 
    
    async function verifast(){
    var start = new Date().getTime();
    if (site != '') {
        await fetch('//'+site, {mode: 'no-cors'})
        .then(response => {
            var end = new Date().getTime();
            var time = end - start;
            var timesec = time / 1000;
            const site2 = url2.replace('https://', '').replace('http://', '').replace('www.', '').split(/[/?#]/)[0];
            const sitefin = site2.charAt(0).toUpperCase() + site2.slice(1);
            console.log('O site: ' + sitefin + ' está online! Tempo de resposta: ' + timesec + 's');
            if (timesec <= 0.6) {
            const modalHostwithhtpp = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 id="exampleModalLongTitle">${sitefin}</h1>
                                    <h5>
                                        Este site está <strong><span style="color:green">no ar</span></strong> e funcionando normalmente. <br><br>
                                        A velocidade deste site é considerada <strong><span style="color:green">excelente</span></strong> (tempo de resposta de ${timesec}s).
                                        <i class="icofont-laughing" style="position:absolute; top:10%; right:20%; font-size:100px; color:green"></i>
                                    </h5>
                                    <div class="card">
                                        <div class="card-body" >
                                            <canvas width="700" height="300" id="myChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <h5> Para um monitoramento mais detalhado, realize o <a href="login.html" target="_blank" style="text-decoration:none; color: rgb(178, 121, 30)">login</a> agora.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="icofont-search-1"></i> Testar Novamente</button>
                    <a href="//${sitefin}" target="_blank"><button type="button" class="btn btn-primary"><i class="icofont-share-alt"></i> Visitar o Site</button></a>
                </div>
            </div>`;
            document.getElementById('myModal').innerHTML = modalHostwithhtpp;
            const offtime = document.querySelector('#send');
            offtime.addEventListener('click', (e) => {
                e.preventDefault();
                const modalHostwithhtpp = '';
                document.getElementById('myModal').innerHTML = modalHostwithhtpp;
            })
            var ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [`${sitefin}`],
                    datasets: [{
                        label: 'Tempo de Resposta',
                        data: [timesec],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }   else if (timesec > 0.7 && timesec <= 3) {
            const modalHostwithhtpp = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 id="exampleModalLongTitle">${sitefin}</h1>
                                    <h5>
                                        Este site está <strong><span style="color:green">no ar</span></strong> e funcionando normalmente. <br><br>
                                        A velocidade deste site é considerada <strong><span style="color:orange">razoável</span></strong> (tempo de resposta de ${timesec}s).
                                        <i class="icofont-exclamation-circle" style="position:absolute; top:10%; right:20%; font-size:100px; color:orange"></i>
                                    </h5>
                                    <div class="card">
                                        <div class="card-body" >
                                            <canvas width="700" height="300" id="myChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <h5> Para um monitoramento mais detalhado, realize o <a href="login.html" target="_blank" style="text-decoration:none; color: rgb(178, 121, 30)">login</a> agora.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="icofont-search-1"></i> Testar Novamente</button>
                    <a href="//${sitefin}" target="_blank"><button type="button" class="btn btn-primary"><i class="icofont-share-alt"></i> Visitar o Site</button></a>
                </div>
            </div>`;
            document.getElementById('myModal').innerHTML = modalHostwithhtpp;
            const offtime = document.querySelector('#send');
            offtime.addEventListener('click', (e) => {
                e.preventDefault();
                const modalHostwithhtpp = '';
                document.getElementById('myModal').innerHTML = modalHostwithhtpp;
            })
            
            var ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [`${sitefin}`],
                    datasets: [{
                        label: 'Tempo de Resposta',
                        data: [timesec],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }   else if (timesec > 3.1 && timesec <= 10) {
            const modalHostwithhtpp = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 id="exampleModalLongTitle">${sitefin}</h1>
                                    <h5>
                                        Este site está com <strong><span style="color:orange">instabilidade</span></strong>.<br><br>
                                        A velocidade deste site é considerada <strong><span style="color:red">muito lenta</span></strong> (tempo de resposta de ${timesec}s).
                                        <i class="icofont-exclamation-circle" style="position:absolute; top:10%; right:20%; font-size:100px; color:red"></i>
                                    </h5>
                                    <div class="card">
                                        <div class="card-body" >
                                            <canvas width="700" height="300" id="myChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <h5> Para um monitoramento mais detalhado, realize o <a href="login.html" target="_blank" style="text-decoration:none; color: rgb(178, 121, 30)">login</a> agora.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="icofont-search-1"></i> Testar Novamente</button>
                    <a href="//${sitefin}" target="_blank"><button type="button" class="btn btn-primary"><i class="icofont-share-alt"></i> Visitar o Site</button></a>
                </div>
            </div>`;
            document.getElementById('myModal').innerHTML = modalHostwithhtpp;
            const offtime = document.querySelector('#send');
            offtime.addEventListener('click', (e) => {
                e.preventDefault();
                const modalHostwithhtpp = '';
                document.getElementById('myModal').innerHTML = modalHostwithhtpp;
            })
           
            var ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [`${sitefin}`],
                    datasets: [{
                        label: 'Tempo de Resposta',
                        data: [timesec],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            }
        })
        .catch((error) => {
            const protocol = url2.split(':')[0];
            if (url2 != protocol) {
            alert('O site: ' + url2 + ' não está no formato correto. Tente novamente. Exemplo: https://www.google.com.br');
            location.reload();
            return;
            }
            console.log(error);
            const site2 = url2.replace('https://', '').replace('http://', '').replace('www.', '').split(/[/?#]/)[0];
            const sitefin = site2.charAt(0).toUpperCase() + site2.slice(1);
            const modalHostwithhtpp = `
            <div class="modal-dialog modal-lg ">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 id="exampleModalLongTitle">${sitefin}</h1>
                                    <h5>
                                        <br>
                                        Infelizmente este site está <strong><span style="color:red">fora do ar</span></strong>.<br><br>
                                        Tempo de resposta: <strong><span style="color:red">0s</span></strong>.
                                        <i class="icofont-sad" style="position:absolute; top:10%; right:20%; font-size:100px; color:red"></i>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="tesn"><i class="icofont-search-1"></i> Testar Novamente</button>
                </div>`;
            document.getElementById('myModal').innerHTML = modalHostwithhtpp;
            const offtime = document.querySelector('#send');
            offtime.addEventListener('click', (e) => {
                e.preventDefault();
                const modalHostwithhtpp = '';
                document.getElementById('myModal').innerHTML = modalHostwithhtpp;
            })
            
        })

    } else {
        alert('Por favor, insira um site válido.');
        location.reload();
       
    }
    

    }

    verifast();
    
});




//api ifpb
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


 

