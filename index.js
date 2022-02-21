const fs = require('fs');

function writeFile(name) {
  fs.writeFileSync(
    `./${name}.js`,
    `function ${name}() {
    
  }`
  );
}

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What is the name of your function?', answer => {
  writeFile(answer);
  console.log(answer);

  rl.close();
});
