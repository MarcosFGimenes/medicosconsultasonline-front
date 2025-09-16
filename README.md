# Médicos Consultas Online — Réplica (inicial)

Este é um esqueleto front‑end em **HTML + Tailwind CSS + JavaScript** usando **CDN** (sem build).  
Abra `index.html` no navegador e você já verá a página parecida com o site de referência.

## Estrutura
```
medicos-consultas-online/
├── index.html
├── assets/
│   ├── js/
│   │   └── main.js
│   ├── css/          (reservado para estilos adicionais, se desejar)
│   └── img/          (coloque imagens/ícones reais aqui, se quiser)
```
## Rodar agora
Basta abrir o arquivo `index.html` no navegador (duplo clique).

## Produção (opcional)
Para usar Tailwind compilado localmente, crie um setup Node e gere o CSS:
1. `npm init -y`
2. `npm install -D tailwindcss @tailwindcss/forms postcss autoprefixer`
3. `npx tailwindcss init -p`
4. Em `tailwind.config.js`, habilite caminho `./*.html` e `./assets/js/*.js`.
5. Crie um arquivo `assets/css/input.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
6. Rode o watcher:  
   `npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch`
7. Troque o `<script src="https://cdn.tailwindcss.com"></script>` por  
   `<link rel="stylesheet" href="./assets/css/output.css" />` no `index.html`.

## Licenças/Marca
Substitua textos e logotipos por identidades próprias caso publique. Este projeto é apenas para fins educacionais/demonstração.
