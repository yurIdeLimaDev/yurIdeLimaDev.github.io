# Portfólio | Yuri de Lima

Site pessoal de Yuri de Lima, com foco em Application Security,
DevSecOps e automação de segurança.

## Conteúdo

- projetos técnicos selecionados;
- experiência profissional e resultados;
- competências, formação e idiomas;
- canais de contato.

## Execução local

O site é estático e não exige instalação de dependências. Sirva a raiz do
repositório com qualquer servidor HTTP local, por exemplo:

```bash
python -m http.server 4173
```

## Publicação

## Edição dos idiomas

O conteúdo em português e inglês fica em `scripts/build-site.mjs`.
Após editar, execute `node scripts/build-site.mjs` para atualizar `index.html`
e `en/index.html`. As duas páginas são HTML estático e não dependem de JavaScript
para exibir o conteúdo. Os currículos de cada idioma ficam em `assets/`.

O visual compartilhado fica em `styles.css` e o menu em `script.js`.

## GitHub Pages

O repositório `yurIdeLimaDev.github.io` é publicado diretamente pelo GitHub
Pages a partir da branch `main`.
