const writeFile = require('./writeFile.js');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What is the name of your function? ',
    },
    {
      type: 'checkbox',
      name: 'fileTypes',
      message: 'Which file types should be created? ',
      choices: ['Component', 'Spec', 'Stories'],
      validate: answer => {
        if (answer.length < 1) {
          return 'You have to select at least one type!';
        } else {
          return true;
        }
      },
    },
  ])
  .then(answers => {
    writeFile(answers.functionName);
  });

// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

// rl.question('What is the name of your function? ', answer => {
//   writeFile(answer);
//   console.log(answer);

//   rl.close();
// });
