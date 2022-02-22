const writeFile = require('./writeFile.js');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'createFunctionFile',
      message: 'What is the name of your function? ',
      default: 'Function',
    },
  ])
  .then(answers => {
    writeFile(answers.createFunctionFile);
  });

// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

// rl.question('What is the name of your function? ', answer => {
//   writeFile(answer);
//   console.log(answer);

//   rl.close();
// });
