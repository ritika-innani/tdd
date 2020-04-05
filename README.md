# tdd
Test Driven Development

Setup Repo - 
1. setup new npm package - npm init
2. install chai, mocha - npm install --save-dev chai , npm install --save-dev mocha
3. install type definitions for node, chai, mocha, sinon -
    npm install --save-dev node/chai/mocha/sinon
4. setup gulp for compiling typescript - 
   npm install -g typescript,
   npm install --save-dev typescript, 
   tsc --init
   configure tsconfig.json file accordingly,
5. create a gulp task to compile the ts files.
    npm install -g gulp-cli
    npm install --save-dev gulp gulp-typescript
    create gulp task in gulpfile.js
6. create a src and test directory and add a test file to src folder. check gulp task


Start with writing tests -
1. setup ts-node by installing it - npm install ts-node
2. configure test command - node_modules/mocha/bin/_mocha --require ts-node/register <path to file>
3. npm run test
