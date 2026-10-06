# 04 - Express Auth

Demonstra autenticação, sessão, cookie e autorização sem adicionar banco de dados.

Contas de demonstração:

- `ana@example.com` / `ana12345` → `role=user`
- `admin@example.com` / `admin12345` → `role=admin`

A exclusão de tarefas exige `admin`.

## Importante

Este é um exemplo didático. O `MemoryStore` padrão do `express-session`, o segredo
fallback e as contas hard-coded **não são escolhas de produção**. A intenção é
deixar visível quem autentica, onde fica o estado da sessão e onde a autorização
é verificada.
