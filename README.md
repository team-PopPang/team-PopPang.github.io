# 0. Node & Yarn
node -v
npm install -g yarn

# 1. Create Docusaurus Project
npx create-docusaurus@latest PopPang-Docs classic

# 2. Move & Install
cd PopPang-Docs
yarn

# 3. Git Connect
git init
git add .
git commit -m "Initialize PopPang Docs"
git branch -M main
git remote add origin https://github.com/team-PopPang/team-poppang.github.io.git
git push -u origin main

# 4. Config 수정 (url/baseUrl/org/project)

# 5. Organization Page Deploy
DEPLOYMENT_BRANCH=main USE_SSH=true yarn deploy

# 6. 배포 후 접속
# https://team-PopPang.github.io


<!-- # Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch. -->
