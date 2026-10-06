# Backend mínimo: o mesmo frontend, responsabilidades diferentes

Exemplos minimalistas de códigos para comparar maneiras de implementar o backend de uma
aplicação web. A aplicação é muito simples: uma lista de tarefas.


## Pré-requisitos

- VS Code
- Docker com `docker compose` ou `docker-compose`

Não é necessário instalar Node.js, Python, Java, Maven ou bibliotecas dos
frameworks na máquina local.

## Exemplos

| # | Exemplo | Dados | Autenticação | Ideia principal |
|---|---|---|---|---|
| 01 | Express | memória do processo | não | backend HTTP mínimo em Node |
| 02 | FastAPI | memória do processo | não | mesmo contrato em Python |
| 03 | Spring Boot | memória do processo | não | mesmo contrato em Java |
| 04 | Express Auth | memória + sessão | sim | cookie, sessão e role |
| 05 | Supabase Auth | PostgreSQL | sim | Auth + Data API + RLS como serviço |

Nos exemplos 01–03, o frontend e o contrato são equivalentes:

```text
GET    /api/tasks
POST   /api/tasks
DELETE /api/tasks/:id
```

Os dados desaparecem quando o container é recriado. Isso é intencional: esses
exemplos isolam a fronteira HTTP antes de introduzir persistência.

## Execução no VS Code

Abra a pasta do repositório e use:

```text
Terminal → Run Task
```

Escolha um dos cinco exemplos. Depois acesse:

```text
http://localhost:8080
```

As tasks executam `docker compose down` antes de iniciar o exemplo escolhido,
pois todos usam a mesma porta externa.

Também é possível usar o terminal:

```bash
docker compose up --build express
docker compose up --build fastapi
docker compose up --build spring
docker compose up --build express-auth
docker compose up --build supabase-auth
```

Antes de trocar de exemplo:

```bash
docker compose down
```

## Roteiro de observação

### 1. Express, FastAPI e Spring

Abra DevTools → Network e crie/exclua tarefas.

Compare:

```text
frontend → HTTP → backend → array em memória
```

O navegador não precisa saber se o servidor foi escrito em JavaScript, Python
ou Java.

Procure em cada implementação onde estão:

1. a rota `GET /api/tasks`;
2. a rota `POST /api/tasks`;
3. a validação do título;
4. o código que retorna JSON;
5. a lista que representa os dados.

### 2. Reinicie um exemplo

Adicione uma tarefa e depois execute:

```bash
docker compose down
docker compose up --build express
```

A tarefa desaparece. O array não é persistência.

### 3. Express Auth

Use primeiro:

```text
ana@example.com / ana12345
```

Depois:

```text
admin@example.com / admin12345
```

Observe:

```text
POST /api/login
GET  /api/me
GET  /api/tasks
DELETE /api/tasks/:id
```

No navegador, examine o cookie de sessão. No servidor, procure:

- `requireAuth`
- `requireRole`
- `req.session.user`

A conta comum é autenticada, mas não está autorizada a excluir tarefas.
O administrador está.

### 4. Supabase

Veja `05-supabase-auth/README.md` para a preparação do projeto.

Neste caso a arquitetura muda:

```text
browser ──login────────► Supabase Auth
   │
   └──consulta─────────► Supabase Data API
                              │
                              ▼
                         PostgreSQL
                              │
                              ▼
                             RLS
```

A autenticação e a autorização continuam existindo, mas parte da implementação
é assumida pelo serviço.

## Comparação conceitual

| Responsabilidade | Express/FastAPI/Spring | Express Auth | Supabase Auth |
|---|---|---|---|
| Servir frontend | nossa aplicação | nossa aplicação | nginx do exemplo |
| Implementar endpoints de tarefas | nós | nós | Supabase Data API |
| Manter dados | array | array | PostgreSQL |
| Verificar credenciais | — | nosso backend | Supabase Auth |
| Manter estado de login | — | sessão no servidor + cookie | sessão/token do Supabase |
| Autorizar operações | — | middleware | RLS |
| Persistir dados | não | não | sim |

## Observações

- Os exemplos 01–04 são pouco realistas: por exemplo, usam contas no próprio código. O objetivo é dar visibilidade a conceitos, não servir de modelo. 

- O exemplo Supabase usa um projeto Supabase real e portanto depende de acesso à internet.
