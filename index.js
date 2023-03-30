const fs = require('fs');

const path =require('path'); 

const generateMarkdown= require('./utils/generateMarkdown');




const inquirer= require('inquirer')
//console.log('inquirer available');



 //Array of questions for user input
const questions = [

  {
    type:'input',
    name:'Github',
    message:'what is your Github username?'

  },
  {
    type:'input',
    name:'email',
    message:'What is your email address?',

  },
  {
    type: 'input',
    name: 'title',
    message:"What is your project's name?",

  },
  {
    type:'input',
    name:'description',
    message:'Please write a brief description of your project.',

  },
  {
    type:'input',
    name:'installation',
    message:'Please provide instructions on how to install dependencies.',

  },

  {
    type:'input',
    name:'usage',
    message:'What does the user need to know about using the repository?',

  },

  {
    type:'input',
    name:'contributing',
    message:'What does the user need to know about contributing to the repository?',

  },
  {
    type:'input',
    name:'testing',
    message:'Please provide information on how to run tests.',

  },
  {
    type:'list',
    name:'license',
    message:'What kind of license should you project have?', 
    choices:['MIT', 'ISC', 'BSD', 'APACHE 2.0', 'none']

  },
]  
// function to write README file
function writeToFile(fileName,data){
  fs.writeFileSync(path.join(process.cwd(), fileName),data);
} 

function init() {
  inquirer.prompt(questions)
  .then(function(data){
    writeToFile("generated/README.md", generateMarkdown(data));
  console.log(data)
  })
}

    
// Function call to initialize app
init();