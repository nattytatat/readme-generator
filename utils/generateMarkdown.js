// Licence organisation

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.desc}

  ## Table of Contents
  * [Install](#installation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
      ${data.install}

  ## Usage
  You can run this application by running \`${data.usage}\`.

  ## Licence
  ${data.licence}

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
