// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
class Markdown {
  static renderLicenseBadge(license) {
    const badges = {
      MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
      GPLv2:
        "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)",
      GPLv3:
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
      IBM: "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)",
    };
    return badges[license];
  }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  static renderLicenseLink(license) {
    const links = {
      MIT: "[MIT](https://opensource.org/licenses/MIT)",
      GPLv2:
        "[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
      GPLv3: "[GPLv3](https://www.gnu.org/licenses/gpl-3.0)",
      IBM: "[IBM](https://opensource.org/licenses/IPL-1.0)",
    };
    return links[license];
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  static renderLicenseSection(license) {
    if (license) {
      return `Licensed by ${this.renderLicenseLink(license)}.`;
    } else {
      return " ";
    }
  }

  // TODO: Create a function to generate markdown for README
  static generateMarkdown(data) {
    return `# ${data.title}

  ${this.renderLicenseBadge(data.license)}


  ## Table of Contents
  -[Project Description](#description)

  -[Installation](#installation) 

  -[Usage](#usage)  

  -[License](#license)  

  -[Tests](#tests)  

  -[Contributions](#contributions)  

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Licesne

  ${this.renderLicenseSection(data.license)}

  ## Links

  Link to application:

  ## Tests

  ${data.tests}

  ## Contributions

  ${data.contributions}

  ## Contact

  For additional information, contact me at my github: 
  ${data.user} or email me at ${data.email}!

`;
  }
}

module.exports = Markdown;
