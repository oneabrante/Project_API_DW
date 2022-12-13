
<h1 align="center"> EyesUp </h1>

<p align="center"><img src="./public/assets/small.jpg" alt="logo EyesUP" width="100%" style="border-radius: 40px;"></p>


# :pushpin: Índice

- [Sobre o projeto](#bulb-sobre-o-projeto)
- [Como funciona](#wrench-como-funciona)
- [Funcionalidades do projeto](#hammer-funcionalidades-do-projeto)
- [Tecnologias utilizadas](#rocket-tecnologias-utilizadas)
- [Como rodar o projeto](#computer-como-rodar-o-projeto)
- [Licença](#pencil-licença)


# :bulb: Sobre o projeto

Esta é uma ideia para o projeto da disciplina de Desenvolvimento WEB do curso de Tecnologia de Redes de Computadores do IFPB - Campus JP. 
A EyesUp nasceu com o intuito de facilitar o monitoramento de aplicações WEB e API's, de forma simples e rápida, para que o usuário possa ter uma visão geral de como está o funcionamento de suas aplicações e assim poder tomar decisões mais rápidas. 

# :wrench: Como funciona

O usuário pode cadastrar suas aplicações WEB e API's, e assim o sistema irá monitorar o funcionamento das aplicações, e caso ocorra algum erro ou aviso, o usuário será notificado em tempo real. O usuário também pode visualizar os gráficos de monitoramento das aplicações, e assim ter uma visão geral de como está o funcionamento das aplicações.


# :hammer: Funcionalidades do projeto

- `Funcionalidade 1`: Monitoramento de Aplicações WEB
- `Funcionalidade 2`: Monitoramento de API
- `Funcionalidade 3`: GeoLocalização dos Servidores
- `Funcionalidade 4`: Notificações em tempo real de Erros e Avisos
- `Funcionalidade 5`: Gráficos de Monitoramento
- `Funcionalidade 6`: Verificações rápidas com retorno de status e tempo de resposta da aplicação WEB


# :rocket: Tecnologias utilizadas

- `HTML`
- `CSS`
- `JavaScript`
- `Bootstrap`
- `Chart.js`
- `Leaflet.js`
- `Node.js`
- `Express`
- `Prisma`
- `JWT`
- `BCrypt`
- `sqlite3`


# :computer: Como rodar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/abrantedevops/Project_API_DW

# Acesse a pasta do projeto no terminal
$ cd Project_API_DW

# Instale as dependências
$ npm i

# Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente
# JWT
$ SECRET=secret_anything

# BCRYPT
$ SALT=10

# Prisma
DATABASE_URL="file:./dev.db"

# Nodemailer
$ EMAIL=your_email
$ PASSWORD=your_password

# PS: Para o envio de emails, é necessário alterar as constantes de user e pass no arquivo notifyController.js (linha 9, 10 e 20) para as variáveis de ambiente EMAIL e PASSWORD

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

# :pencil: Licença

MIT License

Copyright (c) 2012-2022 Thiago Abrante de Souza

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


















