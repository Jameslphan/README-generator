/*https://img.shields.io/badge/License-Apache%202.0-red
https://img.shields.io/badge/License-GNU%20General%20Public%20v3.0-orange
https://img.shields.io/badge/License-MIT-yellow
https://img.shields.io/badge/License-BSD%203--Clause%20New%2FRevised-green
https://img.shields.io/badge/License-Boost%20Software-brightgreen
https://img.shields.io/badge/License-Creative%20Commons%20Zero%20v1.0%20Universal-blue
https://img.shields.io/badge/License-Eclipse%20Public%202.0-purple
https://img.shields.io/badge/License-GNU%20Affero%20General%20Public%20v3.0-silver
https://img.shields.io/badge/License-GNU%20General%20Public%20v2.0-gold
https://img.shields.io/badge/License-GNU%20Lesser%20General%20Public%20v2.1-brown
https://img.shields.io/badge/License-Mozilla%20Public%202.0-teal
https://img.shields.io/badge/License-Unlicense-black*/
/*const licenseArray = [
  {
    name: 'Apache License 2.0',
    rename: 'Apache_2.0',
  },
  {
    name: 'GNU General Public License v3.0',
    rename: 'GNU_General_Public_v3.0',
  },
  {
    name: 'MIT',
    rename: 'MIT',
  },
  {
    name: 'BSD 3-Clause "New" or "Revised"',
    rename: 'BSD_3-Clause_New/Revised',
  },
  {
    name: 'Boost Software License 1.0',
    rename: 'Boost_Software_1.0',
  },
  {
    name: 'Creative Commons Zero v1.0 Universal',
    rename: 'Creative_Commons_Zero_v1.0_Universal',
  },
  {
    name: 'Eclipse Public License 2.0',
    rename: 'Eclipse_Public_2.0',
  },
  {
    name: 'GNU Affero General Public License v3.0',
    rename: 'GNU_Affero_General_Public_v3.0',
  },
  {
    name: 'GNU General Public License v2.0',
    rename: 'GNU_General_Public_v2.0',
  },
  {
    name: 'GNU Lesser General Public License v2.1',
    rename: 'GNU_Lesser_General_Public_v2.1',
  },
  {
    name: 'Mozilla Public License 2.0',
    rename: 'Mozilla_Public_2.0',
  },
  {
    name: 'The Unlicense',
    rename: 'Unlicense',
  },
];



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseTitle = (license) => {
    for (const islicense of licenseArray) {
      if (islicense.name === license)
      return islicense;
    }}

  https://img.shields.io/badge/License-<MESSAGE>-blue
}*/

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## License
  ${data.license}
  


`
};

module.exports = generateMarkdown;
