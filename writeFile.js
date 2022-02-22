const fs = require('fs');

const template = {
  component: name => {
    const componentString = `import styled from 'styled-components'
  
export default function ${name}() {
  return <div>${name}</div>
  }
  `;
    return componentString;
  },
  spec: name => {
    const specString = `import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ${name} from './${name}'
  
  describe('${name}', () => {
    it('' , () => {
      render(<${name} />)
    })
  })
  `;
    return specString;
  },
  stories: name => {
    const storiesString = `import ${name} from './${name}'
  
export default {
  title: 'Component/${name}',
  component: ${name},
}

const Template = () => <${name} />;

export const ${name}Complete = Template.bind({});
`;
    return storiesString;
  },
};

module.exports = function writeFile(name, fileType) {
  const fileName =
    fileType === 'component' ? `./${name}.js` : `./${name}.${fileType}.js`;

  const fileString = template[fileType](name);

  fs.writeFileSync(fileName, fileString);
};
