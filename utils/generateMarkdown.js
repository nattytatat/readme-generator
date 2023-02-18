// function to generate markdown for README
function generateMarkdown(data) {

  // license organisation
  let badge = '';

  if (data.license.includes('MIT')) {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.license.includes('Creative Commons')) {
    badge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (data.license.includes('Apache')) {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (data.license.includes('GNU')) {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }

return `
  # ${data.title}

  ${badge}

  ## Description
  ${data.desc}

  ## Table of Contents
  * [Install](#installation)
  * [Usage](#usage)
  * [license](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
      ${data.install}

  ## Usage
  You can run this application by running \`${data.usage}\`.

  ## license
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributions}

  ## Tests

  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions
  If you have any questions regarding this project, please email me at ${data.email}
  You can find my other projects at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
