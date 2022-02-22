const fs = require('fs');
module.exports = function writeFile(name, fileType) {
  const fileName =
    fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`;
  fs.writeFileSync(
    fileName,
    `function ${name}() {
    
  }`
  );
};
