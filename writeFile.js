const fs = require('fs');
const templates = require('./templates.js');

module.exports = function writeFile(name, fileType) {
  const fileName =
    fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`;

  const fileString = templates[fileType](name);

  fs.writeFileSync(fileName, fileString);
};
