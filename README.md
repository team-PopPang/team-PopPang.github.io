# 📘 PopPang Docs 설치 & GitHub Pages 배포 가이드 (Organization Pages)

Docusaurus 기반 문서 사이트를 GitHub Pages에 배포하는 전체 과정입니다.

레포 구조는 다음과 같습니다:

- `docs` 브랜치 → **문서 소스코드 (개발 브랜치)**
- `main` 브랜치 → **빌드 결과물이 자동 배포되는 브랜치 (절대 직접 수정 X)**

최종 배포 URL:  
👉 https://team-poppang.github.io

---

# 🚀 0. Node & Yarn 설치 확인

```sh
node -v
npm install -g yarn
```

---

# 🚀 1. Docusaurus 프로젝트 생성

```sh
npx create-docusaurus@3.1.1 PopPang-Docs classic
```

---

# 🚀 2. 프로젝트 폴더 이동

```sh
cd PopPang-Docs
```

---

# 🚀 3. yarn 패키지 설치

```sh
yarn
```

---

# 🚀 4. npm 잔여 파일 삭제

```sh
rm -f package-lock.json
```

---

# 🚀 5. 개발 서버 외부 접속 허용  
※ `package.json` 수정 필요

```json
"start": "docusaurus start --host 0.0.0.0"
```

---

# 🚀 6. 개발 서버 실행

```sh
yarn start
```

---

# === GitHub 배포 세팅 ===

# 🚀 7. Git 초기화 및 첫 커밋

```sh
git init
git add .
git commit -m "Initialize Docusaurus"
```

---

# 🚀 8. GitHub 리모트 연결 및 docs 브랜치로 push  
⚠️ PopPang Docs 소스코드는 **docs 브랜치**에서 관리함

```sh
git branch -M docs
git remote add origin https://github.com/team-PopPang/team-PopPang.github.io.git
git push -u origin docs
```

---

# 🚀 9. docusaurus.config.js 설정 변경

```js
url: 'https://team-poppang.github.io',
baseUrl: '/',
organizationName: 'team-PopPang',
projectName: 'team-poppang.github.io',
deploymentBranch: 'main',
```

---

# 🚀 10. GitHub Pages 배포 실행  
⚠️ 반드시 docs 브랜치 상태에서 실행

```sh
DEPLOYMENT_BRANCH=main USE_SSH=true yarn deploy
```

성공 메시지:

```
Website is live at "https://team-PopPang.github.io/"
```

---

# 📌 브랜치 구조 정리

```
docs  → Docusaurus 소스코드 (여기에서 편집)
main  → 빌드 결과물 (자동 생성 / 직접 수정 금지)
```

---

# 📌 GitHub Pages 설정  
GitHub → Settings → Pages

- **Branch:** main  
- **Folder:** /(root)

---

# 🎉 완료!  
이 가이드만 따라 하면 PopPang Docs 개발 & 배포가 완벽하게 동작합니다.


<!-- ```bash
# 0. Node 확인 & Yarn 설치
node -v
npm install -g yarn


# 1. Docusaurus 프로젝트 생성
npx create-docusaurus@3.1.1 PopPang-Docs classic


# 2. 프로젝트 폴더 이동
cd PopPang-Docs


# 3. yarn으로 패키지 설치
yarn


# 4. npm 잔여 파일 삭제
rm -f package-lock.json


# 5. 개발 서버 외부 접속 허용 (package.json 수정)
# ⚠️ 여기만 직접 열어서 수정해야 함
# "start": "docusaurus start --host 0.0.0.0",
# 로 바꿔주기
# (VSCode 또는 에디터에서 package.json 열고 수정)


# 6. 개발 서버 실행 (테스트)
yarn start


# ==== GitHub 배포 세팅 ==== #

# 7. Git 초기화 & 커밋
git init
git add .
git commit -m "Initialize Docusaurus"


# 8. GitHub 리모트 연결
git branch -M main
git remote add origin https://github.com/dodokyo/PopPang-Docs.git


# 9. GitHub 업로드
git push -u origin main


# 10. Docusaurus GitHub Pages 배포
yarn deploy

``` -->


<!-- # 0. Node & Yarn
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
# https://team-PopPang.github.io -->


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
