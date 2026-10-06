# 05 - Supabase Auth + RLS

Este exemplo é propositalmente diferente dos três primeiros:

```text
browser → Supabase Auth
browser → Supabase Data API → PostgreSQL + RLS
```

Não há um servidor Express/FastAPI/Spring escrito por nós.

## Preparação única

1. Crie/use um projeto Supabase.
2. Execute `setup.sql` no SQL Editor.
3. Em **Authentication**, crie pelo menos dois usuários de teste com email/senha.
4. Na raiz deste repositório, copie `.env.example` para `.env` e preencha:
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
5. Execute `docker compose up --build supabase-auth`.

A chave publicável é apropriada para uso no navegador. **Não coloque a
`service_role` key no frontend.**

## O que observar

A RLS usa `auth.uid()` para limitar cada usuário às próprias tarefas. Abra duas
contas diferentes e note que cada uma enxerga apenas suas linhas.
