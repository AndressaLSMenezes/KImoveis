# ImmoEase

## 📚 Idealização

- A aplicação ImmoEase foi criada com o propósito de facilitar a gestão de imobiliárias.

## 💻 Tecnologias

- Node Js
- PostgreSQL
- Typescript
- TypeORM

## 🛠️ Dependencias

- "bcryptjs": biblioteca para criptografia de senhas em JavaScript.
- "cross-env": define variáveis de ambiente de forma consistente em diferentes sistemas operacionais.
- "dotenv": carrega variáveis de ambiente de um arquivo ".env" no Node.js.
- "express": framework para aplicativos da web Node.js que fornece recursos para construir APIs e aplicativos da web.
- "jsonwebtoken": cria e verifica tokens de autenticação JWT.
- "pg": cliente de banco de dados PostgreSQL para Node.js.
- "reflect-metadata": biblioteca para refletir informações de metadados em tempo de execução do TypeScript.
- "ts-node-dev": reinicia automaticamente o servidor Node.js ao detectar alterações em arquivos do tipo TypeScript.
- "yup": biblioteca de validação de esquema para JavaScript.
- "express-async-errors": Biblioteca que permite lidar de forma assíncrona com erros em aplicações Express, simplificando o tratamento de exceções.
- "typeorm": Biblioteca de mapeamento objeto-relacional (ORM) para Node.js e TypeScript, que facilita a interação e manipulação de bancos de dados relacionais através de uma abordagem orientada a objetos.

## Como rodar o projeto?

Ao clonar o projeto, você seguirá os passos abaixo:

1. Execute o comando `yarn install` para instalar as dependências do servidor.
2. Após a instalação, preencha as variáveis .env e execute o comando `yarn typeorm migration:run -d src/data-source.ts` para executar as migrações do banco de dados (PostgreSQL).
3. Execute o comando `yarn dev` para iniciar o servidor. Certifique-se de que o servidor está rodando. (Necessário deixar o terminal aberto rodando o servidor).
4. Importe o arquivo `ImmoEase-insomnia.json` através do aplicativo Insomnia para descubrir as rotas existentes.

OBS: Certifique-se de manter o servidor rodando em uma instância do terminal e o cliente rodando em outra. Para interromper a execução, pressione "CTRL+C" no terminal correspondente.

## 🔮 Updates Futuros

- Adicionar uma documentação.
