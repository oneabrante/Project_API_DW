const form = document.querySelector('form');

async function handleSubmit(event) {
  event.preventDefault();

  if (form.checkValidity()) {
    const user = Object.fromEntries(new FormData(form));

    const config = {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };


    site = 'http://localhost:3000/users'

    await fetch(site, config)
        .then(response =>  {
            console.log(response.ok)
            if (response.ok) {
                document.getElementById('bozp').innerHTML = '<div class="alert alert-success" role="alert">Cadastro realizado com sucesso! <a href="login.html"><strong>Entre aqui</strong></a></div>';
            } else {
                document.getElementById('bozp').innerHTML = '<div class="alert alert-danger" role="alert">Erro durante a realização do Cadastro! Tente novamente</div>';
            }
        })
        .catch(error => {
            console.log(error);
            document.getElementById('bozp').innerHTML = '<div class="alert alert-danger" role="alert">Erro durante a realização do Cadastro! Tente novamente</div>';
            form.reset();
        }
    );
  } else {
    form.classList.add('was-validated');
  }
}

form.confirmationPassword.addEventListener('input', () => {
    const password = form.password.value;
    const confirmationPassword = form.confirmationPassword.value;
  
    if (password !== confirmationPassword) {
      const error = 'As senhas não são iguais.';

      form.confirmationPassword.setCustomValidity(error);
      
    } else {
      form.confirmationPassword.setCustomValidity('');
    }
});
