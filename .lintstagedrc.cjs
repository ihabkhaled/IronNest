const path = require('path');

const buildEslintCommand = fileNames =>
  `eslint --max-warnings 0 --report-unused-disable-directives ${fileNames
    .map(f => path.relative(process.cwd(), f))
    .join(' ')} --fix`;

module.exports = {
  'src/**/*.ts': buildEslintCommand,
  'test/**/*.ts': buildEslintCommand,
};
