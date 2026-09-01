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
https://liascript.github.io/course/?https://raw.githubusercontent.com/AndreaInfUFSM/elc1090-2026b/master/classes/09/README.md
-->



[![LiaScript](https://raw.githubusercontent.com/LiaScript/LiaScript/master/badges/course.svg)](https://liascript.github.io/course/?https://raw.githubusercontent.com/AndreaInfUFSM/elc1090-2026b/master/classes/09/README.md)


# Segundo projeto

> Objetivo: desenvolver uma aplicação web com backend e persistência de dados, a partir de demandas/ideias BREVEMENTE negociadas em interação com outra pessoa


O que você vai aprender/exercitar neste projeto?

- Integrar frontend e backend em uma aplicação web
- Projetar e implementar persistência de dados
- Projetar e consumir uma API para comunicação entre frontend e backend
- Desenvolver uma solução a partir de demandas/ideias que dependem de alguma interação **breve** com outra pessoa


## Requisitos

- Desenvolvimento individual
- Aplicação web com frontend e backend
- Persistência de dados do lado do servidor
- Comunicação entre frontend e backend por meio de uma API que aceite leituras e escritas
- Deploy da aplicação em infraestrutura gratuita
- Cooperação com pelo menos um colega, conforme uma das modalidades a seguir

Obs.: Para estudantes que já tenham experiência/facilidade com esses requisitos, é possível negociar outros requisitos e modalidades com a professora!

## Cooperação / modalidades

Cada estudante deverá negociar com colegas uma das modalidades abaixo.

A. Mesmo problema, soluções diferentes

- Dois ou mais estudantes escolhem um mesmo problema
- Cada estudante desenvolve sua própria solução
- As implementações podem usar tecnologias, interfaces, arquiteturas ou outras decisões diferentes
- Os estudantes testam e comparam as soluções desenvolvidas


B. Alguém propõe, outra pessoa desenvolve

- Um/a estudante propõe um problema/demanda/ideia
- Outro/a estudante escolhe a proposta e desenvolve sua própria aplicação
- Quem propôs testa a solução no final

Obs.: 

- A modalidade "B" também pode gerar ideias para a modalidade "A".
- Quem escolher a modalidade "A" também pode gerar ideias para a modalidade "B".


## Recursos permitidos

- Backend: linguagem, framework ou plataforma à escolha
- Banco de dados relacional ou não relacional
- Frontend: HTML, CSS, JavaScript, bibliotecas ou frameworks
- APIs e serviços externos (quando aplicáveis)
- Uso inteligente de IA: aproveite ferramentas de IA para ajudar no desenvolvimento e aprendizado, não para se livrar rapidamente do trabalho; o processo precisará gerar evidências



## Desenvolvimento

Etapas:

- negociar a modalidade de cooperação e a proposta inicial, até dia 08/09
- definir funcionalidades adequadas ao prazo/conhecimento
- criar o frontend, backend e persistência
- integrar frontend e backend por meio de API
- publicar versões funcionais durante o desenvolvimento
- realizar o deploy da versão final
- obter/fornecer feedback de/para a pessoa envolvida na cooperação

O desenvolvimento deve ser incremental, com commits frequentes e avanços demonstrados durante as aulas.

## Quadro compartilhado de escolhas

Este documento compartilhado e aberto para edição vai manter um registro de propostas e cooperações:

https://docs.google.com/document/d/1yensUIRce8eLGguXqsL_m7PCYF62Z6rl_jE8VyKpvUw/edit?usp=sharing


⚠️ **ATENÇÃO!** Após o prazo final para propostas (08/09), o documento será fechado para edição. 


## Tecnologias possíveis

As tecnologias são de livre escolha, mas devem permitir **deploy gratuito** da aplicação durante a disciplina.

Algumas possibilidades:

- **Java:** [Spring Boot](https://spring.io/projects/spring-boot), [Quarkus](https://quarkus.io/)
- **Python:** [Flask](https://flask.palletsprojects.com/), [FastAPI](https://fastapi.tiangolo.com/), [Django](https://www.djangoproject.com/)
- **JavaScript / TypeScript:** [Express](https://expressjs.com/), [Fastify](https://fastify.dev/), [NestJS](https://nestjs.com/)
- **PHP:** [Laravel](https://laravel.com/)
- **Bancos relacionais:** [SQLite](https://www.sqlite.org/), [PostgreSQL](https://www.postgresql.org/), [MySQL](https://www.mysql.com/)
- **Bancos não relacionais:** [MongoDB](https://www.mongodb.com/)
- **ORM / acesso a dados:** [Hibernate](https://hibernate.org/), [SQLAlchemy](https://www.sqlalchemy.org/), [Prisma](https://www.prisma.io/)
- **Backend como serviço:** [Supabase](https://supabase.com/), [Firebase](https://firebase.google.com/)
- **Hospedagem / deploy:** [Render](https://render.com/), [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/) ou outros serviços com planos gratuitos adequados ao projeto

Outras tecnologias podem ser utilizadas, desde que atendam aos requisitos e seja possível explicar as principais decisões de arquitetura, persistência e comunicação entre frontend e backend.

### Observações

- **SQLite** é simples e adequado para muitos projetos, mas seu uso em deploy pode depender das características da infraestrutura escolhida, especialmente quando o sistema de arquivos não é persistente.
- **Vercel** e **Netlify** são adequados para frontend e funções serverless; nem sempre substituem diretamente uma plataforma de hospedagem de backend tradicional.
- O uso de serviços que abstraem parte do backend, como Supabase ou Firebase, não dispensa a compreensão do modelo de dados, das operações realizadas e da arquitetura da aplicação.
- A escolha da stack deve considerar desde o início a viabilidade de **deploy gratuito**, evitando soluções que só funcionem localmente ou exijam infraestrutura paga para atender aos requisitos do projeto.


## Entrega

- Use o repositório de entrega que será criado automaticamente na organização: https://github.com/orgs/elc1090/repositories
- Faça commits frequentes, seguindo boas práticas
- Preencha seu README.md a partir do template que será fornecido posteriormente
- O repositório deve conter o código necessário para execução do projeto
- Prepare-se para uma apresentação do projeto com duração de 3 a 5 minutos, com ênfase no processo de desenvolvimento, nas decisões tomadas e na cooperação realizada

**Prazos**:

- Definição de modalidade e proposta: até dia 08/09
- Entrega até 16/09, apresentações dias 17 e 22/09



## Avaliação

Rubricas de avaliação

<!-- data-type="none" -->
| Descrição   | Nota   |
| :--------- | :--------- |
| Projeto alinhado com os objetivos, requisitos e demandas negociadas, com evidente empenho e aprendizado no processo | 10 a 12 |
| Projeto com algumas limitações, mas com evidente empenho e aprendizado no processo | 7 a 9 |
| Projeto muito limitado, mas mesmo assim demonstrando algum empenho no processo | 5 a 7 |
| Trabalho não entregue, ou com indícios de desonestidade acadêmica, ou feito de última hora (sem evidências de empenho e atenção às especificações) | 0 a 5 |



