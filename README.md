# Sorteador de Amigo Secreto

Projeto desenvolvido durante o curso React: testando os seus componentes da Alura.

## Sobre o projeto

Este projeto é uma aplicação web para realizar o sorteio de amigo secreto entre um grupo de participantes. A ideia é facilitar a organização de eventos, festas, equipes e grupos de amigos, permitindo adicionar nomes, validar entradas e sortear aleatoriamente os participantes.

A aplicação foi construída com foco em:
- desenvolvimento com React + TypeScript;
- testes automatizados com React Testing Library e Jest;
- uso de TDD (Test-Driven Development);
- gerenciamento de estado com Recoil;
- navegação entre páginas com React Router.

## Funcionalidades

- Cadastro de participantes;
- validação de nomes vazios e duplicados;
- visualização da lista de participantes;
- sorteio do amigo secreto;
- exibição do resultado para cada participante;
- navegação entre as telas de configuração e sorteio.

## Tecnologias utilizadas

### Front-end
- React
- TypeScript
- React Router DOM
- Recoil
- CSS

### Testes
- Jest
- React Testing Library
- @testing-library/user-event

## Estrutura do projeto

```text
.
├── public/
│   └── imagens/
├── src/
│   ├── components/
│   │   ├── Cabecalho/
│   │   ├── Card/
│   │   ├── Formulario/
│   │   ├── ListaParticipantes/
│   │   └── Rodape/
│   ├── pages/
│   │   ├── Configuracao/
│   │   └── Sorteio/
│   ├── state/
│   │   ├── atom.ts
│   │   └── hooks/
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
│   ├── setupTests.ts
│   └── react-app-env.d.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
└── public/
```

## Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/gabriel-brasil/sorteio-amigo-secreto.git
```

2. Acesse a pasta do projeto:

```bash
cd sorteio-amigo-secreto
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie a aplicação:

```bash
npm start
```

A aplicação será aberta em `http://localhost:3000`.

## Como executar os testes

```bash
npm test
```

## Como gerar o build de produção

```bash
npm run build
```

## Aprendizados aplicados

Durante o desenvolvimento, foram praticados conceitos importantes como:

- TDD com testes falhando antes da implementação;
- renderização de componentes e interação com testes;
- uso de eventos e formulários;
- gerenciamento de estado global com Recoil;
- organização de componentes em aplicações React;
- navegação entre rotas com React Router.

## Observação

Este projeto tem como objetivo demonstrar na prática a criação de uma aplicação React com foco em testes e em boas práticas de desenvolvimento front-end.
