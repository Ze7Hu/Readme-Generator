// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    return `/https://img.shields.io/badge/license-${license}-`
  }
  }
  
  //function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  
    let licenseLink='';
  
    if (license === "MIT"){
      licenseLink=' https://opensource.org/license/mit/'
  
    } else if(license==='ISC'){
      licenseLink='https://opensource.org/license/isc-license-txt/'
  
    }else if (license ==='BSD'){
      licenseLink='https://opensource.org/license/bsd-3-clause/'
  
    }else if(license==='Apache'){
      licenseLink='http://www.apache.org/licenses/LICENSE-2.0'
  
    }else{
      licenseLink=''
  
    }
    return licenseLink;
  
  }
  
  // function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(license === 'none'){
      return ""
    }
    else{
      return `## License
      license:${license}`
      
    }
  
  }
  
  //Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    by ${data.Github}
    ${renderLicenseBadge(data.licence)}
    

  ## Table of Content
  * [Description](#Description)
  * [Usage](#Usage)
  * [Installation](#Installation)
  * [Conrtibuting](#Contributing)
  * [Questions](#Questions)
  * [Testing](#Testing)
  * [License](#License)



  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contributing
  ${data.contributing}

  ## Questions
  * [Email]${data.email}
  * [Github]${data.Github} (https://github.com/${data.Github})
  * [Title] 1${data.title}
  

  ## Testing
  ${data.testing}
  ${renderLicenseSection(data.license)}
  `;
  }
  
  
  
  module.exports = generateMarkdown;