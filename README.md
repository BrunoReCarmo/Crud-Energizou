<h1 align="left">#Sobre o projeto - Crud Energizou</h1>

###

<p align="left">Bem-vindo ao CorpHub, Este é um projeto Full Stack que utiliza tecnologias modernas para criar uma aplicação web completa. O projeto é construído com um backend em Node.js e Express, um frontend em React.js, utilizando TypeScript e JavaScript, e um banco de dados MySQL gerenciado pelo phpMyAdmin. <a href="#utilizacao">Ir direto modo de utilização<a/></p>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="mysql logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" height="40" alt="apache logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="express logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="40" alt="tailwindcss logo"  />
</div>

###

<h1 align="left">Tecnologias usadas</h1>

###

<h2 align="left">Backend: Node.js & Express</h2>

###

<p align="left">O servidor backend é construído com Node.js, utilizando o framework Express para lidar com as rotas, lógica do servidor e construção de APIs RESTful.</p>

###

<h4 align="left">APIs RESTful:</h4>

###

<p align="left">No backend, foram desenvolvidas APIs RESTful que seguem os princípios do estilo arquitetural REST (Representational State Transfer). Essas APIs permitem a comunicação eficiente entre o backend e o frontend, fornecendo endpoints para operações de leitura, escrita, atualização e exclusão de dados.</p>

###

<h4 align="left">Criação de Endpoints:</h4>

###

<p align="left">Foram criados endpoints para manipular recursos específicos, seguindo as práticas RESTful, como /api/empresas, ou outros recursos relevantes do sistema.</p>

###

<h4 align="left">Verbos HTTP:</h4>

###

<p align="left">Cada endpoint corresponde a um recurso específico e é associado a um verbo HTTP apropriado (GET, POST, PUT, DELETE) para realizar operações específicas no recurso.</p>

###

<h4 align="left">Tratamento de Requisições:</h4>

###

<p align="left">As requisições recebidas nos endpoints são tratadas pelo servidor, executando operações no banco de dados e respondendo com dados em JSON para o cliente.</p>

###

<h2 align="left">Frontend: React.js, Chakra UI e Tailwind</h2>

###

<p align="left">O frontend é desenvolvido utilizando o React.js, o que permite a criação de componentes reutilizáveis e a construção de uma interface de usuário dinâmica e responsiva. Com a abordagem de componentização, o código é organizado de forma modular, facilitando a manutenção e a escalabilidade do projeto.</p>

###

<h4 align="left">Integração com o Backend</h4>

###

<p align="left">O frontend consome os dados do backend por meio da URL da API. Utilizando requisições HTTP (como GET, POST, PUT, DELETE) nos endpoints fornecidos pelo backend, o frontend realiza operações de leitura, escrita, atualização e exclusão de dados. Essa integração permite que o frontend se comunique de forma eficiente com o servidor, exibindo e manipulando informações para o usuário final.</p>

###

<h3 align="left">URL da API</h3>

###

<p align="left">A URL da API do backend é usada no frontend para estabelecer a comunicação com o servidor. Através desta URL, as requisições são feitas para acessar e manipular os dados, possibilitando a atualização dinâmica da interface do usuário com as informações fornecidas pelo backend.</p>

###

<h2 align="left">Banco de Dados: MySQL com phpMyAdmin</h2>

###

<p align="left" id="utilizacao">O banco de dados relacional MySQL é utilizado para armazenar e gerenciar os dados da aplicação, com o phpMyAdmin como interface para gerenciamento do banco de dados.</p>

###

## Modo de Utilização

### Banco de Dados MySQL (phpMyAdmin)

1. **Importação do Script .sql**:
   - Acesse o phpMyAdmin ou sua interface de gerenciamento do MySQL.
   - Crie um banco de dados vazio para o projeto.
   - Importe o script .sql fornecido, que contém a estrutura e os dados para o banco de dados.

### Configuração das Credenciais do Backend

2. **Backend (./server)**
   - Configure as credenciais do banco de dados MySQL no arquivo `.env` do backend, incluindo:
     - `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DATABASE_NAME`.

### Execução do Frontend

3. **Frontend (./client)**
   - No diretório do frontend, execute os comandos no terminal:
     ```bash
     npm install
     ## Pacotes Necessários

Certifique-se de ter os seguintes pacotes e dependências instalados no seu projeto:

### Pacotes Necessários

```bash
# Para instalar as dependências necessárias
npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event autoprefixer dotenv postcss sass tsconfig react-router-dom

     npm start
     ```
   - Isso instalará as dependências necessárias e iniciará o servidor de desenvolvimento do frontend.

### Execução do Backend

4. **Backend (./server)**
   - No diretório do backend, execute o seguinte comando no terminal:
     ```bash
     npm run dev
     ```
   - Isso iniciará o servidor backend, permitindo que o frontend se comunique com a API por meio das rotas definidas.

Seguindo esses passos, o banco de dados será configurado, as credenciais serão definidas no backend, e os servidores do frontend e backend serão iniciados, permitindo a interação entre eles para a execução do projeto.

Certifique-se de adaptar os comandos de execução e configuração de acordo com o ambiente e as particularidades do seu projeto.