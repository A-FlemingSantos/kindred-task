# Guia de Integração Frontend-Backend

## 📋 Resumo das Alterações

Este documento descreve as alterações feitas para integrar o frontend React com o backend Spring Boot usando Axios.

## 🔧 Arquivos Modificados/Criados

### 1. **Arquivo de API Criado** (`src/lib/api.js`)
- **Localização**: `react-web/frontend/src/lib/api.js`
- **Propósito**: Configuração central do Axios para comunicação com o backend
- **Funcionalidades**:
  - Base URL configurada para `http://localhost:8080`
  - Interceptors de requisição e resposta para tratamento de erros
  - Headers padrão configurados
  - Preparado para adicionar autenticação JWT no futuro

### 2. **Register.jsx Atualizado** (`src/pages/Register.jsx`)
- **Alterações**:
  - Importação do módulo `api` 
  - Método `handleSubmit` transformado em assíncrono
  - Integração com endpoint `/perfil` usando POST
  - Mapeamento correto dos dados do formulário para o modelo Perfil do backend:
    - `name` → `nome`
    - `email` → `email`
    - `password` → `senha`
    - `codStatus: true` (padrão para novos usuários)
  - Tratamento de erros com mensagens específicas
  - Feedback visual para o usuário (alerts)

### 3. **PerfilController.java Atualizado**
- **Alterações**:
  - Adicionado `@CrossOrigin(origins = "http://localhost:5173")` para permitir requisições do frontend
  - Importação do `CrossOrigin` do Spring

## 🚀 Como Testar

### 1. Iniciar o Backend
```bash
cd react-web/backend
./mvnw spring-boot:run
# ou no Windows
mvnw.cmd spring-boot:run
```
O backend estará rodando em: `http://localhost:8080`

### 2. Iniciar o Frontend
```bash
cd react-web/frontend
npm run dev
# ou se usar bun
bun run dev
```
O frontend estará rodando em: `http://localhost:5173`

### 3. Testar o Cadastro
1. Acesse `http://localhost:5173/register`
2. Preencha o formulário com:
   - Nome completo
   - Email
   - Senha
   - Confirmação de senha
3. Clique em "Criar minha conta gratuita"
4. Verifique:
   - Console do navegador para logs
   - Console do backend para requisição recebida
   - Banco de dados para verificar se o perfil foi criado

## 📊 Mapeamento de Dados

### Frontend → Backend
```javascript
{
  "nome": formData.name,        // String
  "email": formData.email,      // String
  "senha": formData.password,   // String
  "codStatus": true             // Boolean
}
```

### Campos Opcionais no Backend (não enviados no cadastro)
- `sobrenome` - pode ser adicionado depois
- `telefone` - pode ser adicionado depois

## 🔐 Considerações de Segurança

### ⚠️ IMPORTANTE - Para Produção:
1. **Senha**: Nunca armazene senhas em texto plano
   - Implemente hash de senha (BCrypt) no backend antes de salvar
   
2. **CORS**: Configure adequadamente
   - Em produção, substitua `http://localhost:5173` pela URL real do frontend
   - Considere configuração global de CORS

3. **Validação**: 
   - Adicione validação no backend (@Valid, @NotNull, etc.)
   - Adicione validação mais robusta no frontend

4. **HTTPS**: Use HTTPS em produção

## 🐛 Solução de Problemas Comuns

### Erro: "Network Error" ou "ERR_CONNECTION_REFUSED"
- **Causa**: Backend não está rodando
- **Solução**: Inicie o backend na porta 8080

### Erro: CORS Policy
- **Causa**: Configuração CORS incorreta
- **Solução**: Verifique se `@CrossOrigin` está no controller

### Erro: 400 Bad Request
- **Causa**: Dados enviados não correspondem ao esperado pelo backend
- **Solução**: Verifique o mapeamento de campos no console

### Erro: 500 Internal Server Error
- **Causa**: Erro no backend (ex: banco de dados)
- **Solução**: Verifique logs do backend e configuração do banco

## 📝 Próximos Passos Sugeridos

1. **Implementar Hash de Senha**
   - Adicionar BCryptPasswordEncoder no backend
   
2. **Melhorar Feedback Visual**
   - Substituir `alert()` por componentes toast/notification
   - Usar a biblioteca Sonner já instalada
   
3. **Validação de Email**
   - Verificar email duplicado antes de criar perfil
   - Adicionar verificação por email
   
4. **Loading States**
   - Adicionar spinner/loading durante o cadastro
   - Desabilitar botão durante submit

5. **Configuração de Ambiente**
   - Criar arquivo `.env` para URLs configuráveis
   - Diferenciar ambientes dev/prod

## 📚 Recursos

- [Axios Documentation](https://axios-http.com/docs/intro)
- [Spring Boot CORS](https://spring.io/guides/gs/rest-service-cors/)
- [React Router](https://reactrouter.com/)
