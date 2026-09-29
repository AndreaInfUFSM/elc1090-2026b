<!--
author:   Andrea Charão

email:    andrea@inf.ufsm.br

version:  0.0.1

language: PT-BR

narrator: Brazilian Portuguese Female

comment:  Material de apoio para a disciplina
          ELC1090 - Desenvolvimento de Software para Web
          da Universidade Federal de Santa Maria

translation: English  translations/English.md
-->

<!--
liascript-devserver --input README.md --port 3001 --live
https://liascript.github.io/course/?https://raw.githubusercontent.com/AndreaInfUFSM/elc1090-2026b/master/classes/17/README.md
-->



[![LiaScript](https://raw.githubusercontent.com/LiaScript/LiaScript/master/badges/course.svg)](https://liascript.github.io/course/?https://raw.githubusercontent.com/AndreaInfUFSM/elc1090-2026b/master/classes/17/README.md)


# Terceiro projeto

> Objetivo: desenvolver uma aplicação web com cadastro e autenticação de usuários, integrando frontend, backend e persistência de dados.


O que você vai aprender/exercitar neste projeto?

- Implementar cadastro e autenticação de usuários
- Integrar autenticação entre frontend e backend
- Associar dados/operações a usuários autenticados
- Proteger operações no backend
- Consolidar a compreensão sobre backend e persistência de dados




## Requisitos

- Desenvolvimento individual ou em dupla
- Persistência de dados do lado do servidor
- Aplicação web com frontend e backend
- Cadastro de usuários
- Login e logout
- Autenticação integrada entre frontend e backend
- Pelo menos um tipo de dado/recurso associado ao usuário autenticado
- Operações protegidas no backend
- Deploy da aplicação em infraestrutura gratuita

Exemplo:

- usuário autenticado pode criar seus próprios itens
- usuário pode consultar/alterar/excluir somente itens permitidos pela aplicação

Obs.: Estudantes que já tenham experiência com esses requisitos, ou que tenham demonstrado autonomia, interesse consistente e boa aderência a escopo e prazos nos projetos anteriores, podem negociar outros requisitos com a professora.



## Autenticação e autorização

Alguns conceitos importantes:

- **Cadastro:** criação de uma conta de usuário
- **Autenticação:** identificação do usuário
- **Autorização:** controle do que cada usuário pode acessar ou modificar

⚠️ Restringir funcionalidades apenas no frontend **não é suficiente**.

O backend deve verificar a autenticação/autorização antes de executar operações protegidas.





## Recursos permitidos

- Backend: linguagem, framework ou plataforma à escolha
- Banco de dados relacional ou não relacional
- Frontend: HTML, CSS, JavaScript, bibliotecas ou frameworks
- Bibliotecas ou serviços de autenticação
- APIs e serviços externos, quando aplicáveis
- Uso inteligente de IA: aproveite ferramentas de IA para ajudar no desenvolvimento e aprendizado, não para se livrar rapidamente do trabalho; o processo precisará gerar evidências


## Desenvolvimento

Etapas:

- definir/detalhar proposta com tema, funcionalidades e tecnologias, até dia 02/10
- definir como usuários e dados se relacionam
- implementar cadastro de usuários
- implementar login/logout
- integrar autenticação entre frontend e backend
- proteger operações no backend
- testar acessos permitidos e não permitidos
- publicar versões funcionais durante o desenvolvimento
- realizar o deploy da versão final

O desenvolvimento deve ser incremental, com commits frequentes e avanços demonstrados durante as aulas.




## Quadro compartilhado de propostas

Este documento compartilhado e aberto para edição vai manter um registro das propostas:




⚠️ **ATENÇÃO!** Após o prazo final para propostas (02/10), o documento será fechado para edição. 


## Tecnologias possíveis

As tecnologias continuam de livre escolha e devem permitir **deploy gratuito** durante a disciplina.

Algumas possibilidades:

- **Java:** [Spring Boot](https://spring.io/projects/spring-boot), [Spring Security](https://spring.io/projects/spring-security)
- **Python:** [Flask](https://flask.palletsprojects.com/), [FastAPI](https://fastapi.tiangolo.com/), [Django](https://www.djangoproject.com/)
- **JavaScript / TypeScript:** [Express](https://expressjs.com/), [Fastify](https://fastify.dev/), [NestJS](https://nestjs.com/)
- **PHP:** [Laravel](https://laravel.com/)
- **Bancos relacionais:** [SQLite](https://www.sqlite.org/), [PostgreSQL](https://www.postgresql.org/), [MySQL](https://www.mysql.com/)
- **Bancos não relacionais:** [MongoDB](https://www.mongodb.com/)
- **ORM / acesso a dados:** [Hibernate](https://hibernate.org/), [SQLAlchemy](https://www.sqlalchemy.org/), [Prisma](https://www.prisma.io/)
- **Backend/autenticação como serviço:** [Supabase](https://supabase.com/), [Firebase](https://firebase.google.com/)
- **Hospedagem / deploy:** [Render](https://render.com/), [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), [Railway](https://railway.com/)

Outras tecnologias podem ser utilizadas, desde que atendam aos requisitos.


### Observações

- Não é necessário implementar autenticação do zero
- Frameworks, bibliotecas e serviços de autenticação podem ser utilizados
- Quem implementar armazenamento de senhas no próprio backend deve utilizar mecanismos adequados de hash
- O uso de serviços como Supabase ou Firebase não dispensa a compreensão do fluxo de autenticação e das regras de acesso
- A aplicação deve continuar funcionando após a entrega, para que possa ser testada e inspecionada durante a disciplina



## Entrega

- Use o repositório de entrega que será criado automaticamente na organização: https://github.com/orgs/elc1090/repositories
- Faça commits frequentes, seguindo boas práticas
- Preencha seu README.md a partir do template que será fornecido posteriormente
- O repositório deve conter todo o código necessário para execução do projeto
- Prepare-se para uma apresentação do projeto com duração de 3 a 5 minutos, com ênfase no processo de desenvolvimento, nas decisões tomadas e na cooperação realizada

**Prazos**:

- Definição da proposta: até dia 02/10 (sexta-feira)
- Entrega até 21/10 (quarta-feira), apresentações dias 22 e 27/10 (quinta e terça-feira)

Obs.: 
- Para este projeto, será publicada uma escala de apresentações, que deverá ser respeitada.
- Trabalhos não apresentados ficarão sujeitos a penalidade na nota, podendo inclusive ter a nota zerada.


## Avaliação

Rubricas de avaliação

<!-- data-type="none" -->
| Descrição   | Nota   |
| :--------- | :--------- |
| Projeto alinhado com os objetivos, requisitos e demandas negociadas, com evidente empenho e aprendizado no processo | 10 a 12 |
| Projeto com algumas limitações, mas com evidente empenho e aprendizado no processo | 7 a 9 |
| Projeto muito limitado, mas mesmo assim demonstrando algum empenho no processo | 5 a 7 |
| Trabalho não entregue, ou com indícios de desonestidade acadêmica, ou feito de última hora (sem evidências de empenho e atenção às especificações) | 0 a 5 |



