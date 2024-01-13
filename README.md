# THIS IS A PROJECT USING NODE JS, EXPRES JS AND TYPESCRIPT

## Step 1: initilize node js
```bash
npm init -y
```

## Step 2: install the package manager of your choice
```bash
yarn install
# or
pnpm install
# or
bun install
```

- in this project we will use yarn
## Step 3: Install ts as a development dependency
```bash
yarn add -D typescript
```

## Step 4: Create file tsconfig.ts

```bash
# windows
new-Item tsconfig.json -Type File
# linux
touch tsconfig.json
```

## Step 5: Intall express

```bash
yarn add express@4.17.1
# and types for ts
yarn add -D @types/express@4.17.1
```


## scripts

```json
"scripts": {
    "build": "npx tsc",
    "start": "node dist/app.js",
    "dev": "nodemon dist/app.js"
},
```