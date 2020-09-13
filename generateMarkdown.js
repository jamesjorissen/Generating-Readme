// function to generate markdown for README
function generateMarkdown(data) {
    return `
    // # ${data.project}
    ![License](https://img.shields.io/github/license/${data.username}/${data.repo})
    ## Description
    * ${data.projectDescription}
    ## Table of Contents
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    ## Installation
    To install necessary dependencies, run the following command:
        ${data.installDependencies}
    ## Usage
    ${data.usefulInformation}
    ## License
    * ${data.license}
    ## Contributing
    ${data.contributions}
    ;
  `
}

module.exports = generateMarkdown;