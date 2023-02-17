// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.desc}

  ## Table of Contents
  * [Install](#installation)
  * [Usage](#usage)
  * [Licence](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Licence
  ${data.licence}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions regarding this project, please contact ${data.username}
  You can also email me at ${data.email}
`;
}

module.exports = generateMarkdown;
