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
      choices: ['component', 'spec', 'stories'],
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
    answers.fileTypes.forEach(type => {
      writeFile(answers.functionName, type);
    });
  });

// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

// rl.question('What is the name of your function? ', answer => {
//   writeFile(answer);
//   console.log(answer);

//   rl.close();
// });
