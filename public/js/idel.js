import Auth from './auth.js';

window.signout = Auth.signout

const del = document.querySelector('#sendb');

    del.addEventListener('click', (e) => {
      e.preventDefault();


      async function getUser() {
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

    function questionuser(){
        getUser().then((data) => {
            console.log(data);
            const id = data[1].id;
            console.log(id);
            const name = data[1].name;
            console.log(name);


            const question = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Excluir Conta </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h4>${name}, deseja realmente remover-se do site da EyesUp?</h4>
                    </div>
                    <div class="modal-footer">
                        <input class="submit-btn" type="submit" id="sendc" value="Sim" style="width: 15%;"/>
                        <input class="submit-btn" type="submit" id="sendd" value="Não" style="margin-left: 2px; width: 15%;"/>
                    </div>
                </div>
            </div>`;
            document.getElementById('myModal').innerHTML = question;
            const sendc = document.querySelector('#sendc');
            sendc.addEventListener('click', (e) => {
                e.preventDefault();
                
                    async function deleteUser() {
                        const config = {
                            method: 'DELETE',
                            headers: {
                                Authorization: `Bearer ${Auth.getToken()}`,
                                'Content-Type': 'application/json'
                            },
                        };
                        const response = await fetch(`http://localhost:3000/users/${id}`, config);
                        return response;
                    }
                    deleteUser().then((data) => {
                        console.log(data);
                        // remove token of localstorage 
                        Auth.signout();

                    })
                }
            );
        });
    }
       
    questionuser();
});
            
    
if (!Auth.isAuthenticated()) {
    window.location.href = '/login.html';
}